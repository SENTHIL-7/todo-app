import { View, Text } from 'react-native'
import React from 'react'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'

export default function TodoItem({todo}:any) {
    console.log('props',todo)
  return (
    <ThemedView>
        <ThemedText>{todo?.title}</ThemedText>
    </ThemedView>
  )
}