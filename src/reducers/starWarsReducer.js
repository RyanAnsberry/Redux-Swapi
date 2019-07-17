import { FETCHING, SUCCESS, FAILURE} from "../actions";
const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  isFetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true
      }
    case SUCCESS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        isFetching: false
      } 
    case FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default:
      return state;
  }
};
