import React, { Component } from 'react'
import Contact from './Contact.js'
import { Consumer } from '../context.js';


export default class Contacts extends Component {

    

        render(){
         
          return(
            <>
            <div className='mb-4'>
            <h1><span className='text-success'>Contact</span> list</h1>
            </div>
            <Consumer>
              {value => {
                 const {contacts} = value;
                return(
<React.Fragment>
        {contacts.map(contact => 
        <Contact key={contact.id} contact={contact}  />)}
        </React.Fragment>
                ) 
              }
               }
            </Consumer>
            </>
          )
        }

 
}
