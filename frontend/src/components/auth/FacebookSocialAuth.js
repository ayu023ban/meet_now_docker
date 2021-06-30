import { Avatar, Button, makeStyles } from "@material-ui/core";
import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FacebookLoginFtn } from "../../redux/actions/userActions";
import fb_logo from "../../assets/images/fb_logo.png";

const useStyles = makeStyles((theme) => ({
  loginButton: {
    background: theme.palette.background.default,
    border: 0,
    boxShadow: `0px 0px 8px 8px ${theme.palette.background.default}`,
    borderRadius: "1rem",
    color: theme.palette.text.primary,
    "&:hover": {
      background: theme.palette.background.paper,
    },
  },
  name: {
    marginLeft: "0.5rem",
  },
}));
const FacebookSocialAuth = () => {
  const classes = useStyles();
  const fbResponse = (response) => {
    FacebookLoginFtn({
      access_token: response.accessToken,
      code: response.userID,
    });
  };
  return (
    <FacebookLogin
      textButton="LOGIN WITH FACEBOOK"
      appId="179598967332582"
      fields="name,email,picture"
      callback={fbResponse}
      render={(renderProps) => (
        <Button
          variant="contained"
          className={classes.loginButton}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <Avatar alt="google logo" src={fb_logo} />
          <span className={classes.name}>Sign in with Facebook</span>
        </Button>
      )}
    />
  );
};

export default FacebookSocialAuth;
