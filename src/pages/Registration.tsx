import React, { useState } from "react";
import { IRegisterUser } from "../types/common.type";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { AuthorizationAPI } from "../api/AuthorizationAPI";

const Registartion = () => {
  const [user, setUser] = useState<IRegisterUser>({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (value: string, name: string) => {
    setUser({ ...user, [name]: value });
  };

  const onChangeConfirmPassword = (value: string) => {

  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await AuthorizationAPI.registration(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Registartion</h2>{" "}
      <form onSubmit={handleSubmit}>
        <Input type="email" onChange={handleChange} autocomplete={false} />
        <Input
          type="password"
          onChange={handleChange}
          autocomplete={false}
        />
        <Input
          type="password"
          onChange={onChangeConfirmPassword}
          autocomplete={false}
        />

        <Button text="Registration" type="submit"/>
      </form>
    </div>
  );
};

export default Registartion;
