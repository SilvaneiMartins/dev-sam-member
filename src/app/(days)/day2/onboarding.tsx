import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Link, Stack, router } from 'expo-router';
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Text, View, StyleSheet, SafeAreaView, Pressable } from 'react-native';

import {
    Gesture,
    Directions,
    GestureDetector,
} from 'react-native-gesture-handler';

import Animated, {
    FadeIn,
    FadeOut,
    SlideInRight,
    SlideOutLeft,
    BounceOutLeft,
    BounceInRight,
} from 'react-native-reanimated';

const onboardingSteps = [
    {
        icon: 'snowflake',
        title: 'Welcome #DEVember',
        description: 'Tutoriais diários do React Native durante dezembro',
    },
    {
        icon: 'people-arrows',
        title: 'Aprenda e cresça juntos',
        description: 'Aprenda construindo 24 projetos com React Native e Expo',
    },
    {
        icon: 'book-reader',
        title: 'Educação para Crianças',
        description:
            'Contribua para a arrecadação de fundos "Educação para Crianças" para ajudar a Save the Children em seu esforço de fornecer educação a todas as crianças',
    },
];

const OnboardingScreen = () => {
    const [screenIndex, setScreenIndex] = useState(0);

    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length - 1;
        if (isLastScreen) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex + 1);
        }
    };

    const onBack = () => {
        const isFirstScreen = screenIndex === 0;
        if (isFirstScreen) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex - 1);
        }
    };

    const endOnboarding = () => {
        setScreenIndex(0);
        router.back();
    };

    const swipes = Gesture.Simultaneous(
        Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
        Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
    );

    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar style="light" />

            <View style={styles.stepIndicatorContainer}>
                {onboardingSteps.map((step, index) => (
                    <View
                        key={index}
                        style={[
                            styles.stepIndicator,
                            { backgroundColor: index === screenIndex ? '#CEF202' : 'grey' },
                        ]}
                    />
                ))}
            </View>

            <GestureDetector gesture={swipes}>
                <View style={styles.pageContent} key={screenIndex}>
                    <Animated.View entering={FadeIn} exiting={FadeOut}>
                        <FontAwesome5
                            size={150}
                            name={data.icon}
                            color="#CEF202"
                            style={styles.image}
                        />
                    </Animated.View>

                    <View style={styles.footer}>
                        <Animated.Text
                            style={styles.title}
                            exiting={SlideOutLeft}
                            entering={SlideInRight}
                        >
                            {data.title}
                        </Animated.Text>
                        <Animated.Text
                            exiting={SlideOutLeft}
                            style={styles.description}
                            entering={SlideInRight.delay(50)}
                        >
                            {data.description}
                        </Animated.Text>

                        <View style={styles.buttonsRow}>
                            <Text onPress={endOnboarding} style={styles.buttonText}>
                                Pular
                            </Text>

                            <Pressable onPress={onContinue} style={styles.button}>
                                <Text style={styles.buttonText}>Continuar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </GestureDetector>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#15141A',
    },
    pageContent: {
        flex: 1,
        padding: 20,
    },
    image: {
        margin: 20,
        marginTop: 70,
        alignSelf: 'center',
    },
    title: {
        fontSize: 50,
        marginVertical: 10,
        letterSpacing: 1.3,
        color: '#FDFDFD',
        fontFamily: 'InterBlack',
    },
    description: {
        fontSize: 20,
        color: 'gray',
        lineHeight: 28,
        fontFamily: 'Inter',
    },
    footer: {
        marginTop: 'auto',
    },
    buttonsRow: {
        gap: 20,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        flex: 1,
        borderRadius: 50,
        alignItems: 'center',
        backgroundColor: '#302E38',
    },
    buttonText: {
        color: '#FDFDFD',
        fontSize: 16,
        padding: 15,
        paddingHorizontal: 25,
        fontFamily: 'InterSemi',
    },

    // steps
    stepIndicatorContainer: {
        gap: 8,
        flexDirection: 'row',
        marginHorizontal: 15,
    },
    stepIndicator: {
        flex: 1,
        height: 3,
        borderRadius: 10,
        backgroundColor: 'gray',
    },
});

export default OnboardingScreen
