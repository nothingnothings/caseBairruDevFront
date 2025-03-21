// React-related
import React, { useState } from 'react';

// RN-related
import {
  View,
  Text,
  ActivityIndicator,
  FlatList, // This is new.
} from 'react-native';
import { useRouter } from 'expo-router';

// Query-related
import { useInfiniteQuery } from 'react-query';

// Custom Components and styles
import LocaleCard from '@/components/common/cards/locales/LocaleCard';
import { COLORS, SIZES } from '@/constants';
import styles from './locales.style';

const appURLEndpoint = process.env.EXPO_PUBLIC_APP_URL;

const Locales = () => {
  const router = useRouter();

  async function fetchLocales(pageParam: number) {
    const response = await fetch(`${appURLEndpoint}/locales?page=${pageParam}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return {
      data: data.data,
      nextPage: data.pagination.nextPage,
    };
  }

  const { data, isError, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryFn: ({ pageParam = 1 }) => fetchLocales(pageParam),
      getNextPageParam: (lastPage, allPages) => lastPage.nextPage,
    });

  if (isLoading)
    return <ActivityIndicator size="large" color={COLORS.primary} />;

  if (isError) return <Text>Something went wrong</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Most Stamped Near You:</Text>
      </View>

      <FlatList
        data={data?.pages.flatMap((page) => page.data)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <LocaleCard
            locale={item}
            handleNavigate={() => {
              router.push({
                pathname: '/locales/[id]',
                params: {
                  id: item.id,
                },
              });
            }}
          />
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        onEndReached={() => {
          fetchNextPage({
            cancelRefetch: true,
          });
        }}
        onEndReachedThreshold={0.1} // Trigger when 10% from the bottom
        ListFooterComponent={
          isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : null
        }
        // Allow the flatlist to take up almost the whole screen
        contentContainerStyle={{
          paddingBottom: 400,
        }}
      />
    </View>
  );
};

export default Locales;
