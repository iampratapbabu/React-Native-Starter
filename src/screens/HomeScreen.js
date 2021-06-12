import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity} from "react-native";

const HomeScreen = () => {
  const onPress = () =>{
    console.log("Button clicked");
  }
  return (
    <View>
    <Text style={styles.text}>This is Home screen</Text>
    <Button onPress={onPress} title="Go to Components"></Button>
    <TouchableOpacity>
      <Text>Go to Components</Text>
    </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color:'blue'

  }
});


export default HomeScreen;
