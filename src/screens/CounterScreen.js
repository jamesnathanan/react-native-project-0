import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CounterScreen = () => {
    const [ counter, setCounter ] = useState(0)
    // let caution = false
    const [ caution , setCaution ] = useState(false)

    const decreaseTimer = () => {
        if ( counter <= 1) {
            setCaution(true)
            setCounter(0)
        }
        else {
            setCounter( counter - 1)

        }
    }

    const increaseTimer = () => {
        setCaution(false)
        setCounter( counter + 1 )
        
    }

    return <View>
        <Button title="Increase" onPress={() => increaseTimer() } />
        <Button title="Decrease" onPress={() => decreaseTimer() } />
        <Text>Duration: {counter} {counter > 1 ? 'minutes' : 'minute'}</Text>
        { caution && <Text style={styles.caution}>Please set timer over 0 minute</Text>}
    </View>
}


const styles = StyleSheet.create({
    caution: {
        color: 'red',
    }
})


export default CounterScreen