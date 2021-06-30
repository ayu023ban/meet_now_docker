import React from "react";
import FacebookSocialAuth from "../components/auth/FacebookSocialAuth";
import GoogleSocialAuth from "../components/auth/GoogleSocialAuth";
import { Paper, withStyles, Grid } from "@material-ui/core";

const styles = (theme) => {
  return {
    margin: {
      margin: theme.spacing(2),
    },
    padding: {
      padding: theme.spacing(1),
    },
    paper: {
      width: "20rem",
      height: "40rem",
    },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      backgroundColor: theme.palette.background.default,
    },
  };
};

class LoginTab extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Paper
          className={[classes.padding, classes.paper, classes.margin]}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          elevation={3}
        >
          <Grid container justify="center" style={{ marginBottom: "10px" }}>
            <h2>Sign In</h2>
          </Grid>
          <Grid container justify="center" style={{ marginTop: "100px" }}>
            <GoogleSocialAuth />
            <FacebookSocialAuth />
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(LoginTab);
