import { IconButton, makeStyles, Tooltip } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import MicOffIcon from "@material-ui/icons/MicOff";
import Avatar from "@material-ui/core/Avatar";
import Fade from "@material-ui/core/Fade";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import WebSocketInstance from "../../helper/WebsocketService";
import { useSelector } from "react-redux";
import BlockIcon from "@material-ui/icons/Block";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  responsive: ({ size, rows }) => ({
    float: "left",
    width: `${100 / size}%`,
    height: `${100 / rows}%`,
    display: "flex",
    alignItems: "center",
  }),
  videoTop: {
    width: "95%",
    paddingTop: "min(calc(100vh - 9rem), 56.25%)",
    position: "relative",
    overflow: "hidden",
    background: theme.palette.background.paper,
    margin: "auto",
    borderRadius: "1rem",
  },
  micOff: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  videoOff: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: "min(50%, 10rem)",
    height: "min(50%, 10rem)",
    fontSize: "3rem",
  },
  hoverDiv: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  },
  remove: {
    color: "#eee8d5",
  },
}));

const Video = React.forwardRef(
  ({ peer, muted, size, rows, isUserVideo, user }, ref) => {
    const localRef = useRef(null);
    const currentRef = ref || localRef;
    const classes = useStyles({ size, rows });
    const [open, setOpen] = React.useState(false);
    const isCreator = useSelector((state) => state.roomReducer.isUserCreator);
    const invitedUsers = useSelector(
      (state) => state.roomReducer.currentRoom.invited_users
    );

    let initials =
      (user.first_name ? user.first_name[0].toUpperCase() : "") +
      (user.last_name ? user.last_name[0].toUpperCase() : "");
    useEffect(() => {
      if (peer) {
        peer.on("stream", (stream) => {
          currentRef.current.srcObject = stream;
        });
      }
    }, []);
    const removeUser = () => {
      WebSocketInstance.sendMessage("user kick", { userID: user.id });
    };
    const blockUser = () => {
      if (invitedUsers.some((el) => el.id === user.id)) {
        toast.error("user is invited. first remove the invitation");
      } else {
        WebSocketInstance.sendMessage("user block", { userID: user.id });
      }
    };
    return (
      <div className={classes.responsive}>
        <div className={classes.videoTop}>
          <video
            style={{
              objectFit: "contain",
              transform: isUserVideo ? "scaleX(-1)" : 1,
              position: "absolute",
              top: "0",
              left: "0",
              display: user.videoOn ? "block" : "none",
            }}
            playsInline
            width="100%"
            height="100%"
            autoPlay
            muted={muted}
            ref={currentRef}
            onClick={() => {}}
            onMouseEnter={() => {
              setOpen(true);
            }}
          />
          {isCreator && !isUserVideo && open && (
            <Fade in={open}>
              <div
                className={classes.hoverDiv}
                onMouseLeave={() => {
                  setOpen(false);
                }}
              >
                <div
                  style={{
                    opacity: 0.6,
                    background: "black",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Tooltip title="remove user">
                    <IconButton className={classes.remove} onClick={removeUser}>
                      <RemoveCircleOutlineIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Block user">
                    <IconButton className={classes.remove} onClick={blockUser}>
                      <BlockIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
            </Fade>
          )}
          {!user.audioOn && (
            <IconButton className={classes.micOff}>
              <MicOffIcon />
            </IconButton>
          )}
          {!user.videoOn && (
            <div className={classes.videoOff}>
              <Avatar className={classes.avatar}>{initials}</Avatar>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default Video;
