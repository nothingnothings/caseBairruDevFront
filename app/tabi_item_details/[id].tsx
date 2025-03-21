import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { useTheme } from '@react-navigation/native';

import { Text } from 'react-native';

const TabiItemDetailsScreen = () => {
  const router = useRouter();
  //   const { id } = router.params;

  const [locale, setLocale] = useState<any>(null);

  const theme = useTheme();

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (data) {
      setLocale(data);
    }
  }, [data]);

  return (
    <>
      <Text>Tabi Item Details</Text>
    </>
  );
};

export default TabiItemDetailsScreen;
