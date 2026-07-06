import { useEffect, useState } from "react";
import type { Data } from "./types";
import { CARD_HEIGHT } from "./const";
import { fetchDisplayData } from "./utils";

const ScrollA = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<Data[]>([]);
  const [state, setState] = useState<"loading" | "done" | "page" | "none">(
    "none",
  );

  useEffect(() => {
    fetchDisplayData(currentPage, (getData) => {
      if (getData.length === 0) {
        setState("done");
        return;
      }
      setData((prev) => [...prev, ...getData]);
      setState("page");
    });
  }, [currentPage]);

  const scrollHandler = (e: any) => {
    const top = e.target.scrollTop;

    if (
      top >= (CARD_HEIGHT * data.length) / 1.5 &&
      state !== "done" &&
      state !== "loading"
    ) {
      setState("loading");
      setTimeout(() => setCurrentPage((prev) => prev + 1), 1000);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "700px",
        overflow: "scroll",
      }}
      onScroll={scrollHandler}
    >
      <div
        style={{
          padding: 10,
          border: "1px solid white",
        }}
      >
        {data.map((it) => (
          <div
            style={{
              height: CARD_HEIGHT,
              border: "1px solid gray",
              borderRadius: 10,
              margin: 10,
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
            }}
            key={Math.random()}
          >
            <div
              style={{
                maxLines: 1,
                fontWeight: "bold",
                color: "yellowgreen",
              }}
            >
              {it.title}
            </div>
            <div style={{ maxLines: 1 }}>{it.body}</div>
          </div>
        ))}
        {state === "loading" && (
          <div
            style={{
              height: CARD_HEIGHT,
              border: "1px solid yellow",
              borderRadius: 10,
              color: "yellowgreen",
              margin: 10,
              display: "flex",
              justifyItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                maxLines: 1,
                fontWeight: "bold",
                color: "yellowgreen",
              }}
            >
              Loading...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollA;
