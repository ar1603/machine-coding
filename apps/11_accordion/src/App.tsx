import { useState } from "react";

type DataType = { label: string; details: string };

const DATA: DataType[] = [
  {
    label: "ABC",
    details:
      "this is a abc, this is a abc,this is a abc,this is a abc,this is a abc,this is a abc,this is a abc,this is a abc,this is a abc,this is a abc,this is a abc, ",
  },
  {
    label: "def",
    details:
      "this is a def this is a def this is a defthis is a def  this is a def this is a def this is a def this is a def this is a def this is a def this is a def",
  },
  {
    label: "ghi",
    details:
      "this is a ghi this is a ghi this is a ghi this is a ghi this is a ghi this is a ghi this is a ghi this is a ghi v this is a ghi this is a ghi this is a ghi",
  },
  {
    label: "ljk",
    details:
      "this is a ljk this is a ljk this is a ljk this is a ljk this is a ljk this is a ljk this is a ljk this is a ljk this is a ljk",
  },
];

const ACC = ({ label, details }: DataType) => {
  const [isOpen, setOpenState] = useState<boolean>(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid gray",
        padding: 10,
        borderRadius: 10,
        justifyItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: 14,
          flexDirection: "row",
          color: "greenyellow",
          justifyContent: "space-between",
        }}
      >
        <div>{label}</div>
        <button onClick={() => setOpenState((prev) => !prev)}>
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && (
        <div
          style={{
            padding: 14,
            color: "white",
            textAlign: "start",
            fontSize: 16,
          }}
        >
          {details}
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <>
      <div>
        <h1>ACCORDION</h1>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            rowGap: 10,
          }}
        >
          {DATA.map((it) => (
            <ACC {...it} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
