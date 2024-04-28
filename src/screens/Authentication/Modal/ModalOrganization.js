import React, { useState } from 'react';
import {
  Modal,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { myConnPost } from '@src/utils';
import { DEV_API_BASE, PROD_API_BASE } from '@env';
import MaskInput, { Masks } from 'react-native-mask-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Controller } from 'react-hook-form';
import { Button, Text } from '@src/components';
import { useForm } from 'react-hook-form';
import LottieView from 'lottie-react-native';

const API_BASE_URL = __DEV__ ? DEV_API_BASE : PROD_API_BASE;
const SET_CONTACT_URL = API_BASE_URL + '/contacts';

const backgroundColor = '#C9FAD3';
const textColor = 'black';

export default ModalOrganization = ({
  modalOrganizationVisible,
  setModalOrganizationVisible,
}) => {
  const { control, reset } = useForm();
  const phone = React.useRef(null);
  const [loading, setLoading] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [buttonLabel, setButtonLabel] = useState('ENVIAR CONTATO');
  const [lottieSource, setLottieSource] = useState(
    require('@src/assets/animations/organization-mobile-9.json'),
  );
  const [displayText, setDisplayText] = useState(
    'Envie seu contato e logo retornaremos',
  );

  const apical = async () => {
    const body = {
      contact: {
        phone_number: phone.current,
        is_deliveryman: false,
        is_organization: true,
      },
    };
    const transaction = await myConnPost(SET_CONTACT_URL, body);
    if (transaction.state === true) {
      const resp = transaction.json;
      const message = resp.message;
      if (message === 'ok') {
        setLottieSource(
          require('@src/assets/animations/organization-mobile-11.json'),
        );
        setDisplayText('Contato enviado com sucesso!');
        setShowInput(false);
        reset();
        setButtonLabel('SAIR');
      }
    } else {
      setLottieSource(
        require('@src/assets/animations/organization-mobile-10.json'),
      );
      setDisplayText('Falha ao enviar contato!');
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
      setModalOrganizationVisible(false);
    } else {
      apical();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalOrganizationVisible}
      onRequestClose={() => setModalOrganizationVisible(false)}>
      <View style={[styles.fullScreenView, { backgroundColor }]}>
        <View style={styles.imageModal}>
          <LottieView source={lottieSource} loop={false} autoPlay={true} />
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
            variant="google"
            backgroundColor="google"
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
    color: textColor,
    width: '90%',
    flexWrap: 'wrap',
    alignSelf: 'center',
    padding: 10,
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
