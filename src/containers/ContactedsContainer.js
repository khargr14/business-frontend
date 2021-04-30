import React from 'react'
import ContactedInput from '../components/ContactedInput'
import Contacteds from '../components/Contacteds'


class ContactedsContainer extends React.Component {
    
    render() {

        return(
            <div>
                <ContactedInput/>
                <Contacteds contacteds={this.props.business && this.props.business.contacteds}/>
            </div>
        )
    }
}

export default ContactedsContainer