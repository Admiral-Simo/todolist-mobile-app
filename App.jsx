import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";
import { Platform } from "react-native";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const pushTask = () => {
    Keyboard.dismiss();
    if (task.length > 0) {
      setTasks([...tasks, task]);
    }
    setTask("");
  };
  const completeTask = (index) => {
    let tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  };
  return (
    <View className="bg-[#E8EAED] flex-1">
      <View className="px-7 pt-28">
        {/* Header : Todays's Tasks */}
        <Text className="text-2xl font-bold">Today's tasks</Text>
        <View className="mt-6">
          {/* Here where tasks go */}
          {tasks.map((task, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={task} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="absolute bottom-4 w-full flex-row justify-around items-center"
      >
        <TextInput
          className="py-3 w-56 shadow bg-white rounded-full px-5"
          placeholder="Write a task"
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <TouchableOpacity onPress={pushTask}>
          <View className="bg-white h-14 w-14 justify-center items-center rounded-full shadow">
            <Text className="text-3xl">+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({});
