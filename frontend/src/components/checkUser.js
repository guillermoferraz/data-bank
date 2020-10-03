import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class checkUser extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         email: '',
    //         password:'',
    //         users:[],
    //         _id:''
    //     };
    //     this.checkUser = this.checkUser.bind(this);
    //     this.handleChange = this.handleChange.bind(this);

        
    // }

    // checkUser(e){
    //     fetch('http://192.168.0.112:4000/api/users/signIn', {
            
    //         method: 'POST',
    //         body: JSON.stringify(this.state),
    //         headers: {
    
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin':'http://192.168.0.112:3000'
    //         }
    //     })

    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             this.setState({email: '',password: ''})
    //         })
    //         .catch(err => console.error(err));
    //     e.preventDefault();    
    // }

    // handleChange(e){
    //     const {name, value} = e.target;
    //     this.setState({
    //         [name]: value
    //     })
    // }
   // THIS GENERATE A CROS ERROR!

    render(){
        return (
            <div id="checkUserMaster">
                <div id="checkUserMask">
                    <div className="col-4 mx-auto">
                        <div className="card  m-0 p-0 " id="cardCheck">
                            <div className="card-header">
                                <div className="card-title text-center text-success">
                                <div className="row">
                                        <h3 className="mx-auto">Sign In</h3><Link to="/" className="far fa-window-close float-right ml-4 m-2 text-success"></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body m-0 p-3">
                                <div className="row m-0 p-0">
                                    <form action="http://192.168.0.112:4000/api/users/signIn" method="POST" className="form-group mx-auto m-0 p-0 col-10" >
                                        
                                        <input id="email" type="email" name="email" placeholder="Email" className="form-control m-2 mx-auto"/>
                                        <input id="password" type="password" name="password" placeholder="Password" className="form-control m-2 mx-auto"/>
                                        <button   type="submit" className="btn btn-outline-success btn-block m-2 mx-auto">Sign In</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            // <div id="checkUserMaster">
            //     <div id="checkUserMask">
            //         <div className="col-4 mx-auto">
            //             <div className="card  m-0 p-0 " id="cardCheck">
            //                 <div className="card-header">
            //                     <div className="card-title text-center text-success">
            //                     <div className="row">
            //                             <h3 className="mx-auto">Sign In</h3><Link to="/" className="far fa-window-close float-right ml-4 m-2 text-success"></Link>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="card-body m-0 p-3">
            //                     <div className="row m-0 p-0">
            //                         <form onSubmit={this.checkUser} className="form-group mx-auto m-0 p-0 col-10" >
                                        
            //                             <input id="email" onChange={this.handleChange} value={this.state.email} type="email" name="email" placeholder="Email" className="form-control m-2 mx-auto"/>
            //                             <input onChange={this.handleChange} value={this.state.password} id="password" type="password" name="password" placeholder="Password" className="form-control m-2 mx-auto"/>
            //                             <button   type="submit" className="btn btn-outline-success btn-block m-2 mx-auto">Sign In</button>
            //                         </form>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}