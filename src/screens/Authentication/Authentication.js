import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box, Button, Text } from '@src/components';
import React, { useState } from 'react';
import { AuthContext } from '@src/auth';
import { Image } from '@src/components';
import ModalDelivery from './Modal/ModalDelivery';
import ModalOrganization from './Modal/ModalOrganization';

export const Authentication = () => {
  const insets = useSafeAreaInsets();
  const [modalDeliverVisible, setModalDeliverVisible] = useState(false);
  const [modalSellerVisible, setModalSellerVisible] = useState(false);
  const { signIn } = React.useContext(AuthContext);
  
  const onBuyPress = () => {
    signIn();
  };

  const onDeliverPress = () => {
    setModalDeliverVisible(true);
  };

  const onSellerPress = () => {
    setModalSellerVisible(true);
  };

  return (
    <>
      <Box flex={1} backgroundColor="primary">
        <Box flex={1} alignItems="center" justifyContent="center">
          <Image
            source={require('@src/assets/app/app_icon.png')}
            width="55%"
            height="55%"
          />
        </Box>
        <Box
          flex={1}
          padding="l"
          borderTopLeftRadius="xxl"
          borderTopRightRadius="xxl"
          backgroundColor="card"
          justifyContent="space-between"
          style={{ paddingBottom: insets.bottom ? insets.bottom : 20 }}>
          <Text textAlign={'center'} fontWeight="bold" variant="header">
            COMPRE TUDO QUE VOCÊ PRECISA.
          </Text>
          <Text marginTop="xs" variant="secondary">
            Compre todos os produtos disponíveis na cidade de Campinápolis no
            conforto da sua casa.
          </Text>
          <Box marginTop="l">
            <Button label="COMPRAR" isFullWidth onPress={onBuyPress} />
            <Button
              label="QUERO VENDER"
              isFullWidth
              variant="facebook"
              marginTop="s"
              backgroundColor="facebook"
              onPress={onDeliverPress}
            />
            <Button
              label="QUERO SER UM ENTREGADOR"
              variant="google"
              marginTop="s"
              backgroundColor="google"
              isFullWidth
              onPress={onSellerPress}
            />
          </Box>
        </Box>
      </Box>
      {modalSellerVisible && (
        <ModalDelivery
          modalBackgroundColor="#C9FAD3"
          //imageSource={require('@src/../assets/seller.gif')}  
        />
      )}
      {modalDeliverVisible && (
        <ModalDelivery
          modalBackgroundColor="#4e8dcc"
          modalDeliverVisible = {modalDeliverVisible} 
          setModalDeliverVisible = {setModalDeliverVisible}
        />
      )}
    </>
  );
};

