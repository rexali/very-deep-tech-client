import { ActionTypes } from '../actions/waqf-actions';

const reducer = (state:any, action:any) => {

  switch (action.type) {

    case ActionTypes.GET_WAQF:
      return { 
        ...state, 
        waqfs: action.payload 
      };

    case ActionTypes.POST_WAQF:
      return { 
        ...state, 
        result: action.payload 
      };

    default:
      return state;
  }

};

export default reducer;
