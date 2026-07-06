import { useEffect, useState } from "react";
import styles from "./App.module.css";
function App() {
  const [current, setCurrent] = useState(0);

  const data = Array.from({ length: 5 }, (_, it) => it);

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrent((current + 1) % 5);
    }, 2000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <>
      <div>
        <h1>CAROUSEL</h1>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <button
            style={{ margin: 10 }}
            onClick={() => setCurrent((prev) => (prev === 0 ? 4 : prev - 1))}
          >
            {"<"}
          </button>
          <div className={styles.carousel} key={current}>
            {data[current] + 1}
          </div>
          <button
            style={{ margin: 10 }}
            onClick={() => setCurrent((prev) => (prev + 1) % 5)}
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
