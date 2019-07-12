import React, {useState} from 'react';
import './newTodo.css';

export default ({onSubmit}) => {

    const [task, set] = useState({name:''});

    const change = (e) => {
        set({name: e.target.value});
    };

    const submit = e => {
        task.id = Math.floor(Math.random(0,9) * 1000);
        onSubmit(task);
        set({name:''});
        e.preventDefault();
    };


    return <form onSubmit={submit}>
        <div className="input-group">
            <input value={task.name} onChange={change} className="form-control" type="text" placeholder="Enter Task"/>
            <button type="submit" className="btn btn-default">
                <span className="fa fa-plus"></span>
            </button>
        </div>
    </form>
}