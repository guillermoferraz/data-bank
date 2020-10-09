import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class createMyBlog extends Component {

    state = {
        title: '',
        article: '',
        date: '',
        blogs: [],
        editing: false,
        _id: ''
    }

    async componentDidMount(){
        const res = await axios.get('/api/myBlog');

        if(res.data.length > 0) {
            this.setState({
                title: this.state.title,
                article: this.state.article
            })
        }

        if (this.props.match.params.id){
            console.log(this.props.match.params.id)
            const res = await axios.get('/api/myBlog/' + this.props.match.params.id);
            console.log(res.data)
            this.setState({
                title: res.data.title,
                article: res.data.article,
                _id: res.data._id,
                editing: true
            });
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if(this.state.editing) {
            const updateMyBlog = {
                title: this.state.title,
                article: this.state.article,
                
            };

            await axios.put('/api/myBlog/' + this.state._id, updateMyBlog);
        } else {
            const newBlog = {
                title: this.state.title,
                article : this.state.article,
               
            };
            axios.post('/api/myBlog', newBlog);
        }
        window.location.href = '/api/myBlog'
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    

    
    

    
       
    


    render() {
        return (

            <div id="cardBlogMaster" className="container position-relative">
                <div id="cardNote" className="card col-6 mx-auto p-0">
                    <div id="cardNoteHeader" className="card-header">
                        <div className="card-title m-0 p-0">
                            <div className="row">
                                <h4 className="mx-auto text-success">Create Article</h4><Link to="/api/myBlog" className="far fa-window-close float-right m-2  text-success"></Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                           <div id="formNote" className="form-group mx-auto" >
                                <input className="form-control m-1 " type="text" name="title" placeholder="Title" onChange={this.handleChange} value={this.state.title}/>
                                <textarea className="form-control m-1" type="text" name="article" rows="10" placeholder="Article" onChange={this.handleChange} value={this.state.article}></textarea>
                                <button id="btnCreateBlog" className="btn btn-outline-success btn-block m-1 mt-3 ">Save Article</button>
                                
                           </div>
                        </form>
                    </div>

                </div>
            </div>

             
        )
    }
}
