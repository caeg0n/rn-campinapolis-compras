import React from 'react';
import { Box, Section, Divider, Icon, ListRowItem } from '@src/components';
import { ScrollView } from 'react-native-gesture-handler';
import { favoriteAddresses } from '@src/data/mock-address';
import { useExploreStackNavigation } from '@src/hooks';

export const SavedAddresses = () => {
  const navigation = useExploreStackNavigation();

  const addAddressItemPress = () => {
    navigation.navigate('AddAddress');
  };

  const removeAddressItemPress = () => {
    navigation.navigate('AddAddress');
  };

  return (
    <ScrollView>
      <Section title="Escolha o Endereço" hasDivider={true}>
        <Box>
          {favoriteAddresses.map((item, index) => {
            //const { id, name, description, isHome, isWork } = item;
            const { id, name, description, isHome } = item;
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
                  subTitle={description}
                  rightElement={rightElement}
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
      </Section>
    </ScrollView>
  );
};
