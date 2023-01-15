import React from 'react';
import ComponenteB from '../pure/Componente B';
import { Contact } from '../../models/contact.class';


const ComponenteA = () => {
    const defaultContact = new Contact("Manuel", "Vecino", "mfvecinom@gmail.com", true)

    return (
        <div>
            <h1>Your contacts: </h1>
            <ComponenteB contact={defaultContact}></ComponenteB>
        </div>
    );
};

export default ComponenteA;
