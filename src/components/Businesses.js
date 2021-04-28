import React from 'react'





 const Businesses = (props) => {

    return(
        <div>
         {props.businesses.map(business => <li key={business.id}>{business.name} - {business.email}</li>)}
        </div>
    )
 
}

 export default Businesses