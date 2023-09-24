import React from 'react';
//import { Platform } from 'react-native';
import {
  Box,
  Text,
  //Button,
  Section,
  Divider,
  //DateTimePicker,
  //Image,
} from '@src/components';
import { useExploreStackNavigation } from '@src/hooks';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
//import { Icon } from '@src/components';
import { Ionicons } from '@expo/vector-icons';

export const DeliveryInformation = ({ localization, addresses }) => {
  const navigation = useExploreStackNavigation();
  //const [date, setDate] = React.useState(new Date(1598051730000));
  //const [showDateTimePicker, setShowDateTimePicker] = React.useState(false);

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

  // const rightElement = () => {
  //   return (
  //     <TouchableOpacity onPress={() => newAddress()}>
  //       <Icon name="trash" color="red" />
  //     </TouchableOpacity>
  //   );
  // };

  // const onChange = (event, selectedDate) => {
  // const currentDate = selectedDate || date;
  // setShowDateTimePicker(Platform.OS === 'ios');
  // setDate(currentDate);
  // };

  // const onChangeTimeButtonPress = () => {
  //   setShowDateTimePicker(!showDateTimePicker);
  // };

  return (
    <Section
      title="Entregar em"
      actionButtonText="Trocar endereço"
      hasDivider={false}
      onButtonActionPress={onChangeAddressButtonPress}>
      <Box backgroundColor="card">
        <Box flexDirection="row" padding="m">
          {/* <Box marginRight="m">
            <Image
              source={require('@src/assets/checkout/map.png')}
              width={80}
              height={80}
              borderRadius="m"
            />
          </Box> */}
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
          ) : addresses && addresses.length > 0 ? (
            <Box>
              <TouchableOpacity onPress={chooseAddress}>
                <View style={styles.view}>
                  <Text style={styles.text}>
                    Escolha um dos seus endereços salvos
                  </Text>
                  <Ionicons
                    name="ios-location"
                    size={24}
                    color="red"
                    style={styles.icon}
                  />
                </View>
              </TouchableOpacity>
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
        {/* <Box padding="m" flexDirection="row" justifyContent="space-between">
          <Box>
            <Text variant="secondary" marginBottom="s">
              Delivery time
            </Text>
            <Text>Deliver now (15 mins)</Text>
          </Box>
          <Box justifyContent="center">
            <Button
              variant="outline"
              buttonSize="s"
              label={showDateTimePicker ? 'Done' : 'Change time'}
              onPress={onChangeTimeButtonPress}
            />
          </Box>
        </Box> */}
      </Box>
      {/* {showDateTimePicker && (
        <DateTimePicker value={date} onChange={onChange} margin="m" />
      )} */}
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
    color: 'black',
  },
});
