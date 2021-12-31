import { Grid } from "@material-ui/core";
import SingleList from "./single-list";
import { useStyle } from "../../../../styles/list-styles";
import Header from "../../header-footer/header";
import ListModal from "../modals/list-modal";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { Actions } from "../../../../redux-store/actions/actions";
import { connect } from "react-redux";
import { ListItem } from "../../../../redux-store/reducers/todo-list-reducer";

const Lists: React.FC<{
  TodoListList: any;
  GetAllListsAction: Function;
}> = ({ GetAllListsAction, TodoListList }) => {
  const classes = useStyle();
  useEffect(() => {
    // call action to fetch lists
    GetAllListsAction();
    console.log("TodoListList: ", TodoListList);
  }, []);
  return (
    <>
      <Header />

      <Grid className={classes.grid}>
        <Grid
          container
          className={classes.addButton}
          item
          direction="row-reverse"
        >
          <ListModal />
        </Grid>
        <Grid container item lg={12} direction="row" spacing={1}>
          {Array.isArray(TodoListList) &&
            TodoListList?.map((l: ListItem, index: number) => (
              <Grid key={index} item lg={3} sm={6} xs={12}>
                <SingleList
                  // todoListId={l.todoListId}
                  id={l.id}
                  title={l.title || ""}
                  todos={l.todos}
                />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </>
  );
};

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      ...Actions,
    },
    dispatch
  );
}

function mapStateToProps(state: any) {
  console.log("state: ", state.todoList?.state);
  return {
    TodoListList: state.todoList?.state || [],
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Lists);
