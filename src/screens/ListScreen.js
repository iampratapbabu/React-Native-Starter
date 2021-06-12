import React from "react";
import { Text, StyleSheet,FlatList } from "react-native";

const ListScreen = () => {
  //console.log("hello");
  const friends=[
    {"name":"friend#1","key":1},
    {"name":"friend#2","key":2},
    {"name":"friend#3","key":3},
    {"name":"friend#4","key":4},
    {"name":"friend#5","key":5},
    {"name":"friend#6","key":6},
    {"name":"friend#7","key":7},
    {"name":"friend#8","key":8},
    {"name":"friend#9","key":9}
  ];
  return (
    <FlatList
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    KeyExtractor={friend=>friend.name}
    data={friends}
    renderItem={({item})=>{
      return (
        <Text style={styles.text}>{item.name}{item.key}</Text>

      )
    }}
    />
  )
};

const styles = StyleSheet.create({
  text: {

    fontSize: 30,
    color:'#e67e22',
    marginVertical:50,


  }
});


export default ListScreen;
