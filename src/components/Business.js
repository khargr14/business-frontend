import React from 'react'


const Business = (props) => {

console.log(props)
//let business=props.businesses[props.match.params.id-1];
let business=props.businesses[props.match.params.id-1];
console.log(business,"data")
return (
    <li>
       {business?business.name:null} - {business?business.number:null} - {business?business.email:null} - {business?business.industry:null}       
    </li>


)


}



export default Business