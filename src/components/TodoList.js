import React, {useState} from 'react';
import Todo from './Todo';
import NewTodo from './NewTodo';
import './todoList.css';

export default () => {

    const [tasks, updateTasks] = useState([{id: 1, name: 'Recharge Mobile', isCompleted: true},
        {id: 2, name: 'Pay Internet Bill', isCompleted: false},
        {id: 3, name: 'Pay Electricity Bill', isCompleted: false}]);

    const update = (task) => {
        const newTasks = [];
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === task.id)
                tasks[i].isCompleted = !tasks[i].isCompleted;
            newTasks.push(tasks[i]);
        }

        updateTasks(newTasks);
    };

    const addTodo = (task) => {
        updateTasks([...tasks, task])
    };

    return (<>
        <NewTodo onSubmit={addTodo}/>
        <div className="list-group">
            <div className="list-group-item task-header">
                Tasks
            </div>
            {tasks.map(task => <Todo key={task.id} task={task} onUpdate={update}/>)}
        </div>
    </>)
}