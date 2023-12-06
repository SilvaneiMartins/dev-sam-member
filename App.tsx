import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import DayListItem from './src/components/DayListItem';

const days = [...Array(24)].map((val, index) => index + 1);

export default function App() {
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
