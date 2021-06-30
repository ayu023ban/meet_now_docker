import { Button, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/styles";
import { JOIN_ROOM_TYPE, DEMO_PATH, DEMO_CODE } from "../../constants";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    float: "right",
  },
  row: {
    display: "flex",
    marginTop: "1rem",
  },
}));

const checkUrl = (url) => {
  const result = {
    type: JOIN_ROOM_TYPE.URL,
    is_correct: true,
    error_message: "",
  };
  try {
    const new_url = new URL(url);
    if (new_url.hostname !== window.location.hostname) {
      result.is_correct = false;
      result.error_message = `host of url should be ${window.location.hostname}`;
      return result;
    }
    const path = new_url.pathname;
    const demo_url = new URL(DEMO_PATH);
    if (path.length < demo_url.pathname.length) {
      result.is_correct = false;
      result.error_message = "url path too short";
      return result;
    } else if (path.length > demo_url.pathname.length) {
      result.is_correct = false;
      result.error_message = "url path too long";
      return result;
    }
  } catch {
    result.type = JOIN_ROOM_TYPE.CODE;
    if (url.length < DEMO_CODE.length) {
      result.is_correct = false;
      result.error_message = "code is too short";
      return result;
    }
    if (url.length > DEMO_CODE.length) {
      result.is_correct = false;
      result.error_message = "code is too long";
      return result;
    }
  }
  return result;
};

const JoinRoom = () => {
  const classes = useStyles();
  const [roomName, setRoomName] = useState("");
  const [isError, setIsError] = useState("");
  const history = useHistory();
  return (
    <Paper
      elevation={3}
      style={{
        minWidth: "35rem",
        minHeight: "7rem",
        borderRadius: "2rem",
        padding: "1rem",
        marginTop: "2rem",
      }}
    >
      <Typography variant="h2" align="center">
        Join Room
      </Typography>
      <div className={classes.row}>
        <TextField
          variant="outlined"
          label="Enter code or link of the room"
          value={roomName}
          error={Boolean(isError)}
          helperText={isError}
          onChange={(value) => {
            const newName = value.target.value;
            setRoomName(newName);
            if (isError) setIsError("");
          }}
          style={{ flexGrow: 1 }}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon />}
          onClick={() => {
            const result = checkUrl(roomName);
            if (!result.is_correct) {
              setIsError(result.error_message);
            } else {
              let path = "";
              if (result.type === JOIN_ROOM_TYPE.URL) {
                const url = new URL(roomName);
                path = url.pathname;
              } else {
                path = `room/${roomName}`;
              }
              history.push(path);
            }
          }}
        >
          Join
        </Button>
      </div>
    </Paper>
  );
};

export default JoinRoom;
