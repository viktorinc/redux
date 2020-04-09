import React, { Fragment, Component } from "react";
import "./AddContact.css";

class AddContact extends Component {

    state = {
        name: null,
        phone: null,
        email: null,
        address: null,
        avatar: null,
        gender: null
    };

    getName = (event) => {
        this.setState({
            name: event.target.value
        });
    }
    getAddress = (event) => {
        this.setState({
            address: event.target.value
        });
    }
    getPhone = (event) => {
        this.setState({
            phone: event.target.value
        });
    }
    getEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }
    getAvatar = (event) => {
        this.setState({
            avatar: event.target.value
        });
    }
    getGender = (event) => {
        this.setState({
            gender: event.target.value
        });
    }

    sendData = (event) => {
        event.preventDefault();
        const { name, phone, email, address, avatar, gender } = this.state;
        this.props.addContact(name, phone, email, address, avatar, gender);
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.sendData}>
                    <div class="form-group">
                        <label for="exampleInputEmail1" className="data-of-contact">Name contact:</label>
                        <input onChange={this.getName} type="text" className="form-control" placeholder="Enter name:"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1" className="data-of-contact">Phone contact:</label>
                        <input onChange={this.getPhone} type="tel" className="form-control" placeholder="Enter phone:"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1" className="data-of-contact">Email contact:</label>
                        <input onChange={this.getEmail} type="email" className="form-control" placeholder="Enter email:"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1" className="data-of-contact">Address contact:</label>
                        <input onChange={this.getAddress} type="text" className="form-control" placeholder="Enter address:"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1" className="data-of-contact">Gender contact:</label>
                        <input onChange={this.getGender} type="text" className="form-control" placeholder="Gender (men/women):"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1" className="data-of-contact">Select number avatar:</label>
                        <input onChange={this.getAvatar} type="number" min="1" max="99" className="form-control" placeholder="Select number avatar:"></input>
                    </div>

                    <button type="submit" className="btn btn-succes" title="Add contact" >Add contact</button>
                </form>
            </Fragment>
        )
    }
}

export default AddContact;