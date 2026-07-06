import { useEffect, useState } from "react";
import type { Data } from "./types";
import { CARD_HEIGHT } from "./const";
import { fetchDisplayData } from "./utils";

const ScrollB = () => {
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

  useEffect(() => {
    const observer = new IntersectionObserver((param) => {
      if (param[0].isIntersecting) {
        setState("loading");
        setTimeout(() => setCurrentPage((prev) => prev + 1), 1000);
      }
    });

    const lastPost = document.querySelector(".text-post:last-child");

    if (lastPost) observer.observe(lastPost);
  }, [data]);

  return (
    <div
      style={{
        width: "100%",
        height: "700px",
        overflow: "scroll",
      }}
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
            className="text-post"
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

export default ScrollB;
