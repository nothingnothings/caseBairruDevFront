// React-related
import React, { useEffect, useState } from 'react';

// RN-related
import { Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

// Custom Components and styles
import Layout from '@/components/common/wrappers/layout/Layout';
import { COLORS, SIZES } from '@/constants';

// Context
import { useSession } from '@/context/ctx';
import { fetchUserName } from '@/utils/auth';

const HomeScreen = () => {
  const [newName, setNewName] = useState('');
  const [currentName, setCurrentName] = useState('');

  const { userName, session, userId, signOut, changeName, setError } =
    useSession();

  useEffect(() => {
    if (session) {
      fetchUserName(session, userId, setError).then((name) => {
        if (name) {
          setCurrentName(name);
        } else {
          if (userName) {
            setCurrentName(userName);
          }
        }
      });
    }
  }, []);

  return (
    <Layout>
      <Text style={styles.welcomeText}>Bem-vindo, {currentName}!</Text>

      {/* Field to change user's name */}
      <TextInput
        style={styles.input}
        value={newName || ''}
        onChangeText={setNewName}
        placeholder="Escreva seu novo nome"
      />

      {/* Button to update user's name */}
      <TouchableOpacity
        style={[
          styles.button,
          newName === '' ? styles.buttonDisabled : styles.buttonEnabled,
        ]}
        disabled={newName === ''}
        onPress={() => changeName({ newName, userId: userId || '' })}
      >
        <Text
          style={newName === '' ? styles.buttonDisabledText : styles.buttonText}
        >
          Salvar Alteração
        </Text>
      </TouchableOpacity>

      {/* Leave Button (logs out) */}
      <TouchableOpacity style={styles.leaveButton} onPress={signOut}>
        <Text style={styles.leaveButtonText}>Sair</Text>
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f7f3f9',
    borderWidth: 2,
    borderRadius: SIZES.small,
    borderColor: COLORS.lightDark,
    paddingHorizontal: SIZES.xxLarge,
    paddingVertical: SIZES.small,
    marginTop: SIZES.medium,
    fontSize: SIZES.medium,
  },
  button: {
    marginTop: SIZES.xxLarge,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    letterSpacing: 0.5,
  },
  buttonDisabled: {
    backgroundColor: COLORS.lightGray,
  },
  buttonDisabledText: {
    color: COLORS.darkGray,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonEnabled: {
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  leaveButton: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    paddingVertical: 12,
    position: 'absolute',
    right: 25,
    top: 25,
  },
  leaveButtonText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
