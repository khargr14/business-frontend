
//this is the action creator -- notes part 4 35:00
export function fetchBusinesses() {
   
    fetch('http://localhost:3000/api/v1/businesses')
    .then(resp => resp.json())
    .then(data => console.log(data))

}
