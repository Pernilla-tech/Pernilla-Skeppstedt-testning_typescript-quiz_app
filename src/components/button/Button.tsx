import React from "react";
import { ButtonProps } from "../../interfaces/IButton";
import "./Button.css";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #646cff;
  cursor: pointer;
  transition: border-color 0.25s;
  margin: 1rem;

  &:hover {
    border-color: #646cff;
  }
`;

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
