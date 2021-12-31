import {
  Button,
  Grid,
  Paper,
  TextField,
  Avatar,
  Typography,
} from "@material-ui/core";
import { useStyles } from "../../../styles/auth-styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import PersonIcon from "@material-ui/icons/Person";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "../../../redux-store/actions/actions";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router";

interface ILogin {
  id: Number;
  email: string;
  name: string;
}
const SignIn: React.FC<{ test?: string; LoginAction: Function }> = ({
  LoginAction,
  test,
}) => {
  const classes = useStyles();
  let navigate = useNavigate();
  const initialValues: ILogin = { id: 54, email: "", name: "" };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        LoginAction(values.id, values.email, values.name, () => {
          navigate("/lists");
        });
        console.log({ values, actions });
        // alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {(props) => {
        const { values, handleChange } = props;
        return (
          <Form>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              className={classes.root}
            >
              <Grid item>
                <Paper elevation={3} className={classes.paper}>
                  <Grid item>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Avatar className={classes.avatar}>
                        <PeopleAltIcon className={classes.icon} />
                      </Avatar>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item>
                        <TextField
                          className={classes.textField}
                          id="demo-helper-text-misaligned-no-helper"
                          // label="Name"
                          required
                          fullWidth
                          type="number"
                          variant="outlined"
                          placeholder="Your Id"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PersonIcon />
                              </InputAdornment>
                            ),
                          }}
                          name="id"
                          value={values.id}
                          onChange={handleChange}
                        />
                      </Grid>

                      <Grid item>
                        <TextField
                          className={classes.textField}
                          id="demo-helper-text-misaligned-no-helper"
                          // label="Name"
                          required
                          fullWidth
                          type="text"
                          variant="outlined"
                          placeholder="Your Email"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EmailIcon />
                              </InputAdornment>
                            ),
                          }}
                          value={values.email}
                          name="email"
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          className={classes.textField}
                          id="demo-helper-text-misaligned-no-helper"
                          // label="Name"
                          required
                          name="name"
                          fullWidth
                          type="text"
                          variant="outlined"
                          placeholder="Your name"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PersonIcon />
                              </InputAdornment>
                            ),
                          }}
                          value={values.name}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid container justifyContent="center" alignItems="center">
                      <Button
                        className={classes.button}
                        type="submit"
                        fullWidth
                        variant="contained"
                      >
                        Sign In
                      </Button>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid container justifyContent="center" alignItems="center">
                      <Typography
                        variant="body2"
                        className={classes.typography}
                      >
                        Don't have an account?
                        <a href="/" className={classes.linkTypo}>
                          sign up
                        </a>
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
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
  // console.log("state inside signin code: ", state);
  return {
    test: state,
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(SignIn);
