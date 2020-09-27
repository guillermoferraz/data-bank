import React, { Component } from 'react';
import swal from 'sweetalert';




export default class createUser extends Component {
    constructor() {
        super();
        this.state = {
            user: '',
            email: '',
            password: '',
            users:[],
            _id: ''
        };
        this.addUser = this.addUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    

    addUser(e){
        fetch('http://192.168.0.112:4000/api/users', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        

            .then(res => res.json())
            .then(data => {
              console.log(data)
              this.setState({user: '', email: '', password: ''});
              swal("Welcome", "New user added successfully", "success")
          })
            .catch(err => console.error(err));
        e.preventDefault();
    }



    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    
   

    render() {
        return (
            <div className="col-2 mx-auto mt-5">
                <div className="card bg-dark m-0 p-0">
                    <div className="card-header">
                        <div className="card-title text-center text-success">
                            <h3>Create Account</h3>
                        </div>
                    </div>
                    <div className="card-body m-0 p-3">
                        <div className="row m-0 p-0">
                            <form className="form-group mx-auto m-0 p-0" onSubmit={this.addUser}>
                                <input  onChange={this.handleChange} value={this.state.user} type="text" name="user" placeholder="User" className="form-control m-2 mx-auto"/>
                                <input onChange={this.handleChange} value={this.state.email} type="email" name="email" placeholder="Email" className="form-control m-2 mx-auto"/>
                                <input onChange={this.handleChange} value={this.state.password} type="password" name="password" placeholder="Password" className="form-control m-2 mx-auto"/>
                                <button   type="submit" className="btn btn-outline-success btn-block m-2 mx-auto">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}


   



 