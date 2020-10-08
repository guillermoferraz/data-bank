import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class getHome extends Component {
    

        state = {
            user:'',
            email:'',
            _id:'',
            users:[]
            
            
        };
   
        
   
     


    async componentDidMount(){
        const res = await axios.get('/api/users');
        this.setState({users: res.data});
        // console.log(this.state.users);

     }       
    
    // componentDidMount(){
    //     this.fetchUsers();
    // }
    // fetchUsers(){
    //     fetch('/api/users')
    //     .then(res => res.json())
    //     .then(data => {
    //         this.setState({users: data});
    //         console.log(this.state.users);
    //     });
    // }


    
    

    render(){
        return (
            <div id="masterHome">
                <div id="masterHomeMask">
                <nav id="navigation" className="navbar navbar-expand-lg navbar-dark">
                    <Link className="nav-link" id="titleLinkNav" to="/api/home">Data Bank</Link>
                    <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link id="textLinkNav" className="nav-link" to="/api/home/createNote">Create Note</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link id="textLinkNav" className="nav-link" to="/api/lists">List</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="textLinkNav" className="nav-link" to="/api/home">Community</Link>
                        </li>

                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item ml-auto">
                            <a id="textLinkNav" className="nav-link" href="http://192.168.0.112:4000/api/users/logOut">Exit</a>
                        </li>
                    </ul>
                </div>
                </nav>
                <div id="colUserHome" className="col-2 m-0 p-0 mt-2">
                   <div id="cardUserHome" className="card">
                       <div id="cardBodyUserHome" className="card-body m-0 p-3">
                            <div id="rowUserHome">
                                <div>
                                    <span id="spanUserHome" className=" mr-auto">{this.state.users.user}</span>
                                </div>
                                <div>
                                    <span id="spanEmailHome" className=" mr-auto">{this.state.users.email}</span>
                                </div>
                            </div>
                       </div>

                   </div>
                </div>
                </div>
            </div>
        )
    }
}