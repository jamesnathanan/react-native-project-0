import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const HomeScreen = ({ navigation }) => {
  return <View>
        <Text style={styles.textStyle}>Welcome to Baby Time App</Text>
      
      <View style={styles.BtnStyle}>
        <Button 
          onPress={() => navigation.navigate('Components')}
          title="Go to component demo" 
        />
      </View>
      <View style={styles.BtnStyle}>
        <Button 
          title="Go to list of activities"
          onPress={ () => navigation.navigate('List')}
          style={styles.BtnStyle}
        />
      </View>
      <View style={styles.BtnStyle}>
        <Button 
          title="Current Timer"
          onPress={ () => navigation.navigate('Image')}
        />
      </View>
      <View style={styles.BtnStyle}>
        <Button
          title="Set Timer"
          onPress={ () => navigation.navigate('Counter')}
        />
      </View>
      <View style={styles.BtnStyle}>
        <Button 
          title="Color Theme"
          onPress={ () => navigation.navigate('Color')}
        />
      </View>
      <View style={styles.BtnStyle}>
        <Button 
          title="Square Page"
          onPress={ () => navigation.navigate('Square')}
        />
      </View>
    </View>
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    marginBottom: 50,
    marginTop: 20,
  },
  BtnStyle: {
    marginVertical: 10,
  }
});

export default HomeScreen;
