import React from 'react'
import {Redirect} from 'react-router-dom'
import ContactedsContainer from '../containers/ContactedsContainer'




const Business = (props) => {
 
console.log(props)

let business = props.businesses.filter(business => business.id == props.match.params.id)[0]
//let business = props.businesses[props.match.params.id-1];
// let business=props.businesses[props.match.params.id-1];
// console.log(business,"data")
return (
  <div>
    <h3>
       {/* {business ? null: <Redirect to='/businesses'/>} */}
       {business ? business.name : null} 
       
       <h5> {business?business.number:null} - {business?business.email:null} - {business?business.industry:null}  </h5>     
    </h3>
    <ContactedsContainer business={business}/>
  </div>
)


}



export default Business