import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  TextField,
} from "@material-ui/core";
import { ArrowForward, Assignment } from "@material-ui/icons";
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { getUrlFromCode } from "../../helper/helperFunctions";

const RoomCard = ({ room }) => {
  const history = useHistory();
  const url = getUrlFromCode(room.id);
  return (
    <Card style={{ borderTop: "1px solid #ccc" }}>
      <CardHeader
        title={room.room_name}
        action={
          <IconButton
            onClick={() => {
              history.push(`/room/${room.id}/`);
            }}
          >
            <ArrowForward />
          </IconButton>
        }
      />
      <CardContent style={{ display: "flex" }}>
        <TextField
          variant="outlined"
          defaultValue={url}
          InputProps={{
            readOnly: true,
          }}
          style={{ flexGrow: 2 }}
        />
        <CopyToClipboard
          text={url}
          onCopy={() => {
            toast.success("copied to clipboard");
          }}
        >
          <IconButton style={{ float: "right" }}>
            <Assignment />
          </IconButton>
        </CopyToClipboard>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
