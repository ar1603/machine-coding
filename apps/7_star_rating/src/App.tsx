import { useState } from "react";

function App() {
  const [currentRating, setCurrentRating] = useState(0);
  const [activeRating, setActiveRating] = useState(0);
  return (
    <>
      <div>
        <h1>STAR RATING</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {Array.from({ length: 10 }, (_, it) => it + 1).map((it) => {
            return (
              <div
                key={it}
                style={{
                  width: 32,
                  height: 32,
                  margin: 2,
                  borderRadius: "50%",
                  cursor: "pointer",
                  backgroundColor: it <= activeRating ? "yellow" : "white",
                }}
                onMouseEnter={() => {
                  setActiveRating(it);
                }}
                onMouseLeave={() => {
                  setActiveRating(currentRating);
                }}
                onClick={() => {
                  setCurrentRating(it);
                }}
              >
                {it}
              </div>
            );
          })}
        </div>
        <div>{currentRating}</div>
      </div>
    </>
  );
}

export default App;
