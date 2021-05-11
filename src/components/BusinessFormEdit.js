import React from 'react'
import { connect } from 'react-redux'
import {editBusiness} from '../actions/editBusiness'


//   :name, :number, :email, :industry, :contacted_id

/*const business = useMemo(()=>{
    return props.businesses.filter(business => business.id == props.match.params.id)[0]
  }, [props.businesses, business.id]);*/

class BusinessFormEdit extends React.Component {

    state = {
        id: '',
        name: '',
        number: '',
        email: '', 
        industry: ''
    };

    componentDidMount(){
        // localhost:3000/businesses/7
        const business = this.props.businesses.filter(business => business.id == this.props.match.params.id)[0];
        this.setState({
            id: business.id,
            
            name: business.name,
            number: business.number,
            email: business.email, 
            industry: business.industry
        })
    }
        
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
       
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.editBusiness(this.state);
        this.setState({
            name: '',
            number: '',
            email: '', 
            industry: ''
        });
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

export default connect(null, { editBusiness })(BusinessFormEdit)