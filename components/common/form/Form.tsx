// React-related
import React, { useState } from 'react';

// RN-related
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

// Third-party
import tw from 'twrnc';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

// Custom Components
import Title from '../title/Title';
import FormLabel from './formLabel/FormLabel';
import FormInput from './formInput/FormInput';
import FormButton from './formButton/FormButton';
import { LoginFunction, RegisterFunction } from '@/utils/auth';

type FormInputGroupProps = {
  children: React.ReactNode;
};

type FormProps = {
  isSignup: boolean; // Determines whether it's for login or registration
};

function FormInputGroup({ children }: FormInputGroupProps) {
  return <View style={tw`my-3`}>{children}</View>;
}

export default function Form({ isSignup }: FormProps) {
  // Define state for login fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Register fields
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Define login fields
  const loginFields = [
    {
      label: 'Email',
      value: email,
      onChangeText: (text: string) => setEmail(text),
      secureTextEntry: false,
      multiline: false,
    },
    {
      label: 'Senha',
      value: password,
      onChangeText: (text: string) => setPassword(text),
      secureTextEntry: true,
      multiline: false,
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
    },
    ...loginFields,
    {
      label: 'Confirmar Senha',
      value: confirmPassword,
      onChangeText: (text: string) => setConfirmPassword(text),
      secureTextEntry: true,
      multiline: false,
    },
  ];

  const fieldsToRender = [...(isSignup ? registerFields : loginFields)];

  return (
    <Animatable.View animation="fadeIn" duration={600}>
      <Title text={isSignup ? 'Criar Conta' : 'Entrar'} />

      {fieldsToRender.map((field, index) => (
        <FormInputGroup key={index}>
          <FormLabel text={field.label} />
          <FormInput
            secureTextEntry={field.secureTextEntry || false}
            onChangeText={field.onChangeText}
            value={field.value}
            multiline={field.multiline || false}
          />
        </FormInputGroup>
      ))}
      <FormButton
        isSignup={isSignup}
        disabled={name === '' || password === '' || confirmPassword === ''}
        onPress={() => {}}
      />
    </Animatable.View>
  );
}
