// React-related
import React, { useEffect, useState } from 'react';

// RN-related
import { View, TouchableOpacity, Text } from 'react-native';
import { usePathname, useRouter } from 'expo-router';

// Zustand-related
import useStore from '../../../store/store'; // Import the Zustand store

// Third-party
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose other icon libraries like MaterialIcons
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon6 from 'react-native-vector-icons/MaterialIcons';

// Custom Components
import { COLORS } from '@/constants';
import styles from './BottomNavBar.style';
import TabibitoIconFont from '../icons/tabibitoIconFont/TabibitoIconFont';

type BottomNavBarProps = {
  isLoggedIn: boolean;
  isTabibito: 0 | 1 | undefined;
};

const BottomNavBar = ({ isLoggedIn, isTabibito }: BottomNavBarProps) => {
  // Zustand store
  const { activeTab, setActiveTab } = useStore();

  // Routing-related
  const router = useRouter();
  const currentPath = usePathname();

  useEffect(() => {
    switch (currentPath) {
      case '/home':
        setActiveTab('home');
        break;
      case '/stamps':
        setActiveTab('stamps');
        break;
      case '/tabibito':
        setActiveTab('tabibito');
        break;
      case '/tabistore':
        setActiveTab('tabistore');
        break;
      case '/login':
        setActiveTab('login');
        break;
      case '/register':
        setActiveTab('login');
        break;
      default:
        setActiveTab('home');
        break;
    }
  }, [currentPath]);

  const guestRoutes = [
    {
      key: 'home',
      icon: (
        <Icon
          name="map-signs"
          size={20}
          color={activeTab === 'home' ? COLORS.lightDark : 'white'}
        />
      ),
      label: 'Places',
    },
    {
      key: 'login',
      icon: (
        <Icon
          name="sign-in"
          size={20}
          color={activeTab === 'login' ? COLORS.secondary : 'white'}
        />
      ),
      label: 'Login/Register',
    },
  ];

  // Define routes for "Tabibito" and other users
  const tabibitoRoutes = [
    {
      key: 'home',
      icon: (
        <Icon
          name="map-signs"
          size={20}
          color={activeTab === 'home' ? COLORS.lightDark : 'white'}
        />
      ),
      label: 'Places',
    },
    {
      key: 'stamps',
      icon: (
        <Icon5
          name="postage-stamp"
          size={20}
          color={activeTab === 'stamps' ? COLORS.secondary : 'white'}
        />
      ),
      label: 'Stamps',
    },
    {
      key: 'tabibito',
      icon: (
        <TabibitoIconFont
          name="tabibitoicon"
          size={20}
          color={activeTab === 'tabibito' ? COLORS.secondary : 'white'}
        />
      ),
      label: 'Tabibito',
    },
    {
      key: 'tabistore',
      icon: (
        <Icon5
          name="store"
          size={20}
          color={activeTab === 'tabistore' ? COLORS.secondary : 'white'}
        />
      ),
      label: 'Tabistore',
    },
  ];

  const companyRoutes = [
    {
      key: 'my-company',
      icon: (
        <Icon
          name="building"
          size={20}
          color={activeTab === 'my-company' ? COLORS.lightDark : 'white'}
        />
      ),
      label: 'Company',
    },
    {
      key: 'my-place',
      icon: (
        <Icon6
          name="place"
          size={20}
          color={activeTab === 'my-place' ? COLORS.secondary : 'white'}
        />
      ),
      label: 'Place',
    },

    {
      key: 'my-stamp',
      icon: (
        <Icon5
          name="postage-stamp"
          size={20}
          color={activeTab === 'my-stamp' ? COLORS.secondary : 'white'}
        />
      ),
      label: 'Stamp',
    },
  ];

  // Determine which routes to use based on isLoggedIn and isTabibito
  const routes = isLoggedIn
    ? isTabibito === 1
      ? tabibitoRoutes
      : companyRoutes
    : guestRoutes;

  // General method to handle navigation
  const goTo = (tab: string) => {
    setActiveTab(tab);
    router.push(`/${tab}` as any);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        {routes.map(({ key, icon, label }) => (
          <TouchableOpacity
            key={key}
            style={[
              styles.navItem,
              {
                pointerEvents: activeTab === key ? 'none' : 'auto',
              },
            ]}
            onPress={() => goTo(key)} // Use goTo method for navigation
            // disabled={activeTab === key} // Disable the button if it's already active
          >
            {icon}
            <Text
              style={[
                styles.navText,
                activeTab === key && styles.activeNavText, // Apply active styles when the tab is active
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default BottomNavBar;
