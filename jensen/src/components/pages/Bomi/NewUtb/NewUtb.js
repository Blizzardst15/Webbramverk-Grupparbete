
import React,{useState} from 'react';
import './NewUtb.css';

const NewUtb = props =>{
    const [enteredText, setEnteredText] = useState('');
    // let enteredText = '';

    const addUtbHandler = event =>{
        event.preventDefault();

        const newUtb = {
            id: Math.random().toString(),
            text : enteredText
        }
        // console.log(newUtb);

        // enteredText = '';
        setEnteredText('');
        props.onAddUtb(newUtb);
    };

    const textChangeHandler = event =>{
        // enteredText = event.target.value;
        setEnteredText(event.target.value);
    };
    return(
        <form className="new-utb" onSubmit={addUtbHandler }>
            <input type="text" value={enteredText} onChange={textChangeHandler} />
            <button type="submit">Add Ansökan</button>
        </form>
    )
}

export default NewUtb;
    