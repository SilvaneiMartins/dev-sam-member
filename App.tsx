import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';

import DayListItem from './src/components/DayListItem';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();
const days = [...Array(24)].map((val, index) => index + 1);

export default function App() {

    const [fontsLoaded, fontError] = useFonts({
        Inter: Inter_900Black,
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) return null;

    return (
        <>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <FlatList
                    data={days}
                    numColumns={2}
                    keyExtractor={(item) => item.toString()}
                    renderItem={({ item }) => (
                        <DayListItem day={item} />
                    )}
                    columnWrapperStyle={styles.column}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.content}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        backgroundColor: '#fff',
    },
    content: {
        gap: 10,
        padding: 10,
    },
    column: {
        gap: 10,
    }
});
