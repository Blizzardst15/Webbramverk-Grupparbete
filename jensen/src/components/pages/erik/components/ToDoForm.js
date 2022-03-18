import React, { useState } from 'react';

const ToDoForm = ({ addTask, addDate}) => {

    const [ userInput, setUserInput, ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleClick = (e) => {
        setUserInput(e.currentTarget.value)
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        addDate(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <input value={userInput} type="date" onChange={handleClick}/>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default ToDoForm;