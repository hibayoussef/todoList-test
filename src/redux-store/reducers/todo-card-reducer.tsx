import { AnyAction } from "redux";
import { CREATE_CARD, GET_SINGLE_CARD } from "../../constants/userConstants";

export interface Todo {
  title?: string;
  todoListId?: string;
  content?: string;
}

const initialState: Todo = {
  title: "",
  todoListId: undefined,
  content: "",
};

export default function todoCardReducer(
  state = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case CREATE_CARD:
      return {
        // modified state
        initialState: action.payload,
      };
    case GET_SINGLE_CARD:
      return {
        cardData: action.payload,
      };
    default:
      return { state };
  }
}
