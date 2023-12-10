import React from 'react';
import { Link, Stack } from 'expo-router';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MarkdownDisplay from '@/components/MarkdownDisplay';

const description = `
# Animated splash screen
`;

const DayDetailsScreen = () => {
    return (
        <SafeAreaView
            edges={['bottom']}
            style={{
                flex: 1,
                alignItems: "center",
                marginBottom: 40,
            }}
        >
            <Stack.Screen
                options={{
                    title: 'Dia 4 - Splash Screen',
                }}
            />
            <Text
                style={{
                    fontSize: 70,
                    textAlign: 'center',
                    fontFamily: 'AmaticBold',
                }}
            >
                Tela de Splash Screen
            </Text>

            <MarkdownDisplay>{description}</MarkdownDisplay>

            <Link
                href="/day4/splash"
                asChild
                style={{
                    marginTop: 10,
                    marginBottom: 30,
                }}
            >
                <Button
                    title={"Tela Splash Screen"}
                />
            </Link>
        </SafeAreaView>
    )
}

export default DayDetailsScreen
