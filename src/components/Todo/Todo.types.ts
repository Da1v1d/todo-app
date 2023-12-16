import { CardProps } from "@mui/material";

export type TodoCardType = CardProps & {
  completed: boolean;
};
