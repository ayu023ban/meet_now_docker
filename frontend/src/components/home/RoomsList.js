import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useSelector } from "react-redux";
import RoomCard from "./RoomCard";

const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: "35rem",
    minHeight: "7rem",
    borderRadius: "2rem",
    maxHeight: "40rem",
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    msOverflowStyle: "none",
    scrollbarWidth: "none",
  },
  header: {
    background: theme.palette.background.paper,
    position: "sticky",
    top: 0,
    zIndex: 1,
    paddingBottom: "1rem",
  },
}));

const RoomList = () => {
  const rooms = useSelector((state) => state.roomReducer.rooms);
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="h2" align="center" className={classes.header}>
        Your Rooms
      </Typography>
      {rooms.length > 0 &&
        rooms.map((el, idx) => <RoomCard key={idx} room={el} />)}
      {rooms.length === 0 && (
        <Typography className="my-5" align="center">
          No rooms available. Please create a room to proceed
        </Typography>
      )}
    </Paper>
  );
};

export default RoomList;
