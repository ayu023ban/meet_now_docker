import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewRoom } from "../../redux/actions/roomActions";

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

function CreateRoom() {
  const classes = useStyles();
  const [roomName, setRoomName] = useState("");
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  return (
    <Paper
      elevation={3}
      style={{
        minWidth: "35rem",
        minHeight: "7rem",
        borderRadius: "2rem",
        padding: "1rem",
      }}
    >
      <Typography variant="h2" align="center">
        Create New Room
      </Typography>
      <div className={classes.row}>
        <TextField
          variant="outlined"
          label="Room Name"
          value={roomName}
          error={isError}
          required
          onChange={(value) => {
            const newName = value.target.value;
            if (newName.length < 100) {
              setRoomName(newName);
            }
            if (isError) setIsError(false);
          }}
          style={{ flexGrow: 1 }}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon />}
          onClick={() => {
            if (roomName.length === 0) {
              setIsError(true);
            } else {
              dispatch(
                createNewRoom({
                  room_name: roomName,
                })
              );
              setRoomName("");
            }
          }}
        >
          Create
        </Button>
      </div>
    </Paper>
  );
}

export default CreateRoom;
