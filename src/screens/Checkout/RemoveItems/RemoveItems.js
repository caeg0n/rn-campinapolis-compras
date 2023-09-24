import React from 'react';
import { Animated, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Box, Text } from '@src/components';
import { HeadingInformation } from './HeadingInformation';
import { mockDishDetails } from "@src/data"
import { SideDishes } from "./SideDishes"
import { AddToBasketForm } from './AddToBasketForm';
import { formatCurrency } from '@src/utils';
import styles from './RemoveItems.style';
import { useAppTheme } from '@src/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useExploreStackNavigation } from '@src/hooks';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function findObjectById(id, data) {
  for (const categoryKey in data) {
    const categoryArray = data[categoryKey];
    for (const object of categoryArray) {
      if (object.id === id) {
        return object;
      }
    }
  }
  return null;
}

export const RemoveItems = ({ route }) => {
  const { all_organizations } = useSelector((state) => state.userReducer);
  const { cartItem } = route.params;
  const organization_id = cartItem[0].dish.organization_id;
  const organization = findObjectById(organization_id, all_organizations);
  
  //let [my_product, setMyProduct] = React.useState({});
  //const { product } = route.params;
  const { colors } = useAppTheme();
  // const [totalPrice, setTotalPrice] = React.useState(parseFloat(product.price));
  const [scrollY] = React.useState(new Animated.Value(0));
  const { goBack } = useExploreStackNavigation();
  const { bottom } = useSafeAreaInsets();

  const addSideDishToBasket = React.useCallback(
    dish => {
      // const existedDishIndex = selectedSideDishes.find(
      //   item => item.id === dish.id
      // )
      // if (existedDishIndex) {
      //   setSelectedSideDishes(
      //     selectedSideDishes.filter(item => item.id !== dish.id)
      //   )
      //   setTotalPrice(totalPrice - parseFloat(existedDishIndex.price))
      // } else {
      //   setSelectedSideDishes([...selectedSideDishes, dish])
      //   setTotalPrice(totalPrice + parseFloat(dish.price))
      }
    // },
    // [selectedSideDishes, totalPrice]
  )

  useEffect(() => {
    // setMyProduct({ ...product, amount: 1 });
  }, []);

  const updateTotalDishAmount = React.useCallback(
    (amount) => {
      // setMyProduct({ ...product, amount: amount });
      // setTotalPrice(parseFloat(product.price) * amount);
    },
    [],
  );

  const onAddToBasketButtonPress = () => {
    // cartItems.push({ dish: my_product });
    // updateCartItems(cartItems, totalPrice);
    goBack();
  };

  const coverTranslateY = scrollY.interpolate({
    inputRange: [-4, 0, 10],
    outputRange: [-2, 0, 3],
  });

  const coverScale = scrollY.interpolate({
    inputRange: [-200, 0],
    outputRange: [2, 1],
    extrapolateRight: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [150, 250],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <Box
    flex={1}
    style={{
      paddingBottom: bottom,
    }}>
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}
      enabled>
      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {
            useNativeDriver: true,
          },
        )}>
        <Animated.View
          style={[
            styles.coverPhotoContainer,
            {
              transform: [
                {
                  translateY: coverTranslateY,
                },
              ],
            },
          ]}>
          <Animated.Image
            source={{uri: organization.cover} || {}}
            style={[
              styles.coverPhoto,
              {
                transform: [
                  {
                    scale: coverScale,
                  },
                ],
              },
            ]}
          />
        </Animated.View>
        <HeadingInformation organization={organization} />
        <SideDishes
          data={mockDishDetails}
          addSideDishToBasket={addSideDishToBasket}
        />
        {/* <AddToBasketForm updateTotalDishAmount={updateTotalDishAmount} /> */}
      </Animated.ScrollView>
    </KeyboardAvoidingView>
    <Box
      paddingHorizontal="m"
      paddingVertical="s"
      alignItems="center"
      justifyContent="center">
      <Button
        isFullWidth
        label={`Atualizar Pedido - ${formatCurrency(0)}`}
        onPress={onAddToBasketButtonPress}
      />
    </Box>
    <Animated.View
        style={[
          styles.header,
          {
            opacity: headerOpacity,
            backgroundColor: colors.card
          }
        ]}
      >
        <Text variant="subHeader" numberOfLines={1} paddingHorizontal="l">
          {organization.name}
        </Text>
      </Animated.View>
  </Box>
  );
};
