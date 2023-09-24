import React from 'react';
import { Animated, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Box } from '@src/components';
import { HeadingInformation } from './HeadingInformation';
import { AddToBasketForm } from './AddToBasketForm';
import { CartContext } from '@src/cart';
import { formatCurrency } from '@src/utils';
import styles from './DishDetails.style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useExploreStackNavigation } from '@src/hooks';
import { useEffect } from 'react';
import { SideDishes } from "./SideDishes"
import { mockDishDetails } from "@src/data"
//import { useSelector } from 'react-redux';
//import { useAppTheme } from '@src/theme';

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

export const DishDetails = ({ route }) => {
  //const { remove_item_mode = false } = route.params;
  //const { colors } = useAppTheme();
  const { organizationTitle = '' } = route.params;
  const { subtotal = 'R$0.0' } = route.params;
  const { product } = route?.params;
  const [scrollY] = React.useState(new Animated.Value(0));
  const { goBack } = useExploreStackNavigation();
  const [totalPrice, setTotalPrice] = React.useState(parseFloat(product?.price || "0"));
  const { cartItems, updateCartItems } = React.useContext(CartContext);
  const { bottom } = useSafeAreaInsets();
  let [my_product, setMyProduct] = React.useState({});
  
  useEffect(() => {
    setMyProduct({ ...product, amount: 1 });
  }, [product]);

  const updateTotalDishAmount = React.useCallback(
    (amount) => {
      setMyProduct({ ...product, amount: amount });
      setTotalPrice(parseFloat(product.price) * amount);
    },
    [product],
  );

  const onAddToBasketButtonPress = () => {
    cartItems.push({ dish: my_product });
    updateCartItems(cartItems, totalPrice);
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
              source={{ uri: product?.image } || {}}
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
          <HeadingInformation subtotal={subtotal} organizationTitle={organizationTitle} data={product} />
          { !product && <SideDishes data={mockDishDetails} addSideDishToBasket={{}} /> }
          { product && <AddToBasketForm updateTotalDishAmount={updateTotalDishAmount} /> }
        </Animated.ScrollView>
      </KeyboardAvoidingView>
      <Box
        paddingHorizontal="m"
        paddingVertical="s"
        alignItems="center"
        justifyContent="center">
        <Button
          isFullWidth
          label={`Adicionar ao Carrinho - ${formatCurrency(totalPrice)}`}
          onPress={onAddToBasketButtonPress}
        />
      </Box>
      {/* <Animated.View
        style={[
          styles.header,
          {
            opacity: headerOpacity,
            backgroundColor: colors.card,
          },
        ]}>
        <Text variant="subHeader" numberOfLines={1} paddingHorizontal="l">
          {mockDishDetails.title}
        </Text>
      </Animated.View> */}
    </Box>
  );
};
