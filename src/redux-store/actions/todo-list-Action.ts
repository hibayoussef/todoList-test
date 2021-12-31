import { AnyAction, Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import {
  CREATE_LIST,
  GET_ALL_CARDS_INSIDE_LIST,
  GET_ALL_LISTS,
} from "../../constants/userConstants";
import TodoService from "../../services/todo.service";
import { RootState } from "../store/store";

export const CreateListAction = (title: string) => {
  alert("action");
  return async (dispatch: Dispatch<any>) => {
    try {
      // fetch data from backend (new list) then i will pass it to the reducer info
      await TodoService.createList(title)
        .then((res) => {
          // pass this data to the reducer in the payload of the action inside dispatch
          dispatch({
            type: CREATE_LIST,
            payload: res.data,
          });
        })
        .catch((err) => {
          console.log("error: ", err);
        });
    } catch (err) {
      // user login fail
      console.log("error is: ", err);
    }
  };
};

export const GetAllListsAction = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      // fetch data from backend (new list) then i will pass it to the reducer info
      await TodoService.getAllLists()
        .then((res) => {
          // pass this data to the reducer in the payload of the action inside dispatch
          dispatch({
            type: GET_ALL_LISTS,
            payload: res.data.data,
          });
          console.log("res.data get all lists: ", res.data.data);
        })
        .catch((err) => {
          console.log("error: ", err);
        });
    } catch (err) {
      // user login fail
      console.log("error is: ", err);
    }
  };
};

export const getSingleList =
  (
    todoListId: number
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({
        type: GET_ALL_CARDS_INSIDE_LIST,
      });
      // fetch data from backend (new list) then i will pass it to the reducer info
      const response = TodoService.getAllCardsInsideColumn(todoListId)
        .then((res) => {
          const dataList = {
            id: res.data.id,
            title: res.data.title,
            todos: res.data.todos,
            cardId: res.data.todos.id,
            cardTitle: res.data.todos.title,
            cardContent: res.data.todos.content,
          };

          // pass this data to the reducer in the payload of the action inside dispatch
          dispatch({
            type: GET_ALL_CARDS_INSIDE_LIST,
            payload: dataList,
          });
          console.log("response: ", response);
        })
        .catch((err) => {
          console.log("error: ", err);
        });
    } catch (err) {
      // user login fail
      console.log("error is: ", err);
    }
  };
