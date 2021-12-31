import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import SubtitlesIcon from "@material-ui/icons/Subtitles";
import useStyle from "../../../../styles/task-modal-style";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "../../../../redux-store/actions/actions";

const ListModal: React.FC<{ todolist?: Object; CreateListAction: Function }> =
  ({ CreateListAction, todolist }) => {
    console.log("todolist: ", todolist);
    const classes = useStyle();
    const [open, setOpen] = React.useState(false);
    // Declare a new state variable, which we'll call "title"
    const [title, setTitle] = React.useState("");

    const handleClickOpen = () => {
      setOpen(true);
    };

    // const handleClose = () => {
    //   setOpen(false);
    // };

    const handleSubmit = (e: { preventDefault: () => void }) => {
      alert(1);
      e.preventDefault();
      setOpen(false);
      alert(2);
      CreateListAction(title);
      alert(3);
      console.log("title inside list modal: ", title);
    };

    return (
      <>
        <Button
          onClick={handleClickOpen}
          className={classes.createTaskbutton}
          startIcon={<AddIcon style={{ fontSize: 17 }} />}
        >
          Create new List
        </Button>

        <Dialog
          fullWidth
          maxWidth="sm"
          open={open}
          // onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <Grid container direction="column" className={classes.root}>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <DialogTitle id="form-dialog-title">
                    <Grid container direction="column">
                      <Grid item>
                        <Grid container direction="row">
                          <Grid item>
                            <SubtitlesIcon className={classes.icon} />
                          </Grid>

                          <Grid item>
                            <Typography className={classes.text}>
                              List Title
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <TextField
                          fullWidth
                          className={classes.titleField}
                          InputProps={{
                            classes: {
                              input: classes.titleField,
                            },
                          }}
                          id="standard-basic"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                  </DialogTitle>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction="row-reverse"
              // justifyContent="center"
              // alignItems="flex-end"
            >
              <DialogActions>
                <Button
                  variant="contained"
                  className={classes.button}
                  // onClick={handleClose}
                  onClick={handleSubmit}
                >
                  Create List
                </Button>
              </DialogActions>
            </Grid>
          </Grid>
        </Dialog>
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
  return {
    todolist: state,
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(ListModal);
