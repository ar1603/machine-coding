import { useEffect, useState } from "react";

const X = 3;
const Y = 3;

const Box = ({
  isSelected,
  callback,
}: {
  isSelected: boolean;
  callback: () => void;
}) => {
  return (
    <div
      key={Math.random()}
      style={{
        width: 100,
        height: 100,
        backgroundColor: isSelected ? "greenyellow" : "gray",
        border: "1px solid white",
        cursor: "pointer",
      }}
      onClick={() => {
        callback();
      }}
    />
  );
};

function App() {
  const [path, addPath] = useState<{ x: Number; y: number }[]>([]);
  const [isTracing, setIsTracing] = useState<boolean>(false);
  const [followPath, setFollowPath] = useState<boolean>(false);
  const startTrace = () => {
    setIsTracing(true);
  };

  useEffect(() => {
    if (path.length === 0 || !isTracing) {
      setIsTracing(false);
      return;
    }

    let interval = setInterval(() => {
      addPath((prev) => {
        return followPath
          ? prev.slice(1, prev.length)
          : prev.slice(0, prev.length - 1);
      });
    }, 500);
    return () => clearInterval(interval);
  }, [path, isTracing]);

  return (
    <div>
      <h1>INTERACTIVE SHAPE</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: 10,
          }}
        >
          {Array.from({ length: Y }, (_, index) => index + 1).map((y) => {
            return (
              <div
                key={y}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: 10,
                  justifyContent: "center",
                }}
              >
                {Array.from({ length: X }, (_, it) => it + 1).map((x) => (
                  <Box
                    key={x + y}
                    callback={() => {
                      if (!path.some((it) => it.x === x && it.y === y)) {
                        addPath((prev) => [...prev, { x, y }]);
                      } else {
                        addPath((prev) => {
                          let newPath = prev.filter(
                            (it) => it.x !== x || it.y !== y,
                          );
                          return newPath;
                        });
                      }
                    }}
                    isSelected={path.some((it) => it.x === x && it.y === y)}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          columnGap: 10,
        }}
      >
        <button onClick={() => startTrace()} disabled={isTracing}>
          Click
        </button>
        <button
          onClick={() => setFollowPath((prev) => !prev)}
          disabled={isTracing}
        >
          {followPath ? "Follow reverse path" : "Follow Path"}
        </button>
      </div>
    </div>
  );
}

export default App;
