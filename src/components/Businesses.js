import React from 'react'
import Business from './Business'





 const Businesses = (props) => {
                                                                 //   :name, :number, :email, :industry, :contacted_id
    return(
        <div>
         {props.businesses.map(business => 
         <div key={business.id}><Business business={business}/></div>)}
        </div>
    )
 
}

 export default Businesses