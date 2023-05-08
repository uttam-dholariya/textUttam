import React,{useState} from 'react';
import './css/TodoList.css';
import Header from './Header';
import Form from './Form';
import TodosDisplay from '../TodosDisplay';

export default function TodoList() {
    const [input,setInput] = useState(" ");
    const [todos,setTodos] = useState([]);
    return(
       <>
       <div className="container">
        <div className="app-wrapper">
            <div>
                <Header/>
            </div>
            <div>
                <Form
                    input={input}
                    setInput={setInput}
                    todos={todos}
                    setTodos={setTodos}              
                />
            </div>
            <div>
                <TodosDisplay todos={todos} setTodos={setTodos}/>
            </div>
        </div>
       </div>
       </> 
    ) 
}
