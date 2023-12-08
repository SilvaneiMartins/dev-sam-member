import React from 'react';
import { Link, Stack } from 'expo-router';
import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MarkdownDisplay from '@/components/MarkdownDisplay';

const description = `
# Markdown

Integre conteúdo Markdown em **React Native**

📚 Agenda de hoje:
- Introdução ao Markdown
- Visão geral da sintaxe de Markdown
- Configurando React Native para Markdown
- Implementando renderização Markdown
- Estilização do conteúdo Markdown
- Usando Markdown em componentes React Native
- Sessão de recapitulação e perguntas e respostas
`;

const DayDetailsScreen = () => {
    return (
        <SafeAreaView
            edges={['bottom']}
            style={{
                flex: 1,
                alignItems: "center"
            }}
        >
            <Stack.Screen
                options={{
                    title: 'Dia 3 - Markdown',
                }}
            />
            <Text
                style={{
                    fontFamily: 'AmaticBold',
                    fontSize: 70,
                }}
            >
                Criar tela de Markdown
            </Text>

            <MarkdownDisplay>{description}</MarkdownDisplay>

            <Link
                href="/day3/editor"
                asChild
                style={{
                    marginTop: 10,
                    marginBottom: 30,
                }}
            >
                <Button
                    title={"Ir Para Editor"}
                />
            </Link>
        </SafeAreaView>
    )
}

export default DayDetailsScreen
