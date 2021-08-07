import React from 'react'
import { Text , View, StyleSheet} from 'react-native'

const ComponentsScreen = () => {
    const babyName = 'Trillion'
    return <View>
            <Text style={styles.textStyle}>Baby Planner App</Text>
            <Text style={styles.subHeaderStyle}>Let's plan for your little {babyName}</Text>
        </View> 
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    },
    subHeaderStyle: {
        fontSize: 20,
    }
})


export default ComponentsScreen