import { FunctionComponent } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Theme, useTheme } from "@mui/material/styles";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

export interface Kaigan {
  date: string;
  rank: number;
  place: string;
  club: string;
  action: string;
  bodyParts: string[];
  errors: string[];
  detail: string;
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const errors = [
  "フック",
  "チーピン",
  "スライス",
  "プル",
  "プッシュ",
  "ダフリ",
  "トップ",
  "チョロ",
  "シャンク",
  "テンプラ",
  "空振り",
  "その他エラー",
];
const bodyParts = [
  "頭",
  "手",
  "腕",
  "肩",
  "胸",
  "背中",
  "腹",
  "腰",
  "足",
  "膝",
  "足裏",
];
const places = ["ゴルフ場", "ショートコース", "レンジ", "自宅"];
const clubs = [
  "ウッド",
  "アイアン",
  "UT",
  "ウエッジ",
  "パター",
  "クラブ問わず",
  "ショット全般",
  "パッティング全般",
];
function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export const Form: FunctionComponent = () => {
  const theme = useTheme();
  const [kaigan, setKaigan] = useState<Kaigan>({
    date: "",
    rank: 3,
    place: "",
    club: "",
    action: "",
    bodyParts: [],
    errors: [],
    detail: "",
  });

  const changeDate = (event: any) => {
    setKaigan({ ...kaigan, date: event?.target.value });
  };
  const changeRank = (event: any) => {
    setKaigan({ ...kaigan, rank: event.target.value });
  };

  const changePlace = (event: SelectChangeEvent) => {
    setKaigan({ ...kaigan, place: event.target.value });
  };

  const changeClub = (event: SelectChangeEvent) => {
    setKaigan({ ...kaigan, club: event.target.value });
  };

  const changeAction = (event: SelectChangeEvent) => {
    setKaigan({ ...kaigan, action: event.target.value });
  };

  const changeDetail = (event: any) => {
    setKaigan({ ...kaigan, rank: event.target.value });
  };
  const handleSelectErrors = (
    event: SelectChangeEvent<typeof kaigan.errors>
  ) => {
    const {
      target: { value },
    } = event;
    setKaigan({
      ...kaigan,
      errors: typeof value === "string" ? value.split(",") : value,
    });
  };
  const handleSelectBodyParts = (
    event: SelectChangeEvent<typeof kaigan.bodyParts>
  ) => {
    const {
      target: { value },
    } = event;
    setKaigan({
      ...kaigan,
      bodyParts: typeof value === "string" ? value.split(",") : value,
    });
  };

  console.log(kaigan);

  return (
    <>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">エラー現象</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={kaigan.errors}
          onChange={handleSelectErrors}
          input={<OutlinedInput />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {errors.map((error) => (
            <MenuItem key={error} value={error}>
              <Checkbox checked={kaigan.errors.indexOf(error) > -1} />
              <ListItemText primary={error} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">体の部位</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={kaigan.bodyParts}
          onChange={handleSelectBodyParts}
          input={<OutlinedInput />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {bodyParts.map((part) => (
            <MenuItem key={part} value={part}>
              <Checkbox checked={kaigan.bodyParts.indexOf(part) > -1} />
              <ListItemText primary={part} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <TextField
        id="date"
        label="開眼した日"
        type="date"
        sx={{ width: 220 }}
        defaultValue={kaigan.date}
        onChange={changeDate}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br />
      <Rating name="simple-controlled" onChange={changeRank} />
      <br />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">場所</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="場所"
          onChange={changePlace}
          value={kaigan.place}
        >
          <MenuItem value={"レンジ"}>レンジ</MenuItem>
        </Select>
      </FormControl>

      {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">エラー</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="エラー"
          onChange={changeError}
          value={kaigan.error}
          // value={action}
        >
          <MenuItem value={"シャンク"}>シャンク</MenuItem>
        </Select>
      </FormControl> */}
      {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">ボディパーツ</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="場所"
          onChange={changeBodyParts}
          value={kaigan.bodyParts}
          // value={action}
        >
          <MenuItem value={"肩"}>肩</MenuItem>
        </Select>
      </FormControl> */}

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">ボディアクション</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="action"
          onChange={changeAction}
          value={kaigan.action}
          // value={action}
        >
          <MenuItem value={"アドレス"}>アドレス</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">クラブ</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Club"
          value={kaigan.club}
          onChange={changeClub}
        >
          <MenuItem value={"ドライバー"}>ドライバー</MenuItem>
          <MenuItem value={"フェアウェイウッド"}>フェアウェイウッド</MenuItem>
          <MenuItem value={"ユーティリティ"}>ユーティリティ</MenuItem>
          <MenuItem value={"アイアン"}>アイアン</MenuItem>
          <MenuItem value={"ウェッジ"}>ウェッジ</MenuItem>
          <MenuItem value={"パター"}>パター</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="filled-multiline-flexible"
        label="Multiline"
        multiline
        maxRows={4}
        variant="filled"
        onChange={changeDetail}
      />
      <br />
      <Button variant="contained">開眼を登録する</Button>
    </>
  );
};
