import { useState } from "react";
import Input from "../components/UI/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  return (
    <div>
      <h2>Login</h2>

      <form>
        <Input type="email" onChange={onChangeEmail} autocomplete={false} />
        <Input
          type="password"
          onChange={onChangePassword}
          autocomplete={false}
        />
      </form>

      <a href="/registration">Registration</a>
    </div>
  );
};

export default Login;
