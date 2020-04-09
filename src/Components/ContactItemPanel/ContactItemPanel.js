import React, { Fragment } from 'react';
import "./ContactItemPanel.css";

const ContactItemPanel = () => {
    return (
        <Fragment>
            <i className="fa fa-comments" aria-hidden="true" title="Sent a message"></i>
            <i className="fa fa-phone" aria-hidden="true" title="Call to subscriber"></i>
            <i className="fa fa-location-arrow" aria-hidden="true" title="Location"></i>
            <i className="fa fa-pencil" aria-hidden="true" title="Edit contact"></i>
            <i className="fa fa-trash-o" aria-hidden="true" title="Delete contact"></i>
        </Fragment>
    )
}

export default ContactItemPanel;