type ButtonProps = {
  text: string;
  type?: "button" | "submit";
  disabled?: boolean;
  handleClick?: () => void;
};

const Button = ({
  text,
  type = "button",
  disabled = false,
  handleClick,
}: ButtonProps) => {
  return (
    <button type={type} onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
