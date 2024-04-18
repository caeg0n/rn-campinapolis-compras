import React, { useState } from 'react';
import { AuthContext } from '@src/auth';
import { Box, Button, Text } from '@src/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Modal, StyleSheet, View } from 'react-native';
import { Image } from '@src/components';
import MaskInput, { Masks } from 'react-native-mask-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useForm, Controller } from 'react-hook-form';
import { ActivityIndicator } from 'react-native';
import LottieView from 'lottie-react-native';

export const Authentication = () => {
  const { signIn } = React.useContext(AuthContext);
  const insets = useSafeAreaInsets();
  const [modalSellerVisible, setModalSellerVisible] = useState(false);
  const [modalDeliverVisible, setModalDeliverVisible] = useState(false);
  const { control, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const phone = React.useRef(null);

  // const apiCall = async () => {
  //   try {
  //     // await someApiCall(data);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleBlur = (value, onBlur) => {
    phone.current = value;
    onBlur();
  };

  const onSubmit = () => {
    console.log(phone.current);    
  };

  const onBuyPress = () => {
    signIn();
  };

  const onDeliverPress = () => {
    setModalDeliverVisible(true);
  };

  const onSellerPress = () => {
    setModalSellerVisible(true);
  };

  const RenderModal = ({
    modalVisible,
    setModalVisible,
    modalType,
    lottieSource,
    isLoading,
    control,
    onSubmit,
  }) => {
    const backgroundColor = modalType === 'seller' ? '#C9FAD3' : '#4e8dcc';
    const textColor = modalType === 'seller' ? '#1A372F' : 'white';

  
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View
          style={[
            styles.fullScreenView,
            {
              backgroundColor,
            },
          ]}>
          <View style={[styles.imageModal]}>
            <LottieView source={lottieSource} autoPlay loop />
          </View>
          <Text style={styles.input}>
            Envie seu contato e logo retornaremos
          </Text>
          {isLoading ? (
            ''
          ) : (
            <Icon
              name="whatsapp"
              size={50}
              color={textColor}
              style={styles.icon}
            />
          )}
          {isLoading ? (
            <ActivityIndicator size="large" color={textColor} />
          ) : (
            <View style={styles.inputContainer}>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <MaskInput
                    placeholderTextColor={textColor}
                    keyboardType="numeric"
                    style={styles.input}
                    onBlur={() => handleBlur(value, onBlur)}
                    onChangeText={onChange}
                    value={value}
                    mask={Masks.BRL_PHONE}
                  />
                )}
              />
            </View>
          )}
          <View width={'80%'} marginTop={70}>
            <Button
              width={'100%'}
              label="ENVIAR CONTATO"
              variant="facebook"
              onPress={onSubmit}
            />
          </View>
        </View>
      </Modal>
    );
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
        <RenderModal
          modalVisible={modalSellerVisible}
          setModalVisible={setModalSellerVisible}
          modalType="seller"
          modalBackgroundColor="#C9FAD3"
          imageSource={require('@src/../assets/seller.gif')}
          isLoading={isLoading}
          control={control}
          onSubmit={onSubmit}
        />
      )}
      {modalDeliverVisible && (
        <RenderModal
          modalVisible={modalDeliverVisible}
          setModalVisible={setModalDeliverVisible}
          modalType="delivery"
          modalBackgroundColor="#4e8dcc"
          lottieSource={require('@src/assets/animations/deliveryman-bike.json')}
          isLoading={isLoading}
          control={control}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  imageModal: {
    width: '100%',
    height: '50%',
  },
  fullScreenView: {
    alignItems: 'center',
    height: '100%',
  },
  buttonClose: {
    backgroundColor: '#1A372F',
  },
  textStyle: {
    fontWeight: 'bold',
  },
  textStyleSeller: {
    color: '#1A372F',
  },
});
