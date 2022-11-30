import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Task = ({ text }) => {
  return (
    <View className='bg-white flex-row shadow-sm items-center justify-between mb-4 p-5 rounded-lg'>
      <View className="flex-row items-center flex-wrap">
        <View className='w-6 opacity-40 h-6 rounded-md mr-3 bg-[#55bcf6]'></View>

        <Text>{text}</Text>
      </View>
      <View className='w-5 h-5 border-[#55bcf6] border-2 rounded-xl'></View>
    </View>
  );
};



export default Task;
