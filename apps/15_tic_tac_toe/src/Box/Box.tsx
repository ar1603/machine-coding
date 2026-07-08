import type { BoxType } from "./types";

const Box = ({ data, selected, onClick }: BoxType) => {
  return (
    <button
      style={{
        width: 50,
        height: 50,
        backgroundColor: selected ? "greenyellow" : "white",
        color: data === "X" ? "black" : "red",
        fontWeight: "bold",
        fontSize: 42,
        margin: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => {
        onClick();
      }}
      disabled={data !== undefined}
    >
      {data ?? ""}
    </button>
  );
};

export default Box;
