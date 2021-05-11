export const addBusiness = (data) => {
   
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/businesses',{
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            },
            method: 'POST',
            body: JSON.stringify(data),
        })

        .then(resp => resp.json())
        .then(business => dispatch({ // now that data has been stored in the db, we need to update it in the browser as well
            type:'ADD_BUSINESS',
            payload: business // this is the business data ( name, email, industry, ...) that has been saved in the database
        }))
     }
    }