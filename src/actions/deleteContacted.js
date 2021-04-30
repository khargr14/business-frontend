export const deleteContacted = (contactedId, businessId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/businesses/${businessId}/contacteds/${contactedId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(() => dispatch({type: 'DELETE_CONTACTED', payload: {contactedId, businessId}}))
    }
  }