import React from 'react';
import './listItems.css'

const ListItems = ({ list, setList, setEdit }) => {
    const deleteHandler = (idx) => {
        const deletedItem = list.filter((item) => item.id !== idx);
        setList(deletedItem);
    }
    const checkHandler = (item) => {
        const checkedItem = list.map((ele) => {
            if (ele.id === item.id) {
                return { ...ele, completed: !item.completed }
            }
            return ele;
        })
        setList(checkedItem)
    }
    const editHandler = ({ id }) => {
        const findItem = list.find((ele) => ele.id === id)
        setEdit(findItem);
    }

    const items =
        list.map((item) => (
            <article className='article' key={item.id}>
                <span className='span'>{item.title}</span>
                <div className='btnContainer'>
                    <button onClick={() => checkHandler(item)}>check</button>
                    <button onClick={() => editHandler(item)} >edit</button>
                    <button onClick={() => deleteHandler(item.id)}>delete</button>
                </div>

            </article>)
        )

    return (
        <div className='list'>
            {items}
        </div>
    )
}

export default ListItems