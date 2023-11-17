// TaskList.js
import React from 'react';
import {View, FlatList} from 'react-native';
import Task from './Task';

const TaskList = ({tasks, onComplete}) => {
  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({item}) => <Task task={item} onComplete={onComplete} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default TaskList;
