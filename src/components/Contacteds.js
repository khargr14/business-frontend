import React from 'react'


//:name, :number, :email, :date, :message

const Contacteds = (props) => {

    return(
        <div>
        {props.contacteds && props.contacteds.map(contacted => 
     <li key={contacted.id}>
      <h4> {contacted.name}</h4> - {contacted.number}- {contacted.email}- {contacted.date}- {contacted.message}
     </li> )}

   </div>
    )


}

export default Contacteds