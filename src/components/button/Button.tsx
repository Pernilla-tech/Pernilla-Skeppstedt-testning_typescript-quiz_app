import React from "react";
import { ButtonProps } from "../../interfaces/IButton";
import "./Button.css";
import { ButtonWrapper } from "./ButtonStyle";

const Button: React.FC<ButtonProps> = (props) => {
  const className = `${props.variant}`;
  return (
    <ButtonWrapper
      className={className}
      onClick={props.onClick}
      disabled={props.disabled}
      data-testid={props["data-testid"]}
    >
      {props.children}
    </ButtonWrapper>
  );
};

export default Button;
