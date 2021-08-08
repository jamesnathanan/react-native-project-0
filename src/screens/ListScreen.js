import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const activities = [
        {name: "Act #1", time: 20},
        {name: "Act #2", time: 15},
        {name: "Act #3", time: 30},
        {name: "Act #4", time: 5},
        {name: "Act #5", time: 17},
        {name: "Act #6", time: 60},
        {name: "Act #7", time: 120},
        {name: "Act #8", time: 25},
        {name: "Act #9", time: 5},
        {name: "Act #10", time: 180},
    ]
    return (
        <FlatList
            keyExtractor={(act) => act.name} 
            data={activities}
            renderItem={ ({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - Durable: {item.time} mins</Text>
            }} 
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 30,
    }
})

export default ListScreen 