import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {Link} from 'react-router-dom';

export default class Fail extends Component {

    render() {
        return (

            <div id="failWall">
                <div id="failMaster">
                    <div id="failMask">
                        <div id="failCard" className="card col-4 mx-auto">
                            <div className="card-body">
                                <h1 id="textFail">Access denied !</h1>
                                <Link to="/check"><button className="btn btn-outline-success float-right mt-2">Back</button></Link>
                            </div>

                        </div>
                    </div>
                    

                </div>
            </div>

             
        )
    }
}