import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    const [ password, setPassword ] = useState('')

    return <View>
        <Text>Enter Password: </Text>
        <TextInput 
            style={styles.input} 
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(newValue) => setPassword(newValue)}
        />
        { password.length > 0 && password.length <= 5 
        ? <Text style={styles.warning}>Password must be longer that 5 characters</Text> 
        : null }
    </View>
}


const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'blue',
        borderWidth: 0.25,
    },
    warning: {
        color: 'red',
    }
})



export default TextScreen