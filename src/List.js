import React from 'react';
import axios from 'axios';

const options = {
    method: 'get'
    , url: `http://localhost:4000/`
};

export default class List extends React.Component {
    state = {
        tasks: []
    };

    componentDidMount() {
        console.log( options )
        axios(options)
            .then( res => {
                const tasks = res.data.tasks
                this.setState( { tasks } )
            } )
            .catch( err => {
                console.error( err );
            } )
    }

    render() {
        return (
            <ul style={{textAlign:'left'}}>
                { this.state.tasks.map( t => <li>{ t.name }</li> ) }
            </ul>
        )
    }
}