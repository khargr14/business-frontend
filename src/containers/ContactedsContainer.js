import React from 'react'
import ContactedInput from '../components/ContactedInput'
import Contacteds from '../components/Contacteds'


const ContactedsContainer = (props) => {
        return(
            <div>
                <ContactedInput business={props.business}/>
                <Contacteds contacteds={props.business && props.business.contacteds}/>
            </div>
        )
}

export default ContactedsContainer