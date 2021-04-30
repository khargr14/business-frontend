

export function fetchBusinesses() {
   return (dispatch) => {
    fetch('http://localhost:3000/api/v1/businesses')
    .then(resp => resp.json())
    .then(businesses => dispatch({
        type:'FETCH_BUSINESSES',
        payload: businesses
    }))
  }
}

 