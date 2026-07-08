import { useEffect, useMemo, useState } from "react";
import { Box, type BoxType } from "./Box";

const N = 5;

const getWinningArray = (n: number) => {
  const WinningArray = new Array<Array<number>>();
  const diaX = new Array<number>();
  const diaY = new Array<number>();
  for (let i = 1; i <= n; i++) {
    const arrX = new Array<number>();
    const arrY = new Array<number>();
    for (let j = 1; j <= n; j++) {
      arrX.push((i - 1) * n + j);
      arrY.push((j - 1) * n + i);
    }
    WinningArray.push(arrX);
    WinningArray.push(arrY);
    // creating diagonal
    diaX.push((i - 1) * n + i);
    diaY.push(i * n - (i - 1));
  }

  WinningArray.push(diaX);
  WinningArray.push(diaY);

  return WinningArray;
};

function App() {
  const WINNING = useMemo(() => getWinningArray(N), []);
  const [{ x: xData, o: oData }, setData] = useState<{
    x: number[];
    o: number[];
  }>({
    x: [],
    o: [],
  });
  const [chance, setChance] = useState<BoxType["data"]>("X");
  const [winner, setWinner] = useState<[number, "X" | "O"] | undefined>(
    undefined,
  );

  useEffect(() => {
    if (xData.length + oData.length >= 5 && winner === undefined) {
      WINNING.forEach((wa, index) => {
        const loseX = wa.some((a) => !xData.includes(a));
        const loseO = wa.some((a) => !oData.includes(a));
        if (!loseX) {
          setWinner([index, "X"]);
          return;
        }
        if (!loseO) {
          setWinner([index, "O"]);
          return;
        }
      });
    }
  }, [xData, oData, winner, chance, WINNING]);

  return (
    <>
      <div>
        <h1>TIC TAC TOE</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {Array.from({ length: N }, (_, index) => index + 1).map(
            (y, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    justifyItems: "center",
                  }}
                >
                  {Array.from({ length: N }, (_, index) => index + 1).map(
                    (x) => {
                      const num = (x - 1) * N + y;
                      const isSelected =
                        winner && WINNING[winner[0]].includes(num)
                          ? true
                          : false;
                      return (
                        <Box
                          key={Math.random()}
                          selected={isSelected}
                          data={
                            oData.includes(num)
                              ? "O"
                              : xData.includes(num)
                                ? "X"
                                : undefined
                          }
                          onClick={() => {
                            setData((prev) => {
                              if (chance === "O") {
                                return { ...prev, o: [...prev.o, num] };
                              } else {
                                return { ...prev, x: [...prev.x, num] };
                              }
                            });
                            setChance((prev) => (prev === "X" ? "O" : "X"));
                          }}
                        />
                      );
                    },
                  )}
                </div>
              );
            },
          )}
        </div>
        <button
          onClick={() => {
            setData({ x: [], o: [] });
            setChance("X");
            setWinner(undefined);
          }}
          style={{
            fontSize: 32,
            margin: 20,
            color: "white",
            border: "1px solid red",
          }}
        >
          Reset
        </button>
        {winner && <div>Winner is {winner[1]}</div>}
        <h3>{winner ? "Press reset to restart the game" : " "}</h3>
      </div>
    </>
  );
}

export default App;
