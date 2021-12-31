import { AnyAction } from "redux";
import {
  CREATE_LIST,
  GET_ALL_CARDS_INSIDE_LIST,
  GET_ALL_LISTS,
} from "../../constants/userConstants";
import { Todo } from "../reducers/todo-card-reducer";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";

export interface ListItem {
  title?: string;
  id?: number;
  todos?: Todo[];
}

const initialState: ListItem[] = [];

export default function todoListReducer(
  state = { List: initialState },
  action: AnyAction
) {
  switch (action.type) {
    case CREATE_LIST:
      return {
        // modified state
        List: [action.payload, ...(state.List || [])],
      };
    case GET_ALL_LISTS:
      return {
        state: action.payload,
      };
    case GET_ALL_CARDS_INSIDE_LIST:
      return {
        listData: action.payload,
      };
    default:
      return { state };
  }
}
