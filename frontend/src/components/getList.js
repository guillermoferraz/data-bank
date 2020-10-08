import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

export default class getLists extends Component {
    constructor(){
        super();
        this.state = {
            objectPrimary :'',
            section: '',
            info:'',
            _id: '',
            lists: []
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
        this.fetchLists();
    } 

    fetchLists = async () => {
        const res = await axios.get('/api/lists');
        this.setState({lists: res.data});
        // console.log(this.state.lists)
    }
    

   

    async deleteList(id){
        const res = await axios.delete(`/api/lists/${id}`);
        this.setState({lists: res.data});
        this.fetchLists();

    }


    render(){
        return (
            
            <div className="mx-auto col-12" id="containerListTable">
                <div className="row">
                
                <div id="table" className="container mx-auto  m-0 p-0">
                <table className="table table-dark">
                    <thead className="bg-secondary">
                        <tr>
                            <th>Object Primary</th>
                            <th>Section</th>

                            <th>Info
                                
                                <Link to="/api/createList" id="btnAddData" className="btn btn-success  float-right m-0 p-0 ">Add data</Link>
            
                            </th>

                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.lists.map(list => {
                                return (
                                    <tr id="rowList" className="text-success" key={list._id}>
                                        <th id="listObjectPrimary" onChange={this.handleChange} value={this.state.objectPrimary} name="objectPrimary" >{list.objectPrimary}</th>
                                        <th id="listSection" value={this.state.section} onChange={this.handleChange} name="section">{list.section}</th>
                                        <th id="listInfo" value={this.state.info} onChange={this.handleChange} name="info">{list.info}</th>
                                       
                                        <th id="listIcons"><a href='/api/lists' onClick={() => this.deleteList(list._id)}
                                        ><i id="iconsNotes" className="fas fa-trash-alt float-right mt-2 mr-1 p-0 text-danger" title="Delete"
                                        ></i></a></th>

                                        <th id="listIcons" ><Link  to={"/api/editLists/" + list._id}><i id="iconsNotes" className="fas fa-edit mr-1 mt-2 p-0 float-right text-warning" title="Edit" ></i></Link></th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>   
            </div>
            
                </div>
            </div>
        )
    }
}