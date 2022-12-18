import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
export const Form: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //各フォームの値をステートで管理し、onchangeのたびにステートを更新する感じ。

  const onSubmit = (data: any) => console.log(data);

  return <div className="App"></div>;
};
