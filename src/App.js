// App.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import TaskList from './components/TaskList';
import Header from './components/Header';

const App = () => {
  const [tasks, setTasks] = useState([
    {id: 1, title: 'Task 1'},
    {id: 2, title: 'Task 2'},
    {id: 3, title: 'Task 3'},
  ]);

  const [newTaskText, setNewTaskText] = useState('');

  const completeTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const addTask = () => {
    if (newTaskText.trim() === '') {
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      title: newTaskText,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

  return (
    <View>
      <Header />
      <TaskList tasks={tasks} onComplete={completeTask} />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNewTaskText(text)}
        value={newTaskText}
        placeholder="Enter a new task"
      />
      <TouchableOpacity onPress={addTask} style={styles.addButton}>
        <Text style={styles.buttonText}>+ Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
