import React, { Component } from 'react';


export default class checkUser extends Component {
   

    render(){
        return (
            <div className="col-2 mx-auto mt-5">
                <div className="card bg-dark m-0 p-0">
                    <div className="card-header">
                        <div className="card-title text-center text-success">
                            <h3>Start Session</h3>
                        </div>
                    </div>
                    <div className="card-body m-0 p-3">
                        <div className="row m-0 p-0">
                            <form action="http://192.168.0.112:4000/api/users/signIn" method="POST" className="form-group mx-auto m-0 p-0" >
                                
                                <input  type="email" name="email" placeholder="Email" className="form-control m-2 mx-auto"/>
                                <input  type="password" name="password" placeholder="Password" className="form-control m-2 mx-auto"/>
                                <button   type="submit" className="btn btn-outline-success btn-block m-2 mx-auto">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}