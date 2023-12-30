import React from 'react';
import { AuthContext } from '@src/auth';
import { Box, Button, Image, Text } from '@src/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
//import { StyleSheet } from 'react-native';
//import { useDispatch } from 'react-redux';
//import { useEffect } from 'react';

export const Authentication = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  const { bottom } = useSafeAreaInsets();

  const onBuyPress = () => {
    signIn();
  }
  // const onConnectWithPhoneNumberButtonPress = () => {
  //   navigation.navigate('AuthenticationWithPhone');
  // };
  // const onSocialNetworkConnectButtonPress = () => {
  //   signIn();
  // };

  return (
    <Box
      flex={1}
      flexDirection="column"
      justifyContent="space-between"
      backgroundColor="primary">
      <Box flex={1} alignItems="center" justifyContent="center">
        <Image
          source={require('@src/assets/app/app_icon.png')}
          width="55%"
          height="55%"
        />
      </Box>
      <Box
        height={'70%'}
        padding="l"
        borderTopLeftRadius="xxl"
        borderTopRightRadius="xxl"
        backgroundColor="card"
        style={{
          paddingBottom: bottom !== 0 ? bottom : undefined,
        }}>
        <Text textAlign={"center"} fontWeight="bold" variant="header">
          COMPRE TUDO QUE PRECISA.
        </Text>
        <Text marginTop="xs" variant="secondary">
          Compre todos os produtos disponiveis na cidade de Campinápolis no
          conforto da sua casa.
        </Text>
        <Box marginTop="l">
          <Button
            label="COMPRAR"
            isFullWidth
            onPress={onBuyPress}
          />
          <Button
            label="QUERO VENDER"
            isFullWidth
            variant="facebook"
            marginTop="s"
            backgroundColor="facebook"
            onPress={null}
          />
          <Button
            label="QUERO SER UM ENTREGADOR"
            variant="google"
            marginTop="s"
            backgroundColor="google"
            isFullWidth
            onPress={null}
          />
        </Box>
      </Box>
    </Box>
  );
};
