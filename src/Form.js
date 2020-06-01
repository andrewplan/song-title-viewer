import React, { useState } from 'react';
import axios from 'axios';

const Form = ( props ) => {
    const [name, setName] = useState("")
    const [content, setContent] = useState("")
    const [task, setTask] = useState({})
    const [error, setError] = useState("")

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log( `Submitting ${name} ${content}`);
        const options = {
            method: 'post'
            , url: `http://localhost:4000/`
            , data: {
                name,
                content
            }
        };
        axios(options)
            .then(res => {
                const task = res.data
                console.log( task );
                setTask( task );
                setName( '' );
                setContent( '' );
            })
            .catch(err => {
                console.error( err );
                setError( err );
            })
    }

    return (
        <form onSubmit={ handleSubmit }>
            <span>Name: </span>
            <input 
                type="text"
                value={name} 
                onChange={e => setName(e.target.value)}
            />
            <br />
            <span>Content: </span>
            <input 
                type="text"
                value={content}
                onChange={e => setContent(e.target.value)}
            />
            <br />
            <input type="submit" value="Submit" />
            { Object.keys( task ).length ?  
                <ul style={{textAlign: 'left'}}>
                    <li>ID: { task.id }</li>
                    <li>Name: { task.name }</li>
                    <li>Content: { task.text_content }</li>
                </ul>
                : <div></div>
            }
            { error ? 
                <p>Error: { error.message }</p>
                : <div></div>
            }
        </form>
    )
}

export default Form;