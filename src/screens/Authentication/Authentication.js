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
  const [modalVisible, setModalVisible] = useState(false);
  const [modalBackgroundColor, setModalBackgroundColor] = useState('white');
  const { control, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const apiCall = async (data) => {
    try {
      // await someApiCall(data);
    } catch (error) {
      console.error(error);
    } finally {
      // setIsLoading(false);
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
    setModalBackgroundColor('facebook');
    setModalVisible(true);
  };

  const onSellerPress = () => {
    setModalBackgroundColor('google');
    setModalVisible(true);
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
            Compre todos os produtos disponiveis na cidade de Campinápolis no
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

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View
          style={[
            styles.fullScreenView,
            {
              backgroundColor:
                modalBackgroundColor === 'facebook' ? '#4e8dcc' : '#db4437',
              justifyContent: 'flex-end',
            },
          ]}>
          <View style={[styles.imageModal]}>
            <Image
              source={require('@src/../assets/deliveryman.gif')}
              style={{ width: '100%', height: '100%' }}
            />
          </View>

          <Text style={styles.textStyle}>
            Envie seu contato e logo retornaremos
          </Text>
          {isLoading ? "":(
              <Icon name="whatsapp" size={50} color="#fff" style={styles.icon} />
          )}
          <View style={styles.container}>
            {isLoading ? (
              <ActivityIndicator size="large" color="#FFFFFF" />
            ) : (
              <Controller
                name="phoneNumber"
                defaultValue=""
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View style={styles.inputContainer}>
                    <MaskInput
                      placeholderTextColor="white"
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
              style={[styles.button, styles.buttonClose]}
              onPress={onSubmit}>
              <Text style={styles.textStyle}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    paddingVertical: 20,
    paddingHorizontal: 30,
    elevation: 2,
    alignSelf: 'center',
    marginBottom: 30,
    minWidth: '90%',
    minHeight: 50,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
