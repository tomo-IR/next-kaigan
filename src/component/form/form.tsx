import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { Input, Textarea } from "@nextui-org/react";
import { Dropdown } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
export const Form: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //各フォームの値をステートで管理し、onchangeのたびにステートを更新する感じ。

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="App">
      <Input width="186px" label="Date" type="date" />
      <br />
      {/* <Dropdown>
        <Dropdown.Button flat>Trigger</Dropdown.Button>
        <Dropdown.Menu aria-label="Dynamic Actions" items={menuItems}>
          {(item) => <Dropdown.Item key={item.key}>{item.name}</Dropdown.Item>}
        </Dropdown.Menu>
      </Dropdown> */}
      <Textarea
      // label="Write your thoughts"
      // placeholder="Enter your amazing ideas."
      />
      <br></br>
      <Button color="gradient" auto>
        Gradient
      </Button>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" {...register("email", { required: true })} />
          {errors.email && <div>入力が必須の項目です</div>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" {...register("password")} type="password" />
        </div>
        <button type="submit">ログイン</button>
      </form> */}
    </div>
  );
};
