import React from 'react'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'
import { FlatList } from 'react-native'
import TodoItem from './TodoItem';

export default function TodoList({todoItems}:any) {
    console.log('props in todolist',todoItems);
    console.log('listTitle',todoItems.listTitle)
  return (
    <ThemedView>
      <ThemedText type='subtitle'>{todoItems.listTitle}</ThemedText>
      <FlatList data={todoItems.todoItems} renderItem={({item}) => <TodoItem todo={item}></TodoItem>}/>
    </ThemedView>
  )
}