import React, { useState } from 'react';
import {SafeAreaView,Text,TextInput,TouchableOpacity,FlatList,View,Switch,} from 'react-native';
import styles from './styles'; 
import { MaterialIcons } from '@expo/vector-icons'; 

const App = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (taskTitle.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), title: taskTitle, status: false }]);
      setTaskTitle(''); 
    }
  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status: !task.status } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <View style={styles.taskDetails}>
        <Text style={styles.taskTitle}>
          {item.title}
        </Text>
        <Text style={styles.taskStatus}>
          {item.status ? "Done" : "Due"}
        </Text>
      </View>
      <View style={styles.taskActions}>
        <Switch
          value={item.status}
          onValueChange={() => toggleTaskStatus(item.id)}
        />
        <TouchableOpacity onPress={() => deleteTask(item.id)}>
          <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>ToDo App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task title"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <TouchableOpacity
        style={[
          styles.addButton, 
          { backgroundColor: taskTitle.trim() ? 'green' : 'gray' } 
        ]}
        onPress={addTask}
        disabled={!taskTitle.trim()} 
      >
        <Text style={styles.addButtonText}>ADD TASK</Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.taskList}
      />
    </SafeAreaView>
  );
};

export default App;
