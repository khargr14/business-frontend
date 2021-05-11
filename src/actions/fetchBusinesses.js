

export function fetchBusinesses() {
   return (dispatch) => {
     console.log("c")
    fetch('http://localhost:3000/api/v1/businesses')
    .then(resp => resp.json())
    .then(businesses => {  
      console.log("d")
      dispatch ({
      
      type:'FETCH_BUSINESSES',
        payload: businesses
    })})
  }
}


 