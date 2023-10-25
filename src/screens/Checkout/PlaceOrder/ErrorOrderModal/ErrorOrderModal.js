import React from 'react';
import { Animated } from 'react-native';
import {
  Box,
  Text,
  Button,
  BottomSheetModal,
  LottieView,
} from '@src/components';
import styles from './SuccessOrderModal.style';
import { CartContext } from '@src/cart';
import { useExploreStackNavigation } from '@src/hooks';

export const OrderErrorModal = ({ isVisible, setIsVisble, modalError }) => {
  const navigation = useExploreStackNavigation();
  const fadeIn = React.useRef(new Animated.Value(0)).current;
  const fadeOut = React.useRef(new Animated.Value(1)).current;
  const [isAnimationFinished, setIsAnimationFinished] = React.useState(false);
  const { clearCart } = React.useContext(CartContext);
  
  React.useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: isAnimationFinished ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeOut, {
      toValue: isAnimationFinished ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isAnimationFinished, fadeIn, fadeOut]);
  

  const onAnimationFinish = () => {
    setIsAnimationFinished(true);
  };

  const onBackdropPress = () => {
    setIsVisble(false);
    setIsAnimationFinished(false);
  };

  // const onOrderSomethingElseButtonPress = () => {
  //   clearCart();
  //   setIsVisble(false);
  //   navigation.navigate('Explore');
  // };

  const onTrackOrderButtonPress = () => {
    clearCart();
    setIsVisble(false);
    navigation.replace('TrackOrder');
  };

  const renderAnimatedView1 = () => {
    //const txtSuccess = 'Obrigado por comprar com a gente.';
    //const txtTrack = 'Você pode rastrear sua entrega na seção "Pedidos".';
    const txtOrganizationClosedHeader = 'Tivemos Um Problema!';
    const txtMissingAddressHeader = 'Escolha um Endereço';
    const txtMissingAddress = 'É necessario cadastrar e escolher um endereço para a entrega.';
    const txtOrganizationClosed =
      'Infelizmente o estabelecimento fechou enquanto você fazia sua compra.';
    const txtHeader = (
      <Text variant="header" fontWeight="bold" color="primary">
        {'closedOrganizations' in modalError ? txtOrganizationClosedHeader : null}
        {'selected_address' in modalError ? txtMissingAddressHeader : null}
      </Text>
    );
    const txt = (
      <Text textAlign="center" marginTop="s">
        {'closedOrganizations' in modalError ? txtOrganizationClosed : null}
        {'selected_address' in modalError ? txtMissingAddress : null}
      </Text>
    );
    return (
      <Animated.View
        style={[styles.successMessageContainer, { opacity: fadeIn }]}>
        {txtHeader}
        {txt}
      </Animated.View>
    );
  };

  const renderAnimatedView2 = () => {
    let label = '';
    //const labelSuccess = 'Rastrear minha Entrega';
    const labelOrganizationClosed = 'Esvaziar carrinho desse estabelecimento';
    const labelMissingAddress = 'Escolher um Endereço';
    if ('closedOrganizations' in modalError) label = labelOrganizationClosed;
    if ('selected_address' in modalError) label = labelMissingAddress;
    return (
      <Animated.View
        style={[styles.footerButtonContainer, { opacity: fadeIn }]}>
        <Button
          label={label}
          isFullWidth
          onPress={onTrackOrderButtonPress}
        />
        {/* <Button
          label="Continuar Comprando"
          isFullWidth
          variant="transparent"
          marginTop="s"
          onPress={onOrderSomethingElseButtonPress}
        /> */}
      </Animated.View>
    );
  };

  return (
    <BottomSheetModal
      isOpened={isVisible}
      snapPoints={['95%']}
      onClose={onBackdropPress}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Box width="100%" alignItems="center">
          <LottieView
            source={require('@src/assets/animations/order-error5.json')}
            autoPlay
            loop={false}
            onAnimationFinish={onAnimationFinish}
            height={120}
          />
          {!isAnimationFinished && (
            <Animated.View
              style={[styles.processingOrderContainer, { opacity: fadeOut }]}>
              <Text fontWeight="bold">Processando Seu Pedido...</Text>
            </Animated.View>
          )}
          {renderAnimatedView1()}
        </Box>
        {renderAnimatedView2()}
      </Box>
    </BottomSheetModal>
  );
};
