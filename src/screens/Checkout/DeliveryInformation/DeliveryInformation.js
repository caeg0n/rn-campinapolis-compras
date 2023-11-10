import React, { useState } from 'react';
import {
  Box,
  Text,
  Section,
  Divider,
  //DateTimePicker,
  //Image,
  //Button,
} from '@src/components';
import { useSelector } from 'react-redux';
import { useExploreStackNavigation } from '@src/hooks';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
//import { setAddresses } from '@src/redux/actions/session';
//import { Icon } from '@src/components';
//import { Platform } from 'react-native';

export const DeliveryInformation = ({ localization, addresses }) => {
  //const [date, setDate] = React.useState(new Date(1598051730000));
  //const [showDateTimePicker, setShowDateTimePicker] = React.useState(false);
  const navigation = useExploreStackNavigation();
  const { selected_address } = useSelector((state) => state.sessionReducer);
  const [ address, setAddress ] = useState([]);

  useEffect(() => {
    if (selected_address && Object.keys(selected_address).length > 0) {
      setAddress(selected_address);
    }
  }, []);

  const onChangeAddressButtonPress = () => {
    navigation.navigate('SavedAddresses');
    //navigation.navigate('ChangeAddress');
  };

  const newAddress = () => {
    navigation.navigate('AddAddress');
    return null;
  };

  const chooseAddress = () => {
    navigation.navigate('SavedAddresses');
    return null;
  };

  return (
    <Section
      title="Entregar em"
      actionButtonText="Trocar endereço"
      hasDivider={false}
      onButtonActionPress={onChangeAddressButtonPress}>
      <Box backgroundColor="card">
        <Box flexDirection="row" padding="m">
          {localization && Object.keys(localization).length > 0 ? (
            <Box>
              <Text fontWeight="bold" marginBottom="s">
                {localization.name}
              </Text>
              <Text
                variant="secondary"
                accessibilityRole="link"
                marginBottom="s">
                Endereço: {localization.address}
              </Text>
              <Text variant="secondary">Telefone: {localization.cel}</Text>
            </Box>
          ) : address && Object.keys(selected_address).length > 0 ? (
            <Box>
              <Text fontWeight="bold" marginBottom="s">
                {address.name}
              </Text>
              <Text
                variant="secondary"
                accessibilityRole="link"
                marginBottom="s">
                Endereço: {address.address}
              </Text>
              <Text variant="secondary">Telefone: {address.cel}</Text>
            </Box>
          ) : (
            <Box>
              <TouchableOpacity onPress={newAddress}>
                <View style={styles.view}>
                  <Text style={styles.text}>Nenhum endereço cadastrado</Text>
                  <Ionicons
                    name="ios-add-circle"
                    size={24}
                    color="red"
                    style={styles.icon}
                  />
                </View>
              </TouchableOpacity>
            </Box>
          )}
        </Box>
        <Divider />
      </Box>
    </Section>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    marginLeft: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});

{/* <Box>
  <TouchableOpacity onPress={chooseAddress}>
    <View style={styles.view}>
      <Ionicons name="ios-location" size={20} color="red" style={styles.icon} />
      <Text style={styles.text}>Escolha um dos seus endereços salvos</Text>
    </View>
  </TouchableOpacity>
</Box>; */}
