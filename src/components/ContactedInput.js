import React from 'react'
import {connect} from 'react-redux'
//import {addContacted} from '../actions/addContacted'



class ContactedInput extends React.Component {
//:name, :number, :email, :date, :message

state = {
    name: '',
    number: '',
    email: '', 
    date: '',
    message: ''

};
    
handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    });

};
   
handleSubmit = (event) => {
    event.preventDefault();
    this.props.addContacted(this.state, this.props.business.id);
    this.setState({
        name: '',
        number: '',
        email: '', 
        date: '',
        message: ''
  
    })
}

    render() {
        return(
            <div>
                <form>
                <label>Contacted Name: </label>
                   <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/><br/>

                   <label>Number: </label>
                   <input type='text' placeholder='Number' value={this.state.number} name="number" onChange={this.handleChange}/><br/><br/>

                   <label>Email: </label>
                   <input type='text' placeholder='Email'value={this.state.email} name="email" onChange={this.handleChange}/><br/><br/>

                   <label>Date: </label>
                   <input type='text' placeholder='Date' value={this.state.industry} name="date"  onChange={this.handleChange}/><br/><br/>

                   <label>Message: </label>
                   <textarea type='text' placeholder='Message' value={this.state.industry} name="message"  onChange={this.handleChange}/><br/><br/>

                    <input type="submit"/>
                </form>
            </div>

        )


    }
}
//,{addContacted}
export default connect(null)(ContactedInput)