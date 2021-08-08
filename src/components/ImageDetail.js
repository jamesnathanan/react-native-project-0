import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({ title, imageSource, duration }) => {
    return <View style={styles.imgStyle}>
            <Image source={imageSource} />
            <Text>{title}'s time : set to {duration} minutes</Text>
            
        </View>
}


const styles = StyleSheet.create({
    imgStyle: {
        marginVertical:10,
        marginLeft:50,
    }
})

export default ImageDetail
