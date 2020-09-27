import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {Link} from 'react-router-dom';

export default class Buttons extends Component {

    render() {
        return (

            <div className="container">
                <div className="form-inline mt-5">
                    <Link to="/check" className="btn btn-outline-success btn-block m-3 col-4 mx-auto">Sign In</Link>
                    <Link to="/api/users"  className="btn btn-outline-success btn-block m-3 col-4 mx-auto">Sign Up</Link>        
                </div>
                

            </div>

             
        )
    }
}
