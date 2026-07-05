import { useRef, useState } from "react";

function App() {
  const [otp, setOtp] = useState<Array<string>>(new Array(6).fill(""));
  const [showOTP, setShowOTP] = useState<string>();
  const ref = useRef(new Array(6));

  return (
    <div>
      <h1>OTP Input</h1>
      <div
        style={{
          flexDirection: "row",
          columnGap: 20,
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        {otp.map((value, index) => {
          return (
            <input
              ref={(input) => {
                ref.current[index] = input;
                return ref.current[index];
              }}
              value={value}
              style={{
                margin: 10,
                fontSize: 42,
                width: "1em",
                height: "1em",
              }}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  setOtp((prev) => {
                    prev[index] = "";
                    return [...prev];
                  });

                  ref.current[index - 1].focus();
                  return;
                }
                if (!isNaN(Number(e.key))) {
                  console.log(e.key);
                  setOtp((prev) => {
                    if (prev[index] == "") {
                      prev[index] = e.key;
                    }
                    return [...prev];
                  });
                  if (index < 5) ref.current[index + 1].focus();
                }
              }}
            />
          );
        })}
      </div>
      <div style={{ height: 100 }} />
      <button
        style={{
          padding: 10,
          margin: 10,
          fontSize: 24,
          borderRadius: 10,
        }}
        onClick={() => {
          if (otp[5] != "") {
            setShowOTP(
              otp.reduce((acc, it) => {
                acc += " " + it;
                return acc;
              }, ""),
            );
          } else {
            setShowOTP("Enter the OTP first");
          }
        }}
      >
        Show OTP
      </button>
      <div style={{ fontSize: 24 }}>{showOTP}</div>
    </div>
  );
}

export default App;
