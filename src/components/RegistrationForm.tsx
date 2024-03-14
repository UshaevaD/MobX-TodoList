import { useStore } from "../store/StoreProvider";
import { AuthorizationAPI } from "../api/AuthorizationAPI";
import { useState } from "react";
import { IRegisterUser } from "../types";

export const RegistrationForm = () => {
  const [formData, setFormData] = useState<IRegisterUser>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await AuthorizationAPI.registration(formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input name="name" onChange={handleChange} />
      </div>

      <div>
        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} />
      </div>

      <div>
        <label>Passowrd</label>
        <input type="password" name="password" onChange={handleChange} />
      </div>

      {/* <div>
        <label>Repeat passowrd</label>
        <input type="passowrd" name={passowrdRepeat} onChange={handleChange} />
      </div> */}

      <button type="submit">Submit</button>
    </form>
  );
};
