import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';

import MarkdownDisplay from '@components/MarkdownDisplay';

const template = `# 🎉 Diversão com Markdown!

## 🚀 Introdução
Bem-vindo a este guia de descontos **divertido e emocionante**! Vamos mergulhar no mundo do Markdown e descobrir como ele torna a formatação de texto fácil e interessante!

## 🎈 Noções básicas: adicione um pouco de talento

- **Ousado e bonito:** Faça seu texto se destacar! Utilize \`**\` ou \`__\`. Exemplo: **Olhe para mim!**
- *Itálico Sassy:* Adicione uma inclinação com \`*\` ou \`_\`. Exemplo: *Estou inclinado!*

### 🍔 Vamos listar algumas coisas divertidas!

1. 🌟 Observando estrelas
2. 🏖 Festas na praia
3. 🍕 Noites de pizza

- 🎮 Videogames
- 📚 Lendo um bom livro
- 🧘 Hora de ioga

## 🌈 Diversão Avançada

### 🖼 Adicionando imagens e links

Sam Develop:

![Meu Repositório](https://github.com/silvaneimartins.png)

Visite meu portfolio: [Silvanei Martins](https:silvaneimartins.com.br)

### 🎶 Festa do Bloco de Código


\`\`\`javascript
// Truque de festa JavaScript
função festaHora() {
     console.log("Vamos dançar 💃🕺!");
}
\`\`\`

## 🎤 Conclusão
Markdown não serve apenas para formatação; é para se divertir enquanto se expressa! Continue explorando e aproveite a festa de descontos! 🎊

> Divirta-se criando seus próprios documentos divertidos de desconto! 🎨🎉

`;

const EditorScreen = () => {
    const [content, setContent] = useState(template);
    const [tab, setTab] = useState('edit');

    return (
        <View style={styles.page}>
            <Stack.Screen
                options={{
                    title: 'Editor Markdown',
                }}
            />
            <View style={styles.tabsContainer}>
                <Pressable
                    onPress={() => setTab('edit')}
                    style={[
                        styles.tab,
                        { borderColor: tab === 'edit' ? 'red' : 'gray' },
                    ]}
                >
                    <Text style={styles.tabText}>Editar</Text>
                </Pressable>
                <Pressable
                    onPress={() => setTab('preview')}
                    style={[
                        styles.tab,
                        { borderColor: tab === 'preview' ? 'red' : 'gray' },
                    ]}
                >
                    <Text style={styles.tabText}>Visualização</Text>
                </Pressable>
            </View>

            {tab === 'edit' ? (
                <TextInput
                    multiline
                    value={content}
                    numberOfLines={50}
                    style={styles.input}
                    onChangeText={setContent}
                />
            ) : (
                <MarkdownDisplay>{content}</MarkdownDisplay>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 10,
        backgroundColor: 'whitesmoke',
    },
    input: {
        flex: 1,
        padding: 20,
        fontSize: 16,
        paddingTop: 20,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    tabsContainer: {
        gap: 10,
        marginVertical: 10,
        flexDirection: 'row',
    },
    tab: {
        flex: 1,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'gray',
        alignItems: 'center',
    },
    tabText: {
        fontFamily: 'InterBold',
    },
});

export default EditorScreen;
