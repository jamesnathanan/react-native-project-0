import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";


const HomeScreen = ({ navigation }) => {
  return <View>
        <Text style={styles.textStyle}>Welcome to Baby Time App</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go to component demo" 
      />
      <View style={styles.BtnStyle}>
        <Button 
          title="Go to list demo"
          onPress={ () => navigation.navigate('List')}
          style={styles.BtnStyle}
        />
      </View>
      <Button 
        title="Go to Image Screen"
        onPress={ () => navigation.navigate('Image')}
      />
    </View>
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    marginBottom: 50,
  },
  BtnStyle: {
    marginVertical: 10,
  }
});

export default HomeScreen;
