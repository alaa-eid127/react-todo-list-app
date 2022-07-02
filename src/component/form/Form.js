import React, { useEffect } from 'react'
import './form.css'
import { v4 as uuidv4 } from 'uuid'
const Form = ({ input, setInput, list, setList, edit, setEdit }) => {
    useEffect(() => {
        if (edit) {
            setInput(edit.title)
        } else {
            setInput('')
        }
    }, [setInput, edit])
    const updateList = (title, id, completed) => {
        const newList = list.map((ele) =>
            ele.id === id ? { title, id, completed } : ele);
        setList(newList);
        setEdit('')
    }
    const formHandler = (e) => {
        setInput(e.target.value)
    }
    const addItem = (e) => {
        e.preventDefault();
        if (!edit) {
            setList([...list, {
                id: uuidv4(),
                title: input,
                completed: false
            }])
            setInput('')
        } else {
            updateList(input, edit.id, edit.completed);
        }

    }
    return (

        <form className='form' onSubmit={addItem}>
            <input type='text' value={input} required maxLength={30} placeholder='Enter your daily routine..' onChange={formHandler} />
            <button type='submit' >{edit ? 'ok' : 'add'}</button>
        </form>

    )
}

export default Form