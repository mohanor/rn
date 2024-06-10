import React from 'react'
import { Animated, Dimensions, StyleSheet } from 'react-native';
import { View } from 'react-native'

type PaginationProps = {
    total: number;
    scrollX: Animated.Value;
    // current: number;
    // onChange: (page: number) => void;
}

const { width } = Dimensions.get('window');

export default function Pagination({ total, scrollX }: PaginationProps) {
    return (
        <View className='flex-row justify-center gap-1 mt-2'>
            {
                [...new Array(total).keys()].map((_, idx) => {

                    const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [12, 30, 12],
                        extrapolate: 'clamp',
                    });

                    const backgroundColor = scrollX.interpolate({
                        inputRange,
                        outputRange: ['#ccc', '#42307D', '#ccc'],
                        extrapolate: 'clamp',
                    });


                    return (
                        <Animated.View
                            key={idx}
                            style={[
                                styles.dot,
                                { width: dotWidth, backgroundColor }
                            ]}
                        />
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    dot: {
        width: 12,
        height: 12,
        borderRadius: 1000,
        marginHorizontal: 8,
    }
})
