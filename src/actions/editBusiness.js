export const editBusiness = (data) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/businesses/${data.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(account => dispatch({type: 'EDIT_BUSINESS', payload: account}))
    }
  
  }
  



// export const editBusiness = (data) => {
   
//     return (dispatch) => {
//         fetch('http://localhost:3000/api/v1/businesses',{
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': "application/json"
//             },
//             method: 'PATCH',
//             body: JSON.stringify(data),
//         })

//         .then(resp => resp.json())
//         .then(business => dispatch({
//             type:'EDIT_BUSINESS',
//             payload: business
//         }))

        /*dispatch({
            type:'EDIT_BUSINESS',
            payload: data
    //     })*/
    //  }
    // }
    
      