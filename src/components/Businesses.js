import React from 'react'





 const Businesses = (props) => {
                                                                 //   :name, :number, :email, :industry, :contacted_id
    return(
        <div>
         {props.businesses.map(business => <li key={business.id}>{business.name} - {business.number} - {business.email} - {business.industry}</li>)}
        </div>
    )
 
}

 export default Businesses