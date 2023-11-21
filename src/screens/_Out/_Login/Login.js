import React from 'react';
import { Alert } from 'react-native';
import { AuthContext } from '@src/auth';
import { AuthenticationLayout, Button, TextField } from '@src/components';

export const Login = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  const [password, setPassword] = React.useState('');

  const onPasswordFieldChange = (value) => {
    setPassword(value);
  };

  const onSignIn = () => {
    if (!password) {
      Alert.alert('Error', 'Please enter your password!');
      return;
    }
    signIn();
  };

  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <AuthenticationLayout
      title="Welcome! User"
      subtitle="Please enter your password to use our services"
      footer={
        <>
          <Button label="Signin" isFullWidth onPress={onSignIn} />
          <Button
            label="Forgot Password"
            isFullWidth
            variant="transparent"
            onPress={onForgotPassword}
          />
        </>
      }>
      <TextField
        inputProps={{
          autoFocus: true,
          value: password,
          onChangeText: onPasswordFieldChange,
          placeholder: 'Enter your password',
          secureTextEntry: true,
        }}
      />
    </AuthenticationLayout>
  );
};
