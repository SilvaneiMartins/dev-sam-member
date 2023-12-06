import { useEffect } from 'react';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
    useFonts,
    Inter_700Bold,
    Inter_900Black,
    Inter_400Regular,
    Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import {
    AmaticSC_700Bold,
    AmaticSC_400Regular,
} from '@expo-google-fonts/amatic-sc';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded, fontError] = useFonts({
        Inter: Inter_400Regular,
        InterBold: Inter_700Bold,
        InterBlack: Inter_900Black,
        InterSemi: Inter_600SemiBold,

        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack screenOptions={{}}>
                <Stack.Screen
                    name="index"
                    options={{
                        title: 'Sam Dev',
                        headerTitleAlign: 'center'
                    }}
                />
            </Stack>
        </GestureHandlerRootView>
    );
}
