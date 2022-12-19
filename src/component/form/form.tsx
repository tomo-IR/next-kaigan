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

export interface Kaigan {
  date: string;
  rank: number;
  place: string;
  club: string;
  action: string;
  bodyParts: string;
  error: string;
  detail: string;
}
export const Form: FunctionComponent = () => {
  const [kaigan, setKaigan] = useState<Kaigan>({
    date: "",
    rank: 3,
    place: "",
    club: "",
    action: "",
    bodyParts: "",
    error: "",
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

  const changeBodyParts = (event: SelectChangeEvent) => {
    setKaigan({ ...kaigan, bodyParts: event.target.value });
  };

  const changeError = (event: SelectChangeEvent) => {
    setKaigan({ ...kaigan, error: event.target.value });
  };

  const changeDetail = (event: any) => {
    setKaigan({ ...kaigan, rank: event.target.value });
  };
  console.log(kaigan);

  return (
    <>
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

      <FormControl fullWidth>
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
      </FormControl>
      <FormControl fullWidth>
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
      </FormControl>

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
