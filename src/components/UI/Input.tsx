import { useState } from "react";

type InputProps = {
  defaultValue?: string;
  type?: string;
  autocomplete?: boolean;
  error?: boolean;
  textError?: string;
  label?: string;
  name?: string;
  onChange: (value: string, name: string) => void;
};

const Input: React.FC<InputProps> = ({
  defaultValue = "",
  label = "",
  type = "text",
  autocomplete = false,
  error = false,
  textError = "",
  name="",
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue);

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValue(value);
    onChange(value, name);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        value={value}
        onChange={onChangeValue}
        type={type}
        name={name}
        autoComplete={autocomplete ? "on" : "off"}
      />
      <span>{error ? textError : ""}</span>
    </div>
  );
};

export default Input;
