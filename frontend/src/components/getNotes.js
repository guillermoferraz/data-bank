import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class getNote extends Component {
    constructor(){
        super();
        this.state = {
            title :'',
            description: '',
            _id: '',
            notes: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    

    async componentDidMount(){
        this.fetchNotes();
    }

    async deleteNote(id){
        const res = await axios.delete(`/api/notes/${id}`);
        this.setState({notes: res.data});
        this.fetchNotes();
        

    }

    async fetchNotes(){
        const res = await axios.get('/api/notes');
        this.setState({notes: res.data});
        console.log(this.state.notes)
    }
   
   


    


    // deleteNote(id){
    //     //swal
    //     fetch(`/api/notes/${id}`,{
    //         method: 'DELETE',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         this.fetchNotes();
            
    //     })
    // }
    
    

    render(){
        return (
            <div className="container">
                <div id="divNotes" className="row m-0 p-0">
                {
                    this.state.notes.map(note => {
                        return (
                            <div id="cardsNotes" className="card col-2 m-3 p-0" key={note._id}>
                            <div id="cardsNotesHeader" className="card-header m-0 p-0">
                                <div id="cardsNotesTitle" className="card-title p-0 m-0">
                                    <a href="/api/home"><i id="iconsNotes" className="fas fa-trash-alt float-right mt-2 mr-1 p-0 text-danger" title="Delete"
                                    
                                    onClick={() => this.deleteNote(note._id)}

                                    ></i></a>

                                    <Link  to="/api/home/${id}"><i id="iconsNotes" className="fas fa-edit mr-1 mt-2 p-0 float-right text-warning" title="Edit" ></i></Link>

                                    <p className="m-0 p-2" onChange={this.handleChange} value={this.state.title} name="title">{note.title}</p>
                                </div>
                            </div>
                            <div id="cardsNotesBody" className="card-body">
                                <p onChange={this.handleChange} value={this.state.description} name="description" id="cardsNotesDescription" >{note.description}</p>
                              
                            </div>
                        </div>
        
                        )
                    })
                }
            </div>
            </div>
        )
    }
}