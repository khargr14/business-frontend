import React from 'react'


const Business = (props) => {

console.log(props)
return (
    <li>
      {props.business.name} - {props.business.number} - {props.business.email} - {props.business.industry}      
    </li>


)


}



export default Business