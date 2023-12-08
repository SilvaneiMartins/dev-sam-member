import React, { PropsWithChildren } from 'react';
import Markdown from 'react-native-markdown-display';
import { StyleSheet, ScrollView } from 'react-native';

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
    return (
        <ScrollView style={styles.page} contentInsetAdjustmentBehavior="automatic">
            <Markdown style={markdownStyles}>{children}</Markdown>
        </ScrollView>
    );
};

const markdownStyles = StyleSheet.create({
    heading1: {
        marginTop: 15,
        marginBottom: 10,
        color: '#212020',
        fontFamily: 'InterBlack',

        lineHeight: 30,
    },
    heading2: {
        color: '#404040',
        fontFamily: 'InterBold',

        marginTop: 10,
        lineHeight: 30,
        marginBottom: 5,
    },
    body: {
        fontSize: 16,
        lineHeight: 24,
    },
});

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        marginBottom: 50,
        backgroundColor: 'white',
    },
});

export default MarkdownDisplay;
