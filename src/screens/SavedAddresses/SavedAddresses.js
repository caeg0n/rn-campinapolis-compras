import React from 'react';
import { Box, Section, Divider, Icon, ListRowItem } from '@src/components';
import { ScrollView } from 'react-native-gesture-handler';
// import { favoriteAddresses } from '@src/data/mock-address';
import { useExploreStackNavigation } from '@src/hooks';
// import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
//import { getAddresses } from '@src/redux/actions/user';

export const SavedAddresses = () => {
  const navigation = useExploreStackNavigation();
  const { all_addresses } = useSelector((state) => state.userReducer);
  const isAddressesEmpty = !all_addresses || all_addresses.length === 0;

  // useFocusEffect(
  //   React.useCallback(() => {
  //     //dispatch(getIsRegistered(uuid));
  //   }, [all_addresses]),
  // );

  const addAddressItemPress = () => {
    navigation.navigate('AddAddress');
  };

  const removeAddressItemPress = () => {
    navigation.navigate('AddAddress');
  };

  const setAddress = () => {
    console.log('kkkkkk');
  };

  return (
    <ScrollView>
      <Section title="Escolha o Endereço" hasDivider={true}>
        {!isAddressesEmpty && (
          <Box>
            {all_addresses.reverse().map((item, index) => {
              //const { id, name, description, isHome, isWork } = item;
              const { id, name, address, isHome = true } = item;
              let rightElement;
              if (isHome) {
                rightElement = (
                  <Icon
                    name="trash"
                    onPress={removeAddressItemPress}
                    color="red"
                  />
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
