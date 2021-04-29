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
        .then(business => dispatch({
            type:'ADD_BUSINESS',
            payload: business
        }))
     }
    }