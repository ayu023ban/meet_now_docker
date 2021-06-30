import { Avatar, Button, makeStyles } from "@material-ui/core";
import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { GoogleLoginFtn } from "../../redux/actions/userActions";
import google_logo from "../../assets/images/google_logo.png";

const useStyles = makeStyles((theme) => ({
  loginButton: {
    background: theme.palette.background.default,
    border: 0,
    boxShadow: `0px 0px 8px 8px ${theme.palette.background.default}`,
    borderRadius: "1rem",
    color: theme.palette.text.primary,
    marginBottom: "3rem",
    "&:hover": {
      background: theme.palette.background.paper,
    },
  },
  name: {
    marginLeft: "0.5rem",
  },
}));

const GoogleSocialAuth = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const responseGoogle = (response) => {
    const data = {
      access_token: response.accessToken,
      code: response.googleId,
    };
    dispatch(GoogleLoginFtn(data));
  };
  return (
    <GoogleLogin
      clientId="302773532147-p6kaebp90a971e671t0c7146e97qrk07.apps.googleusercontent.com"
      buttonText="LOGIN WITH GOOGLE"
      cookiePolicy={"single_host_origin"}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      render={(renderProps) => (
        <Button
          variant="contained"
          className={classes.loginButton}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <Avatar alt="google logo" src={google_logo} />
          <span className={classes.name}>Sign in with Google</span>
        </Button>
      )}
    />
  );
};

export default GoogleSocialAuth;
