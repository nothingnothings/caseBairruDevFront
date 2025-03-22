// React-related
import React, { useState } from 'react';

// RN-related
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

// Custom Components and styles
import Title from '../common/title/Title';
import FormLabel from './formLabel/FormLabel';
import FormInput from './formInput/FormInput';
import FormButton from './formButton/FormButton';
import { SIZES } from '@/constants';

// Context
import { useSession } from '@/context/ctx';

type FormInputGroupProps = {
  children: React.ReactNode;
};

type FormProps = {
  isSignup: boolean; // Determines whether it's for login or registration
};

function FormInputGroup({ children }: FormInputGroupProps) {
  return <View style={{ marginVertical: SIZES.xxSmall }}>{children}</View>;
}

export default function Form({ isSignup }: FormProps) {
  const { signIn, signUp, isLoading } = useSession();

  // Define state for login fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Register fields
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Validation State
  const [emailError, setEmailError] = useState(''); // email error state
  const [passwordError, setPasswordError] = useState(''); // password error state
  const [confirmPasswordError, setConfirmPasswordError] = useState(''); // confirm password error state

  // Validation Helpers
  const validateEmail = (email: string) => {
    // check if the email is valid:
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const isValid = emailRegex.test(email);

    if (isValid) {
      setEmailError('');
    } else {
      setEmailError('Favor inserir um email válido.');
    }
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10,}$/;

    const isValid = passwordRegex.test(password);

    if (isValid) {
      setPasswordError('');
    } else {
      setPasswordError(
        `A senha deve ter: 
    - No mínimo 10 caracteres
    - Uma letra maiúscula
    - Um número
    - Um símbolo.`
      );
    }
  };

  const validateConfirmPassword = (confirmPasswordInput: string) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10,}$/;

    const isValid =
      passwordRegex.test(password) && password === confirmPasswordInput;

    if (isValid) {
      setConfirmPasswordError('');
    } else {
      setConfirmPasswordError('As senhas não coincidem.');
    }
  };

  // Define login fields
  const loginFields = [
    {
      label: 'Email',
      value: email,
      onChangeText: (text: string) => {
        validateEmail(text);
        setEmail(text);
      },
      secureTextEntry: false,
      multiline: false,
      error: emailError,
    },
    {
      label: 'Senha',
      value: password,
      onChangeText: (text: string) => {
        validatePassword(text);
        setPassword(text);
      },
      secureTextEntry: true,
      multiline: false,
      error: passwordError,
    },
  ];

  // Define register fields
  const registerFields = [
    {
      label: 'Nome',
      value: name,
      onChangeText: (text: string) => setName(text),
      secureTextEntry: false,
      multiline: false,
      error: null,
    },
    ...loginFields,
    {
      label: 'Confirmar Senha',
      value: confirmPassword,
      onChangeText: (text: string) => {
        validateConfirmPassword(text);
        setConfirmPassword(text);
      },
      secureTextEntry: true,
      multiline: false,
      error: confirmPasswordError,
    },
  ];

  const fieldsToRender = [...(isSignup ? registerFields : loginFields)];

  const isDisabledRegisterButton =
    name === '' ||
    password === '' ||
    confirmPassword === '' ||
    emailError !== '' ||
    passwordError !== '' ||
    confirmPasswordError !== '';

  const isDisabledLoginButton =
    email === '' ||
    password === '' ||
    emailError !== '' ||
    passwordError !== '';

  return (
    <Animatable.View animation="fadeIn" duration={600}>
      <Title text={isSignup ? 'Criar Conta' : 'Log In'} />
      {fieldsToRender.map((field, index) => (
        <FormInputGroup key={index}>
          <FormLabel text={field.label} />
          <FormInput
            secureTextEntry={field.secureTextEntry || false}
            onChangeText={field.onChangeText}
            value={field.value}
            multiline={field.multiline || false}
          />
          <View>
            {field.error ? (
              <Text style={styles.errorText}>{field.error}</Text>
            ) : null}
          </View>
        </FormInputGroup>
      ))}
      <FormButton
        isSignup={isSignup}
        disabled={isSignup ? isDisabledRegisterButton : isDisabledLoginButton}
        onPress={() => {
          if (isSignup) {
            signUp({
              name,
              email: email,
              password: password,
              confirmPassword: confirmPassword,
            });
          } else {
            signIn({
              email: email,
              password: password,
            });
          }
        }}
      />
      {/* Link to Register/Login Page */}
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: SIZES.xxxSmall,
    flexWrap: 'wrap',
    width: '75%',
  },
});
