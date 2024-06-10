import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

type ProductProps = {
    image: string;
    title: string;
}

function Product({image, title}: ProductProps) {
    return (
        <View className='flex-row h-[110px] border border-[#F1F1F1] mb-4 rounded-xl overflow-hidden'>
            <View className='h-full w-[117px] '>
                <Image
                    source={{ uri: image }}
                    className='w-full h-full object-contain rounded-l-xl rounded-bl-xl'
                />
            </View>

            <View className='p-2 flex-row'>
                <View className='text-center justify-between w-[200px]'>
                    <View className='gap-1'>
                        <Text numberOfLines={1} className='text-sm'>{title}</Text>
                        <Text
                            numberOfLines={2}
                            className='text-xs text-[#484848]'
                        >
                            safe guaranteed for protecting your valuable items inside
                        </Text>
                    </View>
                    <Text className='text-sm font-semibold'>$100</Text>
                </View>
                <TouchableHighlight className='border items-center justify-center border-[#F1F1F1] rounded-lg w-[24px] h-[24px] '>
                    <AntDesign name="hearto" size={12} color="#F1F1F1" />
                </TouchableHighlight>
            </View>
        </View>
    )

}

export default function Popular({product}: {product: any[]}) {
    return (
        <View className='mx-[16px]'>

            <Text className='text-xl mb-4 mt-8'>
                Popular
            </Text>

            <View>
                {
                    product.map((item, index) => {
                        return (
                            <Product key={index} image={item.image} title={item.title} />
                        )
                    })
                }
            </View>

        </View>
    )
}
