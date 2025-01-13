import { useState } from "react";
import Banner from "./Banner";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import { FlatList, StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";

export default function DashBoard() {
    let sampleTodo= {
        listTitle : "daily routine",
        id:1,
        todoItems : [
            {   
                title : "wake up",
                completed : false,
                id : 1,
                userId : 1,
                completedAt : null,
                dueDate : null,
                dueTime : null,
                description : null,
                priority : null,
                tags : null,
                attachments : null,
                createdAt : null,
                updatedAt : null},
                {   
                    title : "wake up2",
                    completed : false,
                    id : 2,
                    userId : 2,
                    completedAt : null,
                    dueDate : null,
                    dueTime : null,
                    description : null,
                    priority : null,
                    tags : null,
                    attachments : null,
                    createdAt : null,
                    updatedAt : null},
            
            ]
        
    }
    const [todoArray, setTodoArray] = useState([sampleTodo]);
    return ( 
        <ThemedView style={styles.container}>
               <Banner></Banner>
            <FlatList
        data={todoArray}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item })  => {
                return <TodoList  todoItems={item}></TodoList>
            }}/>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20
    }
});