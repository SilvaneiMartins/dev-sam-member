import React from 'react'
import { Stack } from 'expo-router'
import { View, Text } from 'react-native'

const DayDetailsScreen = () => {
    return (
        <View>
            <Stack.Screen
                options={{
                    title: 'Dia 1',
                }}
            />
            <Text>Dia 2</Text>
        </View>
    )
}

export default DayDetailsScreen
