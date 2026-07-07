import { useState, useRef, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState<{
    hour: number;
    minute: number;
    second: number;
  }>({
    hour: 0,
    minute: 0,
    second: 0,
  });

  const [timerState, setTimerState] = useState<"running" | "pause" | "idle">(
    "idle",
  );
  const ref = useRef<number | undefined>(undefined);

  const resetAction = () => {
    setTime({
      hour: 0,
      minute: 0,
      second: 0,
    });
    setTimerState("idle");
    clearInterval(ref.current);
  };

  const startTimer = () => {
    if (timerState === "pause" || timerState === "idle") {
      ref.current = setInterval(() => {
        setTime((time) => {
          let totalSeconds =
            time.hour * 3600 + time.minute * 60 + time.second - 1;
          let hour = Math.floor(totalSeconds / 3600);
          let rem = totalSeconds % 3600;
          let minute = Math.floor(rem / 60);
          rem = rem % 60;
          let second = rem;
          if (hour === 0 && minute === 0 && second === 0) {
            resetAction();
            return {
              hour: 0,
              minute: 0,
              second: 0,
            };
          }
          return {
            hour,
            minute,
            second,
          };
        });
      }, 1000);
      setTimerState("running");
    } else {
      setTimerState("pause");
      clearInterval(ref.current);
    }
  };

  return (
    <div className="App">
      <h1>STOP WATCH</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          columnGap: 10,
        }}
      >
        <input
          value={time.hour}
          type="number"
          style={{
            width: 54,
            height: 36,
            fontSize: 24,
            textAlign: "center",
          }}
          onChange={(e) => {
            setTime((prev) => ({ ...prev, hour: Number(e.target.value) }));
          }}
        />
        :
        <input
          value={time.minute}
          type="number"
          style={{ width: 54, height: 36, fontSize: 24, textAlign: "center" }}
          onChange={(e) => {
            setTime((prev) => ({ ...prev, minute: Number(e.target.value) }));
          }}
        />
        :
        <input
          value={time.second}
          type="number"
          style={{ width: 54, height: 36, fontSize: 24, textAlign: "center" }}
          onChange={(e) => {
            setTime((prev) => ({ ...prev, second: Number(e.target.value) }));
          }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center", columnGap: 20 }}>
        <button
          style={{
            marginTop: 20,
            padding: 4,
            fontSize: 18,
          }}
          disabled={time.hour === 0 && time.minute === 0 && time.second === 0}
          onClick={startTimer}
        >
          {timerState === "running" ? "Pause" : "Start timer"}
        </button>
        <button
          style={{
            marginTop: 20,
            padding: 3,
            fontSize: 18,
          }}
          disabled={time.hour === 0 && time.minute === 0 && time.second === 0}
          onClick={resetAction}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
