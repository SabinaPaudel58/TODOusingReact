 
 import React,{useState} from 'react'
 import './App.css'
 
 const App = () => { 
  const[userInput,setUserInput] = useState('')
  const [todos, setTodos ] = useState([])

  const addData = () =>{
    setTodos([...todos, userInput])

  }
   return (
     <div>
      <h1> Todolist</h1>
      <input onChange={(event)=> setUserInput( event.target.value)} type ="text"></input>
      <button onClick={()=> addData()}>Add</button>
      <ul>
        {
          todos.map((todo, index)=> <li key={index}>{todo}</li>)
        }
      </ul>
     </div>
   )
 }
 
 export default App