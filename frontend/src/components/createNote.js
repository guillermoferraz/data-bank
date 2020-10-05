import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {Link} from 'react-router-dom';

export default class createNote extends Component {

    render() {
        return (

            <div id="cardNoteMaster" className="container">
                <div id="cardNote" className="card col-4 mx-auto p-0">
                    <div id="cardHeader" className="card-header">
                        <div className="card-title m-0 p-0">
                            <div className="row">
                                <h4 className="mx-auto">Create Note</h4><Link to="/api/home" className="far fa-window-close float-right m-2  text-success"></Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <form>
                           <div id="formNote" className="form-group mx-auto">
                                <input className="form-control m-1 " type="text" name="title" placeholder="Title"/>
                                <textarea className="form-control m-1" type="text" name="description" rows="6" placeholder="Description"></textarea>
                                <button id="btnCreateNotes" className="btn btn-outline-success btn-block m-1 mt-3 ">Save Note</button>
                                
                           </div>
                        </form>
                    </div>

                </div>
            </div>

             
        )
    }
}
