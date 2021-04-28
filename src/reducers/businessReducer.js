export default function businessReducer(state = {business: []}, action){
    
    switch (action.type){
      case 'FETCH_BUSINESSES':
         return {businesses: action.payload}
        default:
            return state
      



 }
}