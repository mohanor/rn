
import { StyleSheet, FlatList, ScrollView, Platform, StatusBar, SafeAreaView, Animated, TextInput, View, Button, Image, Text } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

import Slide from '@/components/hero/Slide';
import Pagination from '@/components/hero/Pagination';

import Categories from '@/components/categories/Categories';
import Popular from '@/components/popular/Popular';

import { NativeStackScreenProps } from '@react-navigation/native-stack';


import { useRef, useState } from 'react';
import axios from 'axios';


const data = [
  {
    title: 'product 1',
    image: 'https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'product 2',
    image: 'https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'product 3',
    image: 'https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'product 4',
    image: 'https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  }
];

export type RootStackParamList = {
  Home: undefined;
  Details: { productId: string };
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: HomeProps) {

  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const [product, setProduct] = useState<any[]>(data);

  const api = () => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {

        setProduct(response.data);

      })
      .catch((error) => {
        console.error(error);
      });
  }


  return (
    <SafeAreaView style={[styles.container, styles.AndroidSafeArea]}>
      <ScrollView
        style={styles.stepContainer}
        showsVerticalScrollIndicator={false}
      >



        <View style={styles.nav}>
          <Feather name="menu" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Search your product"
        />

        <View>
          <FlatList
            data={[...new Array(3).keys()]}
            keyExtractor={(item) => item.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleOnScroll}
            renderItem={({ }) => (
              <Slide />
            )}
          />
          <Pagination total={3} scrollX={scrollX} />
        </View>

        <Categories />

        <Popular product={product} />

        <Button
          title="More Products"
          onPress={api}
        />

      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  stepContainer: {
    gap: 16,
  },
  nav: {
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 16,
  },
  product: {
    backgroundColor: 'red',
    width: '45%',
    height: 200,
    padding: 8,
  },
  input: {
    marginTop: 16,
    marginBottom: 16,
    padding: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    borderRadius: 12,
    height: 48,
    backgroundColor: 'white',
    color: '#ABABAB',
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    paddingBottom: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: 'cover',
  },
});
