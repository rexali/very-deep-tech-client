// reducer.js
import { ActionTypes } from '../actions/app-actions';

const reducer = (state: any, action: any) => {

  switch (action.type) {

    case ActionTypes.GET_NEWS:
      return {
        ...state,
        news: action.payload
      };

    case ActionTypes.GET_WAQFS:
      return {
        ...state,
        waqfs: action.payload
      };

    case ActionTypes.GET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload
      };

    case ActionTypes.GET_MESSAGES:
      return {
        ...state,
        messages: action.payload
      };

    case ActionTypes.POST_NEWS:
      return {
        ...state,
        result: action.payload
      };

    default:
      return state;
  }

};

export default reducer;
