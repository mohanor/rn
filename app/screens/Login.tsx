import { StyleSheet, SafeAreaView, Platform, StatusBar, TextInput } from 'react-native'
import React from 'react'
import { GluestackUIProvider, Text, Input, InputField, Button, ButtonText, Heading } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"

import { useState } from 'react'

export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (value: string) => {
        setUsername(value)
    }

    const handlePasswordChange = (value: string) => {
        setPassword(value)
    }


    return (

        <GluestackUIProvider config={config}>
            <SafeAreaView style={styles.container}>

                <Heading>Login</Heading>
                <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
                    <InputField
                        placeholder='Username'
                    />
                </Input>

                <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
                    <InputField
                        placeholder='Password'
                        type="password"
                    />
                </Input>


                <Button
                    size="md"
                    variant="solid"
                    action="primary"
                    isDisabled={false}
                    isFocusVisible={false}
                    style={styles.button}
                >
                    <ButtonText>Login</ButtonText>
                </Button>

            </SafeAreaView>
        </GluestackUIProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        gap: 16
    },
    button: {
        width: "100%",
    }
})