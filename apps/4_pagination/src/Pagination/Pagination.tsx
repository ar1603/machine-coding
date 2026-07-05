import { useState } from "react";
import { DATA, DATA_COUNT } from "./const";

const RoundTextBox = ({
  text,
  isActive,
  onClick,
}: {
  text: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      style={{
        border: "1px solid black",
        borderRadius: "50%",
        width: 32,
        height: 32,
        backgroundColor: isActive ? "blue" : "white",
        color: isActive ? "white" : "blue",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const getDisplayPages = (totalPage: number, currentPage: number) => {
  let start;
  let end;
  if (currentPage > 3) {
    start = currentPage - 3;
  } else {
    start = 0;
  }

  if (currentPage < totalPage - 3) {
    end = currentPage + 3;
  } else {
    end = totalPage;
  }

  const length = end - start;

  return Array.from({ length }, (_, it) => it + start);
};

const Pagination = () => {
  const [active, setActive] = useState(0);
  const totalPages = DATA_COUNT % 5 === 0 ? DATA_COUNT / 5 : DATA_COUNT / 5 + 1;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        rowGap: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          alignSelf: "center",
          gap: 2,
        }}
      >
        {Array.from({ length: 5 }, (_, it) => active * 5 + it).map((it) => (
          <div
            style={{
              width: "300px",
              height: "400px",
              backgroundColor: "gray",
              borderRadius: "10px",
              gap: 20,
              fontSize: 36,
              color: "green",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            {DATA[it]}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignSelf: "center",
          gap: 2,
        }}
      >
        {active !== 0 ? (
          <RoundTextBox
            text="<"
            isActive={false}
            onClick={() => setActive((prev) => prev - 1)}
          />
        ) : (
          <div style={{ width: 32, height: 32 }}></div>
        )}
        {getDisplayPages(totalPages, active).map((it) => (
          <RoundTextBox
            text={(it + 1).toString()}
            isActive={active === it}
            onClick={() => setActive(it)}
          />
        ))}
        {active + 1 !== totalPages ? (
          <RoundTextBox
            text=">"
            isActive={false}
            onClick={() => setActive((prev) => prev + 1)}
          />
        ) : (
          <div style={{ width: 32, height: 32 }}></div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
