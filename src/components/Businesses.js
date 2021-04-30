import React from 'react'
import {Route, Link} from 'react-router-dom'
import Business from './Business'





 const Businesses = (props) => {
                           //   :name, :number, :email, :industry, :contacted_id
    return(
    <div>
         {props.businesses.map(business => 
      <li key={business.id}>
          <Link to={`/businesses/${business.id}`}>{business.name} - {business.number}- {business.email}- {business.industry}</Link>
      </li> )}

    </div>
       
    
    )
 }
 

 export default Businesses