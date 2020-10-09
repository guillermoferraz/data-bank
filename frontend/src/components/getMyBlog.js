import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

export default class getMyBlog extends Component {
    constructor(){
        super();
        this.state = {
            title :'',
            article: '',
            date:'',
            _id: '',
            blogs: []
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
        this.fetchBlogs();
    } 

    fetchBlogs = async () => {
        const res = await axios.get('/api/myBlog');
        this.setState({blogs: res.data});
        console.log(this.state.blogs)
    }
    

   

    async deleteBlog(id){
        const res = await axios.delete(`/api/myBlog/${id}`);
        this.setState({blogs: res.data});
        this.fetchBlogs();

    }
    

    render(){
        return (
            
            <div className="container position-relative" id="masterBlog">
                <div id="btnAddArticle" className="position-relative">
                    <Link to="/api/createMyBLog" className="btn btn-primary float-right m-0 p-0">Add new Article</Link>
                </div>

                <div id="divBlogs" className="row m-0">
                {
                    this.state.blogs.map(blog => {
                        return (
                            <div id="cardsBlogs" className="card col-12 m-3 p-0 mx-auto" key={blog._id} >
                            <div id="cardsBlogHeader" className="card-header m-0 p-0">
                                <div id="cardsBlogTitle" className="card-title p-0 m-0">
                                    <a href='/api/myBlog' onClick={() => this.deleteBlog(blog._id)}
                                    ><i id="iconsBlogs" className="fas fa-trash-alt float-right mt-2 mr-1 p-0 text-danger" title="Delete"
                                    ></i></a>

                                    <Link  to={"/api/myBlog/editBlog/" + blog._id}><i id="iconsBlogs" className="fas fa-edit mr-1 mt-2 p-0 float-right text-primary" title="Edit" ></i></Link>

                                    <p className="m-0 p-2" onChange={this.handleChange} value={this.state.title} name="title">{blog.title}</p>
                                </div>
                            </div>
                            <div id="cardsBlogsBody" className="card-body m-0 p-2 mt-3">
                                <p onChange={this.handleChange} value={this.state.article} name="article" id="cardsBlogsArticle" >{blog.article}</p>
                                <p className="float-right m-0 p-0" id="cardsBlogsDate" value={this.state.date} name="date">Publicated: {format(blog.date)}</p>
                              
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