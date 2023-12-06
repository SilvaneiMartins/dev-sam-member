import { Link } from "expo-router";
import { StyleSheet, Text, Pressable } from "react-native";

interface DayListItemProps {
    day: number;
};

export default function DayListItem({ day }: DayListItemProps) {
    return (
        <Link href={`/day${day}`} asChild>
            <Pressable style={styles.box}>
                <Text style={styles.title}>Projeto</Text>
                <Text style={styles.text}>Dia {day}</Text>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 5,
        alignItems: 'center',
        borderColor: '#9B4521',
        justifyContent: 'center',
        backgroundColor: '#F9EDE3',
        borderWidth: StyleSheet.hairlineWidth,
    },
    title: {
        fontSize: 50,
        color: '#9B4521',
        fontFamily: 'AmaticBold',
    },
    text: {
        marginTop: -20,
        fontSize: 70,
        color: '#9B4521',
        fontFamily: 'AmaticBold',
    }
});
