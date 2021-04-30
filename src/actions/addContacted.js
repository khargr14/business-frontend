export const addContacted = (contacted, businessId) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/businesses/${businessId}/contacteds`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...contacted, date: new Date(contacted.date)})
      })
      .then(response => response.json())
      .then(business => {
          if (business.error) {
            alert(business.error)
          } else {
            dispatch({type: 'ADD_CONTACTED', payload: business})
          }
        }
      )
    }
  }
  