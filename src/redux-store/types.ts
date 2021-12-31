export const GET_LISTS = "GET_LISTS";
export const ADD_LIST = "ADD_LIST";
export const DELETE_LIST = "DELETE_LIST";
export const UPDATE_LIST = "UPDATE_LIST";

export const GET_LIST_BY_ID = "GET_LIST_BY_ID";
export const SET_LISTID_TO_DELETE = "SET_LISTID_TO_DELETE";
export const SET_LIST_TO_EDIT = "SET_LIST_TO_EDIT";
export const SET_SELECTED_LIST = "SET_SELECTED_LIST";

// -----

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

export const SET_TASK_TO_DELETE = "SET_TASK_TO_DELETE";
export const UNSET_TASK_TO_DELETE = "UNSET_TASK_TO_DELETE";
export const SET_TASK_TO_EDIT = "SET_TASK_TO_EDIT";
export const UNSET_TASK_TO_EDIT = "UNSET_TASK_TO_EDIT";

// ----
export interface Task {
  title: string;
  id: string;
  content: string;
}

export interface List {
  title: string;
  id: string;
  task: Task[];
}

export interface Lists {
  [id: string]: List;
}

// Actions
interface AddListAction {
  type: typeof ADD_LIST;
  payload: List;
}

interface GetListsAction {
  type: typeof GET_LISTS;
}

interface GetListByIdAction {
  type: typeof GET_LIST_BY_ID;
  payload: string;
}

interface SetListIdToDeleteAction {
  type: typeof SET_LISTID_TO_DELETE;
  payload: string;
}

interface SetListToEditAction {
  type: typeof SET_LIST_TO_EDIT;
  payload: string;
}

interface DeleteListAction {
  type: typeof DELETE_LIST;
  payload: string;
}

interface UpdateListAction {
  type: typeof UPDATE_LIST;
  payload: {
    id: string;
    title: string;
  };
}

interface SetSelectedListAction {
  type: typeof SET_SELECTED_LIST;
  payload: string;
}

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: {
    task: Task;
    list: List;
  };
}

interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: {
    task: Task;
    list: List;
  };
}

interface SetTaskToDeleteAction {
  type: typeof SET_TASK_TO_DELETE;
  payload: {
    task: Task;
    list: List;
  };
}

interface UnsetTaskToDeleteAction {
  type: typeof UPDATE_TASK;
  payload: {
    taskId: string;
    taskTitle: string;
    taskContent: string;
    list: List;
  };
}

interface SetTaskToEditAction {
  type: typeof SET_TASK_TO_EDIT;
  payload: {
    task: Task;
    list: List;
  };
}

interface UnsetTaskToEditAction {
  type: typeof UNSET_TASK_TO_EDIT;
}

export type ListsAction =
  | UnsetTaskToEditAction
  | SetTaskToEditAction
  | UnsetTaskToDeleteAction
  | SetTaskToDeleteAction
  | DeleteTaskAction
  | AddTaskAction
  | SetSelectedListAction
  | AddListAction
  | UpdateListAction
  | GetListByIdAction
  | DeleteListAction
  | SetListIdToDeleteAction
  | GetListsAction
  | SetListToEditAction;

// ----
export interface ListState {
  lists: Lists;
  listIdToDelete: string;
  listToEdit: List | null;
  listById: List | null;
  selectedList: List | null;
  taskToDelete: {
    task: Task;
    list: List;
  } | null;
  taskToEdit: {
    task: Task;
    list: List;
  } | null;
}
