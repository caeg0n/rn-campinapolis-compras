import React from 'react';
import { AuthContext } from '@src/auth';
import { Box, Button, Image, Text } from '@src/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Authentication = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  const insets = useSafeAreaInsets();

  const onBuyPress = () => {
    signIn();
  };

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
        flex={1} // Adjusted to use flex instead of fixed height
        padding="l"
        borderTopLeftRadius="xxl"
        borderTopRightRadius="xxl"
        backgroundColor="card"
        justifyContent="center" // Ensure content is centered vertically
        style={{
          paddingBottom: insets.bottom ? insets.bottom : 20, // Ensures padding at the bottom, adjusting for safe area
        }}>
        <Text textAlign={"center"} fontWeight="bold" variant="header">
          COMPRE TUDO QUE VOCÊ PRECISA.
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
