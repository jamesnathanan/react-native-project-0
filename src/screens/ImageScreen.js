import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {

    const milkImg = require('../../assets/milk.jpg')
    const sleepImg = require('../../assets/sleep.jpg')
    const mealImg = require('../../assets/meal.jpg')
    const diaper = require('../../assets/diaper.jpg')

    const timeData = {
        milk: 30,
        sleep: 360,
        meal: 20,
        diaper: 240,
    }

    return <View>
        <ImageDetail title="milk" imageSource={milkImg} duration={timeData.milk} />
        <ImageDetail title="sleep" imageSource={sleepImg} duration={timeData.sleep} />
        <ImageDetail title="meal" imageSource={mealImg} duration={timeData.meal} />
        <ImageDetail title="diaper" imageSource={diaper} duration={timeData.diaper} />
    </View>
}

const styles = StyleSheet.create({
    
})

export default ImageScreen