export const addContacted = (contacted, businessId) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/buinesses/${businessId}/contacteds`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contacted)
      })
      .then(response => response.json())
      .then(account => {
          if (account.error) {
            alert(account.error)
          } else {
            dispatch({type: 'ADD_CONTACTED', payload: business})
          }
        }
      )
    }
  }
  