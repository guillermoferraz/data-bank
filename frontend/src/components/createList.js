import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class createList extends Component {
    state = {
        objectPrimary: '',
        section: '',
        info: '',
        list: [],
        editing: false,
        _id: ''
    }

    async componentDidMount(){
        const res = await axios.get('/api/lists');

        if(res.data.length > 0) {
            this.setState({
                objectPrimary: this.state.objectPrimary,
                section: this.state.section,
                info: this.state.info
            })
        }

        if (this.props.match.params.id){
            console.log(this.props.match.params.id)
            const res = await axios.get('/api/lists/' + this.props.match.params.id)
            console.log(res.data)
            this.setState({
                objectPrimary: res.data.objectPrimary,
                section: res.data.section,
                info: res.data.info,
                _id: res.data._id,
                editing: true
            });
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if(this.state.editing) {
            const updateList =  {
                objectPrimary: this.state.objectPrimary,
                section: this.state.section,
                info: this.state.info,
            };

            await axios.put('/api/lists/' + this.state._id, updateList);
        } else {
            const newList = {
                objectPrimary: this.state.objectPrimary,
                section: this.state.section,
                info: this.state.info
            };
            axios.post('/api/lists', newList);
        }
        window.location.href  = '/api/createList'
    }

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }



    render(){
        return(
            <div id="containerList" className="container position-relative mx-auto">
             <div id="cardList" className="card col-5 mx-auto p-0 m-0">
                <div id="cardListHeader" className="card-header">
                    <div className="card-title m-0 p-0 text-success">
                        <div className=" m-0 p-0 form-inline">
                        <p className="m-0 p-0 ">Create List</p><Link to="/api/lists" className="far fa-window-close ml-auto m-0 p-0  text-success" id="closeListIcon"></Link>

                        </div>
                    </div>
                </div>
                <div className="card-body m-1 p-3">
                    <form id="formList" className="form-group mx-auto" onSubmit={this.onSubmit}>
                        <input onChange={this.handleChange} value={this.state.objectPrimary} type="text" name="objectPrimary" className="form-control m-2 mx-auto" placeholder="Object Primary"></input>

                        <input onChange={this.handleChange} value={this.state.section} type="text" name="section" placeholder="Section" className="form-control m-2 mx-auto"></input>

                        <textarea onChange={this.handleChange} value={this.state.info} type="text" rows="8" placeholder="Info" name="info" className="form-control m-2 mx-auto"></textarea>
                        <button id="btnList" type="submit" className="btn btn-outline-primary btn-block m-2 mx-auto">Insert Data</button>
                    </form> 
                </div>
             </div>
            </div>
            
        )
    }
}