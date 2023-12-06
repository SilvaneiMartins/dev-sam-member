import { Link } from "expo-router";
import { StyleSheet, Text, Pressable } from "react-native";

interface DayListItemProps {
    day: number;
};

export default function DayListItem({ day }: DayListItemProps) {
    return (
        <Link href={`/day${day}`} asChild>
            <Pressable style={styles.box}>
                <Text style={styles.text}>{day}</Text>
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
    text: {
        color: '#9B4521',
        fontSize: 70,
        fontFamily: 'AmaticBold',
    }
});
