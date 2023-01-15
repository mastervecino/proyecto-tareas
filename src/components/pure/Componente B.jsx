import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';



const ComponenteB = ({ contact }) => {
    return (
        <div>
            <h3>Contacto</h3>
            <p>Nombre: {contact.name}</p>
            <p>Apellido: {contact.lastname}</p>
            <p>Email: {contact.email}</p>
            <p>{contact.connected ? 'On-Line' : 'Off-Line'}</p>
        </div>
    );
};


ComponenteB.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};


export default ComponenteB;
