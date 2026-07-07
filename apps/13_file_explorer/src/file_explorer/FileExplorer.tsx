import { useState } from "react";
import { Data } from "./types";

const File = ({ name }: { name: string }) => {
  return (
    <div
      style={{
        display: "flex",
        columnGap: 20,
        flexDirection: "row",
      }}
    >
      - <div>📷</div>
      {name}
    </div>
  );
};

const FileExplorer = (props: Data) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (props.type === "file") return <File name={props.name} />;

  return (
    <div>
      <div
        style={{
          position: "relative",
          flexDirection: "row",
          columnGap: 10,
          display: "flex",
          cursor: "pointer",
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          style={{
            fontSize: "20",
            flexDirection: "row",
            display: "flex",
          }}
        >
          - {isOpen ? "📂" : "📁"}
        </div>
        <div>{props.name}</div>
      </div>
      {isOpen &&
        props.children.map((it) => (
          <div style={{ paddingLeft: 20 }}>
            <FileExplorer {...it} />
          </div>
        ))}
    </div>
  );
};

export default FileExplorer;
