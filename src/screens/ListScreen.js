import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const activities = [
        {name: "Act #1"},
        {name: "Act #2"},
        {name: "Act #3"},
        {name: "Act #4"},
        {name: "Act #5"},
        {name: "Act #6"},
        {name: "Act #7"},
        {name: "Act #8"},
        {name: "Act #9"},
        {name: "Act #10"},
    ]
    return (
        <FlatList
            keyExtractor={(act) => act.name} 
            data={activities}
            renderItem={ ({ item }) => {
                return <Text>{item.name}</Text>
            }} 
        />
    )
}

const styles = StyleSheet.create({

})

export default ListScreen 