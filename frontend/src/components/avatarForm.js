import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class avatarForm extends Component {



    render() {
        return (

            <div id="masterAvatarForm" className="position-relative">
                <div className="container">
                    <div className="card col-4 mx-auto">
                        <div className="card-header">
                            <div className="card-title">
                                <p>Upload Image</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <form action="http://192.168.0.112:4000/api/avatar" method="POST" encType="multipart/form-data">
                                    <input className="form-control-file m-2 mx-auto" name="image"  type="file"></input>
                                    <button type="submit" className="btn btn-primary btn-block m-2 mx-auto">Upload</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
             
        )
    }
}
