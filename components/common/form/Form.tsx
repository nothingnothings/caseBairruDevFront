// React-related
import React, { useState } from 'react';

// RN-related
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';

// Zustand-related
import useStore from '@/store/store';

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
  signup: boolean; // Determines whether it's for login or registration
  multiPage?: boolean; // Determines whether to split fields into two pages
  onSubmit: RegisterFunction | LoginFunction;
  deviceName: string | null; // Device name for the user
  userType: 'none' | 'tabibito' | 'company'; // User type for conditional fields
};

function FormInputGroup({ children }: FormInputGroupProps) {
  return <View style={tw`my-3`}>{children}</View>;
}

export default function Form({
  signup,
  multiPage,
  onSubmit,
  userType,
  deviceName,
}: FormProps) {
  const router = useRouter();

  // Zustand store
  const setAuthPage = useStore((state) => state.setAuthPage);
  const setSelectedAccountType = useStore(
    (state) => state.setSelectedAccountType
  );
  const setMessage = useStore((state) => state.setMessage);
  const setError = useStore((state) => state.setError);
  const setUser = useStore((state) => state.setUser);
  const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);

  const screen = !signup ? 'register' : 'login';

  // Define state for login fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Register fields
  const [confirmPassword, setConfirmPassword] = useState('');

  // Tabibito-Specific
  const [tabibitoName, setTabibitoName] = useState('');

  // Company-Specific
  const [companyName, setCompanyName] = useState('');
  const [companyIndustry, setCompanyIndustry] = useState('');

  // Locale-Specific fields (to be expanded as needed)
  const [localeName, setLocaleName] = useState('');
  const [localeType, setLocaleType] = useState('');
  const [localeAddress, setLocaleAddress] = useState('');
  const [localeZipcode, setLocaleZipcode] = useState('');
  const [localeCountry, setLocaleCountry] = useState('');
  const [localeState, setLocaleState] = useState('');
  const [localeCity, setLocaleCity] = useState('');
  const [localePhone, setLocalePhone] = useState('');
  const [localeImageUrl1, setLocaleImageUrl1] = useState('');
  const [localeImageUrl2, setLocaleImageUrl2] = useState('');
  const [localeWebsiteUrl, setLocaleWebsiteUrl] = useState('');
  const [localeDescription, setLocaleDescription] = useState('');

  // Page state (page 1 or page 2)
  const [currentPage, setCurrentPage] = useState(1);

  const arrowContainer = {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: currentPage === 6 ? 20 : 0,
    width: '100%',
    gap: 48,
  };

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
      label: 'Password',
      value: password,
      onChangeText: (text: string) => setPassword(text),
      secureTextEntry: true,
      multiline: false,
    },
  ];

  // Define register fields
  const registerFields = [
    ...loginFields,
    {
      label: 'Confirm Password',
      value: confirmPassword,
      onChangeText: (text: string) => setConfirmPassword(text),
      secureTextEntry: true,
      multiline: false,
    },
  ];

  // Tabibito-specific fields
  const tabibitoFields = [
    {
      label: 'Name',
      value: tabibitoName,
      onChangeText: (text: string) => setTabibitoName(text),
      secureTextEntry: false,
      multiline: false,
    },
  ];

  // Company-specific fields
  const companyFields = [
    {
      label: 'Company Name',
      value: companyName,
      onChangeText: (text: string) => setCompanyName(text),
      secureTextEntry: false,
      multiline: false,
    },
    {
      label: 'Company Industry',
      value: companyIndustry,
      onChangeText: (text: string) => setCompanyIndustry(text),
      secureTextEntry: false,
      multiline: false,
    },
  ];

  // Locale-specific fields (extend this with all necessary fields)
  const localeFields = [
    {
      label: 'Company Phone',
      value: localePhone,
      onChangeText: (text: string) => setLocalePhone(text),
      secureTextEntry: false,
      multiline: false,
    },
    {
      label: 'Locale Name',
      value: localeName,
      onChangeText: (text: string) => setLocaleName(text),
      secureTextEntry: false,
      multiline: false,
    },
    {
      label: 'Locale Type',
      value: localeType,
      onChangeText: (text: string) => setLocaleType(text),
      secureTextEntry: false,
      multiline: false,
    },
    {
      label: 'Locale Zipcode',
      value: localeZipcode,
      onChangeText: (text: string) => setLocaleZipcode(text),
      secureTextEntry: false,
      multiline: false,
    },
    {
      label: 'Locale Country',
      value: localeCountry,
      onChangeText: (text: string) => setLocaleCountry(text),
      secureTextEntry: false,
      multiline: false,
    },
    {
      label: 'Locale State',
      value: localeState,
      onChangeText: (text: string) => setLocaleState(text),
      secureTextEntry: false,
      multiline: false,
    },
    {
      label: 'Locale City',
      value: localeCity,
      onChangeText: (text: string) => setLocaleCity(text),
      secureTextEntry: false,
      multiline: false,
    },
    {
      label: 'Locale Address',
      value: localeAddress,
      onChangeText: (text: string) => setLocaleAddress(text),
      secureTextEntry: false,
      multiline: false,
    },
    {
      label: 'Locale Image 1',
      value: localeImageUrl1,
      onChangeText: (text: string) => setLocaleImageUrl1(text),
      secureTextEntry: false,
      multiline: false,
    },
    {
      label: 'Locale Image 2',
      value: localeImageUrl2,
      onChangeText: (text: string) => setLocaleImageUrl2(text),
      secureTextEntry: false,
      multiline: false,
    },
    {
      label: 'Locale Website',
      value: localeWebsiteUrl,
      onChangeText: (text: string) => setLocaleWebsiteUrl(text),
      secureTextEntry: false,
      multiline: false,
    },
    {
      label: 'Locale Description',
      value: localeDescription,
      onChangeText: (text: string) => setLocaleDescription(text),
      secureTextEntry: false,
      multiline: true,
    },
  ];

  // Combine all fields based on conditions
  const fieldsToRender = [
    ...(signup ? registerFields : loginFields),
    ...(userType === 'tabibito' ? tabibitoFields : []),
    ...(userType === 'company' ? [...companyFields, ...localeFields] : []),
  ];

  let formInputGroups;

  if (multiPage && userType === 'company') {
    // Pagination logic: split fields into three pages:
    const pages = [
      fieldsToRender.slice(0, 3),
      fieldsToRender.slice(3, 6),
      fieldsToRender.slice(6, 9),
      fieldsToRender.slice(9, 12),
      fieldsToRender.slice(12, 15),
      fieldsToRender.slice(15, 18),
    ];

    const fieldsToDisplay =
      pages[currentPage - 1] || pages[0] || fieldsToRender;

    formInputGroups = fieldsToDisplay.map((field, index) => (
      <Animatable.View
        key={`${currentPage}-${index}`} // Key ensures re-render when the page changes
        animation={'fadeIn'}
        duration={600}
      >
        <FormInputGroup key={index}>
          <FormLabel text={field.label} />
          <FormInput
            secureTextEntry={field.secureTextEntry || false}
            onChangeText={field.onChangeText}
            value={field.value}
            multiline={field.multiline || false}
          />
        </FormInputGroup>
      </Animatable.View>
    ));
  } else {
    formInputGroups = fieldsToRender.map((field, index) => (
      <FormInputGroup key={index}>
        <FormLabel text={field.label} />
        <FormInput
          secureTextEntry={field.secureTextEntry || false}
          onChangeText={field.onChangeText}
          value={field.value}
          multiline={field.multiline || false}
        />
      </FormInputGroup>
    ));
  }

  let paginationControls;

  if (multiPage) {
    paginationControls = (
      <View style={arrowContainer as any}>
        {currentPage > 1 && (
          <FormButton
            isSignup={signup}
            isArrow={true}
            style={
              currentPage === 6
                ? null
                : {
                    flex: 1,
                    justifyContent: 'end',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }
            }
            primary={false}
            icon={faChevronLeft}
            isVisible={true}
            onPress={() => setCurrentPage(currentPage - 1)}
          />
        )}
        {currentPage < 6 && (
          <FormButton
            isSignup={signup}
            isArrow={true}
            style={
              currentPage === 1
                ? null
                : {
                    flex: 1,
                    justifyContent: 'start',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }
            }
            primary={true}
            icon={faChevronRight}
            isVisible={true}
            onPress={() => setCurrentPage(currentPage + 1)}
          />
        )}
      </View>
    );
  } else {
    paginationControls = null;
  }

  return (
    <Animatable.View animation="fadeIn" duration={600}>
      <Title text={signup ? 'Register' : 'Log In'} />

      {/* Display fields for the current page */}
      {formInputGroups}

      {/* Pagination controls */}
      {paginationControls}

      <FormButton
        isSignup={signup}
        isArrow={false}
        icon={null}
        primary={true}
        text={signup ? 'Register' : 'Log In'}
        isVisible={
          currentPage === 6 || userType === 'tabibito' || userType === 'none'
        }
        onPress={() =>
          onSubmit(
            {
              email,
              password,
              confirmPassword,
              deviceName,
              tabibitoName,
              companyName,
              companyIndustry,
              localeName,
              localeType,
              localeAddress,
              localeZipcode,
              localeCountry,
              localeState,
              localeCity,
              localePhone,
              localeImageUrl1,
              localeImageUrl2,
              localeWebsiteUrl,
              localeDescription,
            },
            setMessage,
            setError,
            setUser,
            setIsLoggedIn
          )
        }
        userType={userType}
      />

      <FormButton
        isSignup={signup}
        isArrow={false}
        icon={null}
        isVisible={currentPage === 1}
        primary={false}
        text={!signup ? 'Register' : 'Log In'}
        onPress={() => {
          setAuthPage(screen as any);
          setSelectedAccountType(null);
          router.push(screen as any);
        }}
      />
    </Animatable.View>
  );
}
