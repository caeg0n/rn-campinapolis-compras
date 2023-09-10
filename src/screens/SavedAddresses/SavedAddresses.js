import React from 'react';
import { Box, Section, Divider, Icon, ListRowItem } from '@src/components';
import { ScrollView } from 'react-native-gesture-handler';
// import { favoriteAddresses } from '@src/data/mock-address';
import { useExploreStackNavigation } from '@src/hooks';
// import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

export const SavedAddresses = () => {
  const navigation = useExploreStackNavigation();
  const { addresses } = useSelector((state) => state.sessionReducer);
  console.log(addresses);
  const isAddressesEmpty = !addresses || addresses.length === 0;

  // useFocusEffect(
  //   React.useCallback(() => {
  //     //dispatch(getIsRegistered(uuid));
  //   }, [all_addresses]),
  // );

  useEffect(() => {
    console.log('SaveAddress');
  }, []);

  const addAddressItemPress = () => {
    navigation.navigate('AddAddress');
  };

  const removeAddressItemPress = (id) => {
    console.log(id);
    //navigation.navigate('AddAddress');
  };

  const setAddress = () => {
    console.log('kkkkkk');
  };

  return (
    <ScrollView>
      <Section title="Escolha o Endereço" hasDivider={true}>
        {!isAddressesEmpty && (
          <Box>
            {addresses.reverse().map((item, index) => {
              //const { id, name, description, isHome, isWork } = item;
              const { id, name, address, isHome = true } = item;
              let rightElement;
              if (isHome) {
                rightElement = (
                  <TouchableOpacity onPress={() => removeAddressItemPress(id)}>
                    <Icon name="trash" color="red" />
                  </TouchableOpacity>
                );
                // } else if (isWork) {
                //   rightElement = <Icon name="briefcase" />;
                // }
              }
              return (
                <Box key={index}>
                  <ListRowItem
                    id={id}
                    title={name}
                    subTitle={address}
                    rightElement={rightElement}
                    onPress={setAddress}
                  />
                  <Divider />
                </Box>
              );
            })}
            <ListRowItem
              title="Adicionar Endereço"
              subTitle="Salve seus endereços favoritos"
              onPress={addAddressItemPress}
            />
          </Box>
        )}
        {isAddressesEmpty && (
          <ListRowItem
            title="Adicionar Endereço"
            subTitle="Salve seus endereços favoritos"
            onPress={addAddressItemPress}
          />
        )}
      </Section>
    </ScrollView>
  );
};
