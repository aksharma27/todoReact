import React from 'react';

const ToDo = (props) => {

    return (
        <div>
            <div className='todo_style' >
                <button className='cross' onClick={() => {
                    props.onSelect(props.id)
                }} > x </button>
                <li>{props.text}</li>
            </div>
        </div>
    )
}

export default ToDo;
