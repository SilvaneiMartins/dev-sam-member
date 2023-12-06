import { StatusBar } from 'expo-status-bar';
import DayListItem from '@components/core/DayListItem';
import { StyleSheet, View, FlatList } from 'react-native';

const days = [...Array(24)].map((val, index) => index + 1);

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                data={days}
                numColumns={2}
                columnWrapperStyle={styles.column}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
                renderItem={({ item }) => <DayListItem day={item} />}
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        gap: 10,
        padding: 10,
    },
    column: {
        gap: 10,
    },
});
