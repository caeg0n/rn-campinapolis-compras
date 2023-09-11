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

export const DeliveryInformation = ({ localization }) => {
  const navigation = useExploreStackNavigation();
  console.log(localization);
  //const [date, setDate] = React.useState(new Date(1598051730000));
  //const [showDateTimePicker, setShowDateTimePicker] = React.useState(false);

  const onChangeAddressButtonPress = () => {
    navigation.navigate('SavedAddresses');
    // navigation.navigate('ChangeAddress');
  };

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
                Descrição: {localization.name}
              </Text>
              <Text
                variant="secondary"
                accessibilityRole="link"
                marginBottom="s">
                Endereço: {localization.address}
              </Text>
              <Text variant="secondary">Telefone: {localization.phone}</Text>
            </Box>
          ) : (
            <Box>
              <Text fontWeight="bold">Nenhum endereço cadastrado</Text>
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
