import { IconButton, makeStyles } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import MicOffIcon from "@material-ui/icons/MicOff";
import Avatar from "@material-ui/core/Avatar";

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
}));

const Video = React.forwardRef(
  ({ peer, muted, size, rows, isUserVideo, user }, ref) => {
    const localRef = useRef(null);
    const currentRef = ref || localRef;
    const classes = useStyles({ size, rows });
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
          />
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
