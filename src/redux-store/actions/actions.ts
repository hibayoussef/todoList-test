import * as UserActions from "./userAction";
import * as ToDoListActions from "./todo-list-Action";
import * as ToDoCardActions from "./todo-card-action";

export const Actions = {
  ...UserActions,
  ...ToDoListActions,
  ...ToDoCardActions,
};
