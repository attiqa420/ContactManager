import React, { Component } from "react";
import { Consumer } from "../context";
import {v1 as uuid} from 'uuid';
import axios from 'axios'
export default class AddContacts extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
  };

  onNameChnage = (e) =>{
    this.setState({name: e.target.value})
  }

  onPhoneChnage = (e) =>{
    this.setState({phone: e.target.value})
  }

  onEmailChnage = (e) =>{
    this.setState({email: e.target.value})
  }

 

 onSubmit =  async (dispatch, e) => {
e.preventDefault();
const {name, phone, email} = this.state;
const newContact = {
    id: uuid(),
    name,
   phone,
  email
};
  
const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
 dispatch({type: 'ADD_CONTACT', payload: res.data});


alert('Contact has been added');
this.setState({
  name: '',
  phone:'',
  email: ''
})
  };

  render() {
    const { name, phone, email } = this.state;

    return(
        <Consumer>
        {value => {
const { dispatch } = value;
return(
<div className="card mb-3">
        <div className="card-header">
          
          <h2>Add Contact</h2>
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this, dispatch)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Your Name"
                value={name}
                onChange={this.onNameChnage}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter Your Phone Number"
                value={phone}
                onChange={this.onPhoneChnage}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={this.onEmailChnage}
              />
            </div>

            <input
              type="submit"
              className="btn btn-primary col-12"
              value="Add Contact"
              
            />
          </form>
        </div>
      </div>
)
        }}
        </Consumer>
    )
    
  }
}
