export default function businessReducer(state = {businesses: []}, action){
    
    switch (action.type){
      case 'FETCH_BUSINESSES':
         return {businesses: action.payload}
      case 'ADD_BUSINESS': {
        console.log('biz=>>>>', action.payload)
        return {...state, businesses: [...state.businesses, action.payload]};
      }
        default:
            return state
      case 'ADD_CONTACTED':
              let businesses = state.businesses.map(business => {
                if (business.id === action.payload.id) {
                  return action.payload
                } else {
                  return business
                }
              });
                  return { ...state, businesses: businesses};
                
        
      



 }
}