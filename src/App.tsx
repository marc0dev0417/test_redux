import React, { useEffect, useState } from 'react';

import Counter from './views/Counter'
import Form from './views/Form'

//This will help us to see the global state and dispatch actions
import { useAppDispatch, useAppSelector } from './app/hooks';

//actions
import { incremented, decremented , ammountAdded, reset} from './features/counter/counter_slice' 
import {getUsers} from './features/users/user_slice'

import './App.css';

interface User {
  id: number,
  name: String
}

function App() {

  const {value} = useAppSelector(state => state.counterStore)
  const {list} = useAppSelector(state => state.userStore)
  
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUsers()) 
  },[])

function handleIncrement(){
  dispatch(incremented())
}
function handleAmmount(){
  dispatch(ammountAdded(50))
}
function handleDecrement(){
  dispatch(decremented())
}
function handleReset(){
  dispatch(reset())
}

  return (
    <div className="App">
      {list.map((user: User, index: number) => 
      <h1 key={index}>{user.name}</h1>)}
    </div>
  );
}

export default App;
