import React from 'react'
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';


function Product() {
  return (
    <TouchableOpacity
      className='w-[136px] mx-1 h-[170px] rounded-xl overflow-hidden border border-[#F1F1F1] items-center'
      
    >

      <View className='h-[130px] w-full'>
        <Image
          source={{ uri: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT313ref_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1692938752155' }}
          className='w-full h-full object-contain flex-1'
        />
      </View>

      <View className='text-center'>
        <Text className='font-bold text-lg text-[#484848]'>Watches</Text>
      </View>
    </TouchableOpacity>
  )

}

export default function Categories() {
  return (
    <View>

      <View className='mx-[16px] flex-row items-center justify-between'>
        <Text className='text-xl'>Categories</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>

      <FlatList
        data={[...new Array(6).keys()]}
        keyExtractor={(item: any) => item.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ }) => (
          <Product />
        )}
        className='mt-4'
      />


    </View>
  )
}
