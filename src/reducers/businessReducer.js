export default function businessReducer(state = { businesses: [] }, action) {

  switch (action.type) {
    case 'FETCH_BUSINESSES':
      return { businesses: action.payload }
    case 'ADD_BUSINESS': {
      return { ...state, businesses: [...state.businesses, action.payload] };
    }

    case "DELETE_BUSINESS": {
      const newBusinesses = state.businesses.filter(business => business.id !== action.payload)
      return { ...state, businesses: newBusinesses }
    }   

    case 'ADD_CONTACTED': {
      const businesses = state.businesses.map(business => {
        if (business.id === action.payload.id) {
          return action.payload
        } else {
          return business
        }
      });
      return { ...state, businesses: businesses };
    }

    case "DELETE_CONTACTED": {
      const {contactedId, businessId} = action.payload;
      const foundBusiness = state.businesses.find(business => business.id === businessId);
      foundBusiness.contacteds = foundBusiness.contacteds.filter(contacted => contacted.id !== contactedId);
      //const newBusinesses = state.businesses.filter(business => business.id !== action.payload)
      return { ...state, businesses: [...state.businesses] }
    }     

    default:
      return state    
  }
}