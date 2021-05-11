import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteBusiness } from '../actions/deleteBusiness';
import { Button } from 'react-bootstrap';



const Businesses = (props) => {

  const handleDelete = (business) => {
    props.deleteBusiness(business.id)
  }

  return (
    <div>
      {props.businesses.map(business =>
        <li key={business.id}>
          <Link to={`/businesses/${business.id}`}>{business.name} - {business.number}- {business.email}- {business.industry}</Link>
          - <Button onClick={() => handleDelete(business)}>Delete</Button> - <Link to={`/businesses/${business.id}/edit`}>Edit</Link><br />
        </li>)}

    </div>


  )
}


export default connect(null, { deleteBusiness })(Businesses);

// {
//   props.businesses
// }

// [
//   {
//     name: 'business 1',
//     email: ...,
//     number: ...,
//     industry: ...
//   },
//   {
//     name: 'business 2',
//     email: ...,
//     number: ...,
//     industry: ...
//   },
//   {
//     name: 'business 3',
//     email: ...,
//     number: ...,
//     industry: ...
//   },
//   {
//     name: 'business 4',
//     email: ...,
//     number: ...,
//     industry: ...
//   },

// ]