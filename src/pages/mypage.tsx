import { useState, useEffect } from "react";
import Link from "next/link";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "../../src/hooks/firebase/fire";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDeleteKaigan } from "../hooks/kaigan/useDeleteKaigan";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import router from "next/router";

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// auth.signOut();

export default function MyPage() {
  const mydata: any = [];
  const [data, setData] = useState(mydata);
  const [message, setMessage] = useState("wait...");

  const handleDeleteKaigan = () => {
    // useDeleteKaigan();
  };

  //   useEffect(() => {
  //     auth
  //       .signInWithPopup(provider)
  //       .then((result: any) => {
  //         setMessage("logined: " + result.user.displayName);
  //       })
  //       .catch((error) => {
  //         setMessage("not logined.");
  //       });
  //   }, []);

  useEffect(() => {
    // if (auth.currentUser != null) {
    db.collection("kaigan")
      .get()
      .then((snapshot: any) => {
        snapshot.forEach((document: any) => {
          const doc = document.data();
          console.log(doc);
          const places: any = [];
          const actions: any = [];
          const bodyParts: any = [];
          const errors: any = [];
          const clubs: any = [];
          const placesArray = doc.places;
          placesArray?.forEach((place: any, index: number) => {
            places.push(<p key={index}>{place}</p>);
          });

          const actionsArray = doc.actions;
          actionsArray?.map((action: string, index: number) => {
            actions.push(<p key={index}>{action}</p>);
          });
          const bodyPartsArray = doc.bodyParts;
          bodyPartsArray?.forEach((bodyPart: string, index: number) => {
            bodyParts.push(<p key={index}>{bodyPart}</p>);
          });
          const errorsArray = doc.errors;
          errorsArray?.forEach((error: string, index: number) => {
            errors.push(<p key={index}>{error}</p>);
          });
          const clubsArray = doc.clubs;
          clubsArray?.forEach((club: string, index: number) => {
            clubs.push(<p key={index}>{club}</p>);
          });
          mydata.push(
            <TableRow key={document.id}>
              <TableCell>{doc.date}</TableCell>
              <TableCell>{places}</TableCell>

              <TableCell>{doc.rank}</TableCell>
              <TableCell>{doc.detail}</TableCell>
              <TableCell>{actions}</TableCell>
              <TableCell>{bodyParts}</TableCell>
              <TableCell>{errors}</TableCell>
              <TableCell>{clubs}</TableCell>
              <TableCell>
                <EditIcon />
              </TableCell>
              <TableCell>
                <Tooltip title="Delete" onClick={handleClickOpen}>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          );
        });
        setData(mydata);
        setMessage("");
      });
    // } else {
    //   router.push("/");
    //   mydata.push(
    //     <TableRow>
    //       <TableCell key="1">can't get data</TableCell>
    //     </TableRow>
    //   );
    // }
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h2>My Page</h2>
      <h5 className="mb-4">{message}</h5>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>??????</TableCell>
              <TableCell>??????????????????</TableCell>
              <TableCell>?????????</TableCell>
              <TableCell>????????????</TableCell>
              <TableCell>???????????????</TableCell>
              <TableCell>????????????</TableCell>
              <TableCell>???????????????</TableCell>
              <TableCell>?????????</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{data}</TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {/* {"Use Google's location service?"} */}
          {"????????????????????????????????????"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>???????????????</Button>
          <Button onClick={handleDeleteKaigan}>????????????</Button>
          // TODO ????????????
        </DialogActions>
      </Dialog>
    </div>
  );
}
