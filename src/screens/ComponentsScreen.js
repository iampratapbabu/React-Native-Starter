import React from "react";
import { Text, StyleSheet,Button,View} from "react-native";

const loading=false;


const ComponentsScreen = () => {
  let name="Tej Pratap";
  if(loading){
    return <Text style={styles.text}>Loading...</Text>
  }
  return(
    <View>
    <Text style={styles.text}>This is Components Screen..{name}</Text>
    <Text>Hi, there</Text>
    </View>
 );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color:'red'

  }
});


export default ComponentsScreen;
