import { View, Text } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Details: { productId: string };
};

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function Details({ navigation }: DetailsProps) {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-black'>Details</Text>
    </View>
  )
}