import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import readTodoRequest from './api/readTodoRequest'

function App() {
  
  useEffect(()=>{
    readTodoRequest().then((allTodos)=>{
      console.log(allTodos)
    })
  },[]);
  return <div>Hello</div>
  }


export default App
