import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Contacts from './components/Contacts'
import {Provider} from './context';
import AddContacts from './components/AddContacts';
import EditContacts from './components/EditContacts';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default class App extends Component {
  render() {
    
    return (
<Provider>
  <Router>
      <div>
      <Navbar/>
      <Switch>
      <div className='container my-3'>
 
      
      <Route exact path="/">
        <Contacts />
      </Route>
      <Route exact path="/AddContacts">
        <AddContacts/>
      </Route>
      <Route exact path="/EditContacts/:id" component={EditContacts}>
       
      </Route>
      </div>
      </Switch>
      
      </div>
      </Router>
      </Provider>
      
      
     
    
    )
  }
}
