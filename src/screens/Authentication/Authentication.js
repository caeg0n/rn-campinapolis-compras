import React, { useState } from 'react';
import { AuthContext } from '@src/auth';
import { Box, Button, Text } from '@src/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Modal, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Image } from '@src/components';
import MaskInput, { Masks } from 'react-native-mask-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useForm, Controller } from 'react-hook-form';
import { ActivityIndicator } from 'react-native';

export const Authentication = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  const insets = useSafeAreaInsets();
  const [modalSellerVisible, setModalSellerVisible] = useState(false);
  const [modalDeliverVisible, setModalDeliverVisible] = useState(false);
  const { control, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const apiCall = async (data) => {
    try {
      // await someApiCall(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (data) => {
    setIsLoading(true);
    apiCall(data);
    reset();
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
    imageSource,
    isLoading,
    control,
    onSubmit,
  }) => {
    const backgroundColor = modalType === 'seller' ? '#C9FAD3' : '#4e8dcc';
    const textColor = modalType === 'seller' ? '#1A372F' : 'white';
    const buttonStyle =
      modalType === 'seller'
        ? styles.buttonClose.seller
        : styles.buttonClose.delivery;
    const textStyle =
      modalType === 'seller'
        ? styles.textStyle.seller
        : styles.textStyle.delivery;

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
              justifyContent: 'flex-end',
            },
          ]}>
          <View style={[styles.imageModal]}>
            <Image
              source={imageSource}
              style={{ width: '100%', height: '100%' }}
            />
          </View>
          <Text style={textStyle}>Envie seu contato e logo retornaremos</Text>
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
          <View style={styles.container}>
            {isLoading ? (
              <ActivityIndicator size="large" color={textColor} />
            ) : (
              <Controller
                name="phoneNumber"
                defaultValue=""
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View style={styles.inputContainer}>
                    <MaskInput
                      placeholderTextColor={textColor}
                      keyboardType="numeric"
                      style={styles.input}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      mask={Masks.BRL_PHONE}
                    />
                  </View>
                )}
              />
            )}
            <TouchableOpacity
              style={[styles.button, buttonStyle]}
              onPress={onSubmit}>
              <Text style={textStyle}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <>
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
          flex={1}
          padding="l"
          borderTopLeftRadius="xxl"
          borderTopRightRadius="xxl"
          backgroundColor="card"
          justifyContent="center"
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
          imageSource={require('@src/../assets/deliveryman.gif')}
          isLoading={isLoading}
          control={control}
          onSubmit={onSubmit} 
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 30,
  },
  input: {
    flexGrow: 1,
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  imageModal: {
    marginTop: -70,
    width: '100%',
    height: '50%',
  },
  fullScreenView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  button: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
    elevation: 2,
    alignSelf: 'center',
    marginBottom: 25,
    minWidth: '90%',
    minHeight: 50,
  },
  buttonClose: {
    backgroundColor: '#1A372F',
  },
  buttonCloseDelivery: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  textStyleSeller: {
    color: '#1A372F',
  },
});
