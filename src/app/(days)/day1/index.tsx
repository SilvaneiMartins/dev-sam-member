
import React from 'react'
import { Stack } from 'expo-router'
import { View, Text } from 'react-native'

const DayDetailsScreen = () => {
    return (
        <View
            style={{
                alignItems: "center"
            }}
        >
            <Stack.Screen
                options={{
                    title: 'Dia 1 - Calendário',
                }}
            />
            <Text
                style={{
                    fontFamily: 'AmaticBold',
                    fontSize: 70,
                }}
            >
                Foi criado setup da Estrutura
            </Text>
        </View>
    )
}

export default DayDetailsScreen
