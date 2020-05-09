import React, { useState } from 'react';
import { Stack,TextField, PrimaryButton } from "@fluentui/react";


function AddTodo(props:any) {

    const [todoName, setTodoName] = useState("");    
    const addTodo = () => {      
        props.addTodo(todoName);
        setTodoName("");
    }
    const setTodo = (e: any) =>{
        setTodoName(e.target.value);
    }

    return (
        <Stack>
            <Stack horizontal >
                <Stack.Item grow>
                    <TextField placeholder="Add new item" value={todoName} onChange={setTodo }/>
                </Stack.Item>
                <PrimaryButton onClick={addTodo} >Add</PrimaryButton>
            </Stack>
        </Stack>
    );
}

export default AddTodo;
