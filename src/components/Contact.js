import {
 Link
} from "react-router-dom";

import React, { Component } from 'react'
import {Consumer} from '../context.js'
import axios from 'axios'
//import EditContacts from "./EditContacts.js";
 class Contact extends Component {

   state={
     showContactInfo: false
   };

   deleteMsg = async (id, dispatch) => {
try{
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({type: 'DELETE_CONTACT', payload: id});
    } catch(e){
      dispatch({type: 'DELETE_CONTACT', payload: id});
    }

   
   };
   
  render() {
    const {id, name, email, phone} = this.props.contact;
    const {showContactInfo} = this.state;

    return (

     <Consumer>
      {value => {
        const {dispatch} = value;
        return(
        
         
          <div className='card card-body mb-3'>
            
        <h4>
          {name}

          <i className="fa fa-regular fa-sort-down" style={{cursor: 'pointer'}}
          onClick={
            () => this.setState({ showContactInfo: !this.state.showContactInfo })
             } 
             />
            <i className="fa fa-times" style={{float: 'right', cursor: 'pointer', color: 'red'}} 
            onClick={this.deleteMsg.bind(this, id, dispatch)} /> 

            <Link to={`EditContacts/${id}`}>

            <i className="fa fa-pencil" style={{ cursor: 'pointer', color: 'black', float: 'right', marginRight: '2rem'}} 
            /> 

            </Link>

        </h4>

        {showContactInfo? (<ul className="list-group">
          <li className="list-group-item">Phone: {phone}</li>
          <li className="list-group-item">Email: {email}</li>
        </ul> ): null}
        
        </div>
      
        )
      }}
     </Consumer>
      
     
    )
  }
}
export default Contact;
