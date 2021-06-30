import { Grid, IconButton, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { red } from "@material-ui/core/colors";
import MicIcon from "@material-ui/icons/Mic";
import CallEndIcon from "@material-ui/icons/CallEnd";
import MicOffIcon from "@material-ui/icons/MicOff";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import VideocamOffOutlinedIcon from "@material-ui/icons/VideocamOffOutlined";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import FlipCameraIosOutlinedIcon from "@material-ui/icons/FlipCameraIosOutlined";
import { useDispatch, useSelector } from "react-redux";
import { toggleAudio, toggleVideo } from "../../redux/actions/roomActions";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "3rem",
    flexGrow: 0,
    background: theme.palette.background.default,
  },
  blue: { background: "blue" },
  orange: {
    color: red[500],
  },
  right: { marginRight: "1rem" },
}));

const Controls = ({ switchc, toggleChat }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAudioOn = useSelector((state) => state.roomReducer.userVideo.audioOn);
  const isVideoOn = useSelector((state) => state.roomReducer.userVideo.videoOn);
  const history = useHistory();
  const leftRoom = () => {
    history.replace("/");
  };
  return (
    <Paper elevation={3} className={classes.container}>
      <Grid
        justify="space-between"
        container
        alignItems="center"
        style={{ height: "100%" }}
      >
        <div>
          <IconButton
            color="inherit"
            onClick={() => {
              switchc();
            }}
          >
            <FlipCameraIosOutlinedIcon />
          </IconButton>
        </div>
        <div>
          <IconButton
            color="inherit"
            onClick={() => {
              dispatch(toggleAudio());
            }}
          >
            {isAudioOn ? <MicIcon /> : <MicOffIcon />}
          </IconButton>
          <IconButton color="inherit" onClick={leftRoom}>
            <CallEndIcon className={classes.orange} />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => {
              dispatch(toggleVideo());
            }}
          >
            {isVideoOn ? <VideocamOutlinedIcon /> : <VideocamOffOutlinedIcon />}
          </IconButton>
        </div>
        <div className={classes.right}>
          <IconButton onClick={toggleChat}>
            <MessageOutlinedIcon />
          </IconButton>
        </div>
      </Grid>
    </Paper>
  );
};

export default Controls;
