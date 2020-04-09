import React, { Fragment } from 'react';
import "./ContactList.css";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = ({ Data, setFavorite }) => {

    const singleContact = Data.map(item => {
        return (
            <ContactItem
                key={item.id}
                name={item.name}
                phone={item.phone}
                email={item.email}
                address={item.address}
                gender={item.gender}
                avatar={item.avatar}
                isFavorite={item.isFavorite}
                setFavorite={() => setFavorite(item.id)}
            ></ContactItem>
        );
    });

    return (
        <Fragment>
            <ul className="list">
                {singleContact}
            </ul>
        </Fragment>
    )
}

export default ContactList;
