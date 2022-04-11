export default (state, action) => {
  switch(action.type) {
    case 'GET_SKOLOR':
      return {
        ...state,
        loading: false,
        skolor: action.payload
      }
    case 'DELETE_SKOLA':
      return {
        ...state,
        skolor: state.skolor.filter(skola => skola._id !== action.payload)
      }
    case 'ADD_skola':
      return {
        ...state,
        skolor: [...state.skolor, action.payload]
      }
      case 'EDIT_SKOLA':
        const updateSkola = action.payload

        const updateSkolor = state.skolor.map(skola => {
          if(skola.id === updateSkola.id) {
            return updateSkola
          }
          return skola;
        })
        return {
          skolor: updateSkolor
        }
    case 'SKOLA_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}