export type BoxType = {
  data?: "X" | "O";
  selected: boolean;
  onClick: () => void;
};
