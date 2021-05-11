import React from 'react'
import { connect } from 'react-redux'
import {addBusiness} from '../actions/addBusiness'


//   :name, :number, :email, :industry, :contacted_id

class BusinessForm extends React.Component {

    state = {
        name: '',
        number: '',
        email: '', 
        industry: ''

    };
        
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });

    };
       
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addBusiness(this.state);
        this.setState({
            name: '',
            number: '',
            email: '', 
            industry: ''
      
        })
    }



    render(){
        return(
           <div>
               <form onSubmit={this.handleSubmit}>
                   <label>Business Name: </label>
                   <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/><br/>

                   <label>Number: </label>
                   <input type='text' placeholder='Number' value={this.state.number} name="number" onChange={this.handleChange}/><br/><br/>

                   <label>Email: </label>
                   <input type='text' placeholder='Email'value={this.state.email} name="email" onChange={this.handleChange}/><br/><br/>

                   <label>Industry: </label>
                   <input type='text' placeholder='Industry' value={this.state.industry} name="industry"  onChange={this.handleChange}/><br/><br/>

                    <input type="submit"/>
               </form>
           </div> 
        )
    }
}

export default connect(null, { addBusiness })(BusinessForm)