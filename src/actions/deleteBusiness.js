export const deleteBusiness = (businessId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/businesses/${businessId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(() => {
        dispatch({type: 'DELETE_BUSINESS', payload: businessId})
      }).catch(err => {
          console.log('an error occured==>>', err)
      });
    }
  }