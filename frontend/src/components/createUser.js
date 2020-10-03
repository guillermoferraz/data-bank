import React, { Component } from 'react';
import swal from 'sweetalert';
import {Link} from 'react-router-dom';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';




export default class createUser extends Component {
    constructor() {
        super();
        this.state = {
            user: '',
            email: '',
            password: '',
            confirm_password: '',
            users:[],
            _id: ''
        };
        this.addUser = this.addUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    

    addUser(e){
        
        if(this.state.user === "" || this.state.email === "" || this.state.password === "" || this.state.confirm_password === ""){
                
                swal({
                    title: "Error",
                    text: "You must complete all the fields of the form",
                    icon: "error",
                    button: "Continue"
                })      
             setTimeout (function(){ return false},1000);       
        } 
        
        

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
              this.setState({user: '', email: '', password: '', confirm_password:''});

              
            //   swal("Welcome", "New user added successfully", "success");
            swal({
                title: "h19",
                icon: "success",
                text: "this is a text",
                button: "CONTINUE",
                
                
            }).then(function(){
                window.location.href="/"
            })
                
                
            
              
          })
          
            
            .catch(err => console.error(err));
            
        e.preventDefault();
        
    }
    



    
    


    
   

    render() {
        return (
            <div id="createUserMaster">
                <div id="createUserMask">
                    <div className="col-4 mx-auto ">
                        <div className="card  m-0 p-0" id="cardUser">
                            <div className="card-header">
                                <div className="card-title text-center text-success">
                                    <div className="row">
                                        <h3 className="mx-auto">Create Account</h3><Link to="/" className="far fa-window-close float-right ml-4 m-2 text-success"></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body m-0 p-3">
                                <div className="row m-0 p-0">
                                    <div><p id="error"></p></div>
                                    <form className="form-group col-10 mx-auto m-0 p-0" onSubmit={this.addUser}>
                                        <input id="user" onChange={this.handleChange} value={this.state.user} type="text" name="user" placeholder="User" className="form-control m-2 mx-auto"/>
                                        <input id="email" onChange={this.handleChange} value={this.state.email} type="email" name="email" placeholder="Email" className="form-control m-2 mx-auto"/>
                                        <input id="password" onChange={this.handleChange} value={this.state.password} type="password" name="password" placeholder="Password" className="form-control m-2 mx-auto"/>
                                        <input id="confirm_password" onChange={this.handleChange} value={this.state.confirm_password} type="password" name="confirm_password" placeholder="Confirm Password" className="form-control m-2 mx-auto"/>
                                        <button   type="submit" className="btn btn-outline-success btn-block m-2 mx-auto">Sign Up</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
        
    }
    
    
}


   



 