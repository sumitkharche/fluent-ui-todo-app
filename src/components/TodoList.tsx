import React from 'react';
import { Stack, Label } from "@fluentui/react";
import TodoItem from './TodoItem';

function TodoList(props:any) {

    return (
        <Stack gap={10} >
            { props.todos.length > 0 ? props.todos.map((todo: any) => (
                <TodoItem todo={todo} key={todo.id} deleteTodo={props.deleteTodo} />
            )): 
            <Label>Todo list is empty...</Label>}
        </Stack>
    );
}

export default TodoList;