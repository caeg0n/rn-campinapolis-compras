import { Modal, View } from 'react-native';
import { myConnPost } from '@src/utils';
import { DEV_API_BASE, PROD_API_BASE } from '@env';
import { ActivityIndicator } from 'react-native';
import MaskInput, { Masks } from 'react-native-mask-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';

export const ModalOrganization = ({
  isLoading,
  modalVisible,
  setModalVisible,
  modalType,
  lottieSource,
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
        <Text style={styles.input}>Envie seu contato e logo retornaremos</Text>
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
