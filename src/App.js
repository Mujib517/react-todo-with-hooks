import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="col-md-5">
                <TodoList/>
            </div>
        </div>
    );
}

export default App;
