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

const db = firebase.firestore();

export default function MyPage() {
  const mydata: any = [];
  const [data, setData] = useState(mydata);
  const [message, setMessage] = useState("wait...");

  useEffect(() => {
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
            </TableRow>
          );
        });
        setData(mydata);
        setMessage("");
      });
  }, []);
  return (
    <div>
      <h2>My Page</h2>
      <h5 className="mb-4">{message}</h5>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>日付</TableCell>
              <TableCell>開眼した場所</TableCell>
              <TableCell>開眼度</TableCell>
              <TableCell>開眼詳細</TableCell>
              <TableCell>アクション</TableCell>
              <TableCell>体の部位</TableCell>
              <TableCell>エラー現象</TableCell>
              <TableCell>クラブ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{data}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
