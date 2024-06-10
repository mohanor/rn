import React from 'react'
import { StyleSheet, Dimensions, View, Text, Image } from 'react-native'

export default function Slide() {

    const width = Dimensions.get('window').width;

    return (
        <View style={styles.hero}>
            <View className='flex-row bg-[#42307D] mx-[16px] rounded-[16px] overflow-hidden'>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.h1}>Ohh, my God!</Text>
                    </View>
                    <View>
                        <Text style={styles.discount}>Discount</Text>
                        <Text style={styles.off}>Up to 50% off</Text>
                    </View>
                </View>
                <View style={styles.heroProduct}>

                    <Image
                        source={
                            {
                                uri: 'https://static.vecteezy.com/system/resources/previews/017/054/078/non_2x/headphones-design-3d-rendering-for-product-mockup-free-png.png'
                            }
                        }
                        style={{
                            width: 150,
                            height: 150,
                            objectFit: 'contain',
                        }}
                    />

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    hero: {
        position: 'relative',
        height: 176,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heroProduct: {
        width: '50%',
        height: '100%',
        backgroundColor: '#EBD9FF',
        borderTopLeftRadius: 1000,
        borderBottomLeftRadius: 1000,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        width: '50%',
        height: '100%',
        padding: 16,
        justifyContent: 'space-between',
    },
    h1: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
    },
    discount: {
        color: 'white',
        fontSize: 12,
        marginBottom: 4,
    },
    off: {
        color: 'white',
        fontSize: 18,
    },
})
