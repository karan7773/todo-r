import React, {useState} from 'react';
import './App.css';

let gIndex=0

function App() {

  const [task,setTask]=useState("");
  const [todos,setTodos]=useState([]);

  function createTodo(event){
    event.preventDefault();
    setTodos(oldTodos=>{
      setTask('');
      return [...oldTodos,{todo: task,id:gIndex++}];
    })
  }

  function deleteTodo(itemId){
    setTodos(oldTodos=> oldTodos.filter(item=>item.id !== itemId));
  }

  return (
    <div>
      <h1>Todo</h1>
      <form  onSubmit={createTodo}>
        <input  type="text" value={task} onChange={event=>{
          setTask(event.target.value)
        }}/>
        <button type='submit'>add</button>
      </form>
      <ul>
        {todos.map((item,Index)=>{
          return <div key={Index}>
            <li>{item.todo} </li>
            <button onClick={()=>deleteTodo(item.id)} >delete</button>
          </div>
        })}
      </ul>
    </div>
  );
}

export default App;
