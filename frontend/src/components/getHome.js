import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class getHome extends Component {
    render(){
        return (
            <div>
                <h1>This is a home</h1>
                <a href="http://192.168.0.112:4000/api/users/logOut" className="btn btn-outline-primary">Close</a>
            </div>
        )
    }
}