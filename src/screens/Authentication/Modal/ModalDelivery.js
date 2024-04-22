import React, { useState } from 'react';
import { Modal, View } from 'react-native';
import { myConnPost } from '@src/utils';
import { DEV_API_BASE, PROD_API_BASE } from '@env';
import { StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native';
import MaskInput, { Masks } from 'react-native-mask-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';
import { Controller } from 'react-hook-form';
import { Button, Text } from '@src/components';
import { useForm } from 'react-hook-form';

const API_BASE_URL = __DEV__ ? DEV_API_BASE : PROD_API_BASE;
const SET_CONTACT_URL = API_BASE_URL + '/contacts';

const backgroundColor = '#4e8dcc';
const textColor = 'white';

export default ModalDelivery = ({
  modalDeliverVisible,
  setModalDeliverVisible
}) => {
  const { control, reset } = useForm();
  const phone = React.useRef(null);
  const [loading, setLoading] = React.useState(false);
  const [showInput, setShowInput] = useState(true);
  const [buttonLabel, setButtonLabel] = useState('ENVIAR CONTATO');
  const [lottieSource, setLottieSource] = useState(
    require('@src/assets/animations/deliveryman-bike.json'),
  );
  const [displayText, setDisplayText] = useState(
    'Envie seu contato e logo retornaremos',
  );

  const apiCall = async () => {
    const body = {
      contact: {
        phone_number: phone.current,
        is_deliveryman: true,
        is_organization: false,
      },
    };
    const transaction = await myConnPost(SET_CONTACT_URL, body);
    if (transaction.state == true) {
      const resp = transaction.json;
      const message = resp.message;
      if (message == 'ok') {
        setLottieSource(
          require('@src/assets/animations/success-deliveryman-2.json'),
        );
        setDisplayText('Contato enviado com sucesso!');
        setShowInput(false);
        reset();
        setButtonLabel('SAIR');
      }
    } else {
      setLottieSource(
        require('@src/assets/animations/success-deliveryman-2.json'),
      );
      setDisplayText('Falha ao enviar contato. Tente novamente.');
      setShowInput(true);
    }
    setLoading(false);
  };

  const handleBlur = (value) => {
    phone.current = value;
  };

  const onSubmit = async () => {
    setLoading(true);
    if (buttonLabel === 'SAIR') {
      setModalDeliverVisible(false);
    } else {
      apiCall();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalDeliverVisible}
      onRequestClose={() => setModalDeliverVisible(false)}>
      <View style={[styles.fullScreenView, { backgroundColor }]}>
        <View style={styles.imageModal}>
          <LottieView source={lottieSource} autoPlay loop />
        </View>
        <Text style={styles.input}>{displayText}</Text>
        {loading ? (
          <ActivityIndicator size="large" color={textColor} />
        ) : (
          <Icon
            name="whatsapp"
            size={50}
            color={textColor}
            style={styles.icon}
          />
        )}
        {!loading && showInput && (
          <View style={styles.inputContainer}>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field: { onChange, value } }) => (
                <MaskInput
                  placeholderTextColor={textColor}
                  keyboardType="numeric"
                  style={styles.input}
                  onBlur={() => handleBlur(value)}
                  onChangeText={onChange}
                  value={value}
                  mask={Masks.BRL_PHONE}
                />
              )}
            />
          </View>
        )}
        <View style={{ width: '80%', marginTop: 70 }}>
          <Button
            width={'100%'}
            label={buttonLabel}
            variant="facebook"
            onPress={onSubmit}
          />
        </View>
      </View>
    </Modal>
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
