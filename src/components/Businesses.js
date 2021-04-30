import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteBusiness } from '../actions/deleteBusiness';


const Businesses = (props) => {

  const handleDelete = (business) => {
    props.deleteBusiness(business.id)
  }

  return (
    <div>
      {props.businesses.map(business =>
        <li key={business.id}>
          <Link to={`/businesses/${business.id}`}>{business.name} - {business.number}- {business.email}- {business.industry}</Link>
          - <button onClick={() => handleDelete(business)}>Delete</button><br />
        </li>)}

    </div>


  )
}


export default connect(null, { deleteBusiness })(Businesses);