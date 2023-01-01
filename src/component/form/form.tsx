import { FunctionComponent } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Theme, useTheme } from "@mui/material/styles";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRegistKaigan } from "@/src/hooks/kaigan/useRegistKaigan";
import { Kaigan } from "@/src/interface/kaigan";

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

const actions = [
  "アドレス",
  "バックスイング",
  "トップ",
  "ダウンスイング",
  "インパクト",
  "フォロー",
  "フィニッシュ",
  "切り返し",
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
  // const theme = useTheme();
  const [kaigan, setKaigan] = useState<Kaigan>({
    date: "",
    rank: 3,
    places: [],
    clubs: [],
    actions: [],
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

  const changeDetail = (event: any) => {
    setKaigan({ ...kaigan, detail: event.target.value });
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
  const handleSelectPlaces = (
    event: SelectChangeEvent<typeof kaigan.places>
  ) => {
    const {
      target: { value },
    } = event;
    setKaigan({
      ...kaigan,
      places: typeof value === "string" ? value.split(",") : value,
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
  const handleSelectActions = (
    event: SelectChangeEvent<typeof kaigan.actions>
  ) => {
    const {
      target: { value },
    } = event;
    setKaigan({
      ...kaigan,
      actions: typeof value === "string" ? value.split(",") : value,
    });
  };

  const handleSelectClubs = (event: SelectChangeEvent<typeof kaigan.clubs>) => {
    const {
      target: { value },
    } = event;
    setKaigan({
      ...kaigan,
      clubs: typeof value === "string" ? value.split(",") : value,
    });
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleRegistKaigan = () => {
    useRegistKaigan(kaigan);
    // TODO 成功したら、snacbarを表示
  };

  console.log(kaigan);

  return (
    <>
      <section>
        <h3>開眼したこと</h3>
        <p>いつ開眼しましたか？</p>
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
        <label htmlFor="">開眼度はいくつですか？</label>
        <br />
        <Rating name="simple-controlled" onChange={changeRank} />
        <br />
        <p>どこで開眼しましたか？</p>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">場所</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={kaigan.places}
            onChange={handleSelectPlaces}
            input={<OutlinedInput />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {places.map((error) => (
              <MenuItem key={error} value={error}>
                <Checkbox checked={kaigan.places.indexOf(error) > -1} />
                <ListItemText primary={error} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <p>開眼した内容について詳しく記入してください。</p>
        <TextField
          id="filled-multiline-flexible"
          label="具体的な開眼内容"
          multiline
          maxRows={6}
          variant="filled"
          onChange={changeDetail}
          sx={{ width: 320, height: 100 }}
        />
        <br />
      </section>
      <section>
        <p>どのような問題が起きていましたか？</p>
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
        <p>どのクラブで問題が起きていましたか？</p>

        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">クラブ</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={kaigan.clubs}
            onChange={handleSelectClubs}
            input={<OutlinedInput />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {clubs.map((club) => (
              <MenuItem key={club} value={club}>
                <Checkbox checked={kaigan.clubs.indexOf(club) > -1} />
                <ListItemText primary={club} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
      </section>
      <section>
        <h3>原因</h3>
      </section>
      <p>問題の原因となっていた身体の部位はどこですか？</p>
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

      <p>どのアクションで意識することで改善されましたか？</p>

      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">アクション</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={kaigan.actions}
          onChange={handleSelectActions}
          input={<OutlinedInput />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {actions.map((error) => (
            <MenuItem key={error} value={error}>
              <Checkbox checked={kaigan.actions.indexOf(error) > -1} />
              <ListItemText primary={error} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {/* {"Use Google's location service?"} */}
          {"下記の内容で登録しますよろしいですか？"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {kaigan.date}
            <br />
            {kaigan.rank}
            <br />
            {JSON.stringify(kaigan)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleRegistKaigan} autoFocus>
            登録する
          </Button>
        </DialogActions>
      </Dialog>

      <Button variant="outlined" onClick={handleClickOpen}>
        開眼を登録する
      </Button>
    </>
  );
};
