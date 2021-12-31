import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import React from "react";
import { Todo } from "../../../../redux-store/reducers/todo-card-reducer";
import { useStyle } from "../../../../styles/list-styles";
import CardTodo from "../card/cardTodo";
import TaskModal from "../modals/task-modal";

interface in_SingleList {
  id?: number;
  title: string;
  todos?: Todo[];
}

const SingleList: React.FC<in_SingleList> = (data: in_SingleList) => {
  console.log("data inside single list: ", data);
  const classes = useStyle();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid className={classes.root}>
      {/* 1 */}
      <Grid item>
        <Grid container>
          {/* 1-1 */}
          <Grid item>
            <Card elevation={4} className={classes.card}>
              <Grid item>
                <Grid container>
                  <CardHeader
                    classes={{
                      title: classes.headerTitle,
                    }}
                    title={data.title}
                  ></CardHeader>
                </Grid>
              </Grid>
              {/* 1-1-1 */}
              <Grid item>
                <Grid container>
                  <CardContent>
                    <Grid container direction="column" spacing={3}>
                      {/* 1-1-1-1 */}
                      {data.todos?.map((t: Todo, index: number) => (
                        <Grid item key={index}>
                          <CardTodo title={t.title || ""} />
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>

              {/* 1-1-2 */}
              <Grid item className={classes.button}>
                <TaskModal todoListId={data.id} />
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SingleList;
