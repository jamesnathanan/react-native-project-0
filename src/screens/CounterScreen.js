import React, { useState, useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const INCREMENT = 1

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return { ...state, counter: state.counter + action.payload }
        case 'decrease':
            return state.counter + action.payload < 0 ? state : { ...state, counter: state.counter + action.payload}
        default:
            return state
    }
}

const CounterScreen = () => {
    // const [ counter, setCounter ] = useState(0)
    // let caution = false
    // const [ caution , setCaution ] = useState(false)

    const [state, dispatch] = useReducer(reducer, { counter: 0 })
    const { counter } = state

    // const decreaseTimer = () => {
    //     if ( counter <= 1) {
    //         setCaution(true)
    //         setCounter(0)
    //     }
    //     else {
    //         setCounter( counter - 1)

    //     }
    // }

    // const increaseTimer = () => {
    //     setCaution(false)
    //     setCounter( counter + 1 )
        
    // }

    return <View>
        <Button title="Increase" onPress={() => dispatch({ type: 'increase', payload: INCREMENT }) } />
        <Button title="Decrease" onPress={() => dispatch({ type: 'decrease', payload: -1 * INCREMENT }) } />
        <Text>Duration: {counter} {counter > 1 ? 'minutes' : 'minute'}</Text>
        { counter <= 0 && <Text style={styles.caution}>Please set timer over 0 minute</Text>}
    </View>
}


const styles = StyleSheet.create({
    caution: {
        color: 'red',
    }
})


export default CounterScreen