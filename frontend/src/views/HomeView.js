import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import CreateRoom from "../components/home/CreateRoom";
import JoinRoom from "../components/home/JoinRoom";
import RoomList from "../components/home/RoomsList";
import { getRooms } from "../redux/actions/roomActions";

const useStyles = makeStyles((theme) => ({
  component: {
    flexGrow: 1,
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  leftComp: {
    flexGrow: 1,
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: theme.palette.background.default,
  },
}));

const HomeView = () => {
  const location = useLocation();
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRooms());
    if (location.state && location.state.message) {
      if (location.state.type === "error") {
        toast.error(location.state.message);
      }
      window.history.replaceState(null, "");
    }
  }, []);
  return (
    <Container maxWidth={false} className={classes.container}>
      <div className={[classes.leftComp]}>
        <CreateRoom />
        <JoinRoom />
      </div>
      <div className={classes.component}>
        <RoomList />
      </div>
    </Container>
  );
};
export default HomeView;
