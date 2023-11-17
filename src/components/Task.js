// Task.js
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Task = ({task, onComplete}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => onComplete(task.id)}>
        <Text>{task.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Task;
