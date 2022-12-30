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
          mydata.push(
            <TableRow key={document.id}>
              <TableCell>{document.id}</TableCell>
              <TableCell>{doc.date}</TableCell>
              <TableCell>{doc.places}</TableCell>
              <TableCell>{doc.rank}</TableCell>
              <TableCell>{doc.detail}</TableCell>
              <TableCell>{doc.actions}</TableCell>
              <TableCell>{doc.bodyParts}</TableCell>
              <TableCell>{doc.errors}</TableCell>
              <TableCell>{doc.clubs}</TableCell>
            </TableRow>
          );
        });
        setData(mydata);
        setMessage("Firebase data.");
      });
  }, []);
  return (
    <div>
      <h2>My Page</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
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
