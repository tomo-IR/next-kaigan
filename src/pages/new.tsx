import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { KaiganForm } from "@/src/component/form/kaiganForm";
import { styled } from "@mui/system";
import { css } from "@mui/styled-engine";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";

export default function New() {
  return (
    <div className={styles.container}>
      <KaiganForm
        date={""}
        rank={0}
        places={[]}
        clubs={[]}
        actions={[]}
        bodyParts={[]}
        errors={[]}
        detail={""}
      />
    </div>
  );
}
