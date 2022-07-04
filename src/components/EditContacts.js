import React, { Component } from "react";
import { Consumer } from "../context";

import axios from "axios";


export default class EditContacts extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const contact = res.data;

    this.setState({
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
    });
  }

  onNameChnage = (e) => {
    this.setState({ name: e.target.value });
  };

  onPhoneChnage = (e) => {
    this.setState({ phone: e.target.value });
  };

  onEmailChnage = (e) => {
    this.setState({ email: e.target.value });
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, phone, email } = this.state;
    alert("Contact has been Updated");

    const updtContact = {
      name,
      phone,
      email,
    };

    const { id } = this.props.match.params;
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updtContact
    );

    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

    this.setState({
      name: "",
      phone: "",
      email: "",
    });
  };

  render() {
    const { name, phone, email } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">
                <h2>Update Contact</h2>
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
                    value="Update Contact"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
  
}

