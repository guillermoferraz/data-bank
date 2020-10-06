import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class createNote extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            notes: [],
            _id:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.newNote = this.newNote.bind(this);
    }
    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    async componentDidMount(){
        const res = await axios.get('/api/notes');
        this.setState({notes: res.data});
        console.log(this.state.notes);
    }


    newNote(e) {
        e.preventDefault();

        //validation new note

        fetch('/api/notes', {
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
                this.setState({title: '', description: ''});


                //swal successfully
            })
            .catch(err => console.error(err));
        e.preventDefault();
            
    }
    editNote(id){
        fetch(`/api/notes/${id}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                title: data.title,
                description: data.description,
                _id: data._id
            })
        }); 
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
                        <form onSubmit={this.newNote}>
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
