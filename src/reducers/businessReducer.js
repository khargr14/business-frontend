export default function businessReducer(state = {businesses: []}, action){
    
    switch (action.type){
      case 'FETCH_BUSINESSES':
         return {businesses: action.payload}
        default:
            return state
      



 }
}