import { useEffect, useState } from "react";

const HEIGHT = 20;
const WIDTH = 400;
function App() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (progress < 100) {
      let interval = setTimeout(() => {
        setProgress((prev) => prev + 2);
      }, 100);

      return () => clearTimeout(interval);
    }
  }, [progress]);

  return (
    <>
      <div>
        <h1>PROGRESS BAR</h1>
        <div
          style={{
            height: HEIGHT,
            width: WIDTH,
            backgroundColor: "gray",
            borderRadius: 30,
            marginTop: 100,
            display: "flex",
            justifySelf: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: HEIGHT - 4,
              width: (WIDTH * progress) / 100,
              backgroundColor: "green",
              padding: 2,
            }}
          ></div>
        </div>
        <button
          style={{
            padding: 5,
            marginTop: 100,
          }}
          disabled={progress !== 100}
          onClick={() => setProgress(0)}
        >
          Restart
        </button>
      </div>
    </>
  );
}

export default App;
