import { ButtonVariant } from "../enums/ButtonVariant";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  "data-testid"?: string;
}
