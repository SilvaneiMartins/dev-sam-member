import React from 'react'
import { Link, Stack } from 'expo-router'
import { View, Text, Button } from 'react-native'

const DayDetailsScreen = () => {
    return (
        <View
            style={{
                alignItems: "center"
            }}
        >
            <Stack.Screen
                options={{
                    title: 'Dia 2 - Onboarding',
                }}
            />
            <Text
                style={{
                    fontFamily: 'AmaticBold',
                    fontSize: 70,
                }}
            >
                Criar tela de onboarding
            </Text>

            <Link
                href="/day2/onboarding"
                asChild
                style={{
                    marginTop: 30,
                }}
            >
                <Button
                    title={"Ir Para Onboarding"}
                />
            </Link>
        </View>
    )
}

export default DayDetailsScreen
