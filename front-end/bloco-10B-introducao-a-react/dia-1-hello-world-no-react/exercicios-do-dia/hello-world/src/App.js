import logo from './logo.svg';
import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['estudar', 'fazer comida', 'academia'];

function App() {
  return (
    <ul> {compromissos.map((tarefa) => Task(tarefa))} </ul>
  );
}

export default App;
