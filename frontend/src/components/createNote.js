import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class createNote extends Component {

    state = {
        title: '',
        description: '',
        date: '',
        notes: [],
        editing: false,
        _id: ''
    }

    async componentDidMount(){
        const res = await axios.get('/api/notes');

        if(res.data.length > 0) {
            this.setState({
                title: this.state.title,
                description: this.state.description
            })
        }

        if (this.props.match.params.id){
            console.log(this.props.match.params.id)
            const res = await axios.get('/api/notes/' + this.props.match.params.id);
            console.log(res.data)
            this.setState({
                title: res.data.title,
                description: res.data.description,
                _id: res.data._id,
                editing: true
            });
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if(this.state.editing) {
            const updateNote = {
                title: this.state.title,
                description: this.state.description,
                
            };

            await axios.put('/api/notes/' + this.state._id, updateNote);
        } else {
            const newNote = {
                title: this.state.title,
                description : this.state.description,
               
            };
            axios.post('/api/notes', newNote);
        }
        window.location.href = '/api/home'
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    

    
    

    
       
    


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
                        <form onSubmit={this.onSubmit}>
                           <div id="formNote" className="form-group mx-auto" >
                                <input className="form-control m-1 " type="text" name="title" placeholder="Title" onChange={this.handleChange} value={this.state.title}/>
                                <textarea className="form-control m-1" type="text" name="description" rows="6" placeholder="Description" onChange={this.handleChange} value={this.state.description}></textarea>
                                <button id="btnCreateNotes" className="btn btn-outline-success btn-block m-1 mt-3 ">Save Note</button>
                                
                           </div>
                        </form>
                    </div>

                </div>
            </div>

             
        )
    }
}
