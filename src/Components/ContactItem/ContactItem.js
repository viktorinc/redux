import React, { Fragment, Component } from 'react';
import "./ContactItem.css";
import ContactItemPanel from "../ContactItemPanel/ContactItemPanel";

class ContactItem extends Component {

    state = {
        name: this.props.name,
        phone: this.props.phone,
        email: this.props.email,
        address: this.props.address,
        gender: this.props.gender,
        avatar: this.props.avatar,
        isFavorite: this.props.isFavorite
    };

    randomImage() {
        const randomAvatar = Math.floor(Math.random() * Math.floor(99));
        this.setState({
            avatar: randomAvatar
        });
    }

    render() {
        const { name, phone, email, address, gender, avatar } = this.state;
        const URL = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;

        let starStyle = "fa fa-star-o star";
        if (this.props.isFavorite === true) {
            starStyle = "fa fa-star star";
        }

        return (
            <Fragment>
                <li className="list-item">
                    <div className="contact-block">
                        <ul className="horizontal-menu">
                            <li className="horizontal-menu-item">
                                <img src={URL} alt="Contact image" className="contact-image"></img>
                            </li>
                            <li className="horizontal-menu-item">
                                Name: <span className="name">{name}</span>
                            </li>
                            <li className="horizontal-menu-item">
                                Phone: <span className="phone">{phone}</span>
                            </li>
                            <li className="horizontal-menu-item">
                                Email: <span className="email">{email}</span>
                            </li>
                            <li className="horizontal-menu-item">
                                Address: <span className="address">{address}</span>
                            </li>
                            <li className="horizontal-menu-item panel">
                                <button className="btn btn-succes" title="Choose a new photo" onClick={this.randomImage.bind(this)}>Random image</button>
                                <i onClick={this.props.setFavorite} className={starStyle} aria-hidden="true" title="Set favorite"></i>
                            </li>
                            <li className="horizontal-menu-item">
                                <span className="contact-panel"><ContactItemPanel></ContactItemPanel></span>
                            </li>
                        </ul>
                    </div>
                </li>

            </Fragment>
        )
    }
}

export default ContactItem;
