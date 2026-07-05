import { useState } from "react";

const DATA = [
  {
    label: "Personal",
    content: "Personal Content Info",
  },
  {
    label: "Account",
    content: "Account Content Info",
  },
  {
    label: "Payment",
    content: "Payment Content Info",
  },
  {
    label: "Store",
    content: "Store Content Info",
  },
  {
    label: "Order",
    content: "Order Content Info",
  },
];
function App() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div>
        <h1>Stepper</h1>
        <div
          style={{
            width: "60%",
            display: "flex",
            justifySelf: "center",
            flexDirection: "row",
            marginTop: 100,
            marginBottom: 100,
          }}
        >
          {DATA.map((it, index) => {
            return (
              <div
                style={{
                  display: "flex",
                }}
              >
                {index !== 0 && (
                  <div
                    style={{
                      width: "120px",
                      height: "1px",
                      top: 18,
                      backgroundColor: active >= index ? "blue" : "gray",
                      position: "relative",
                    }}
                  ></div>
                )}
                <div style={{ fontSize: 10 }}>
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      fontSize: 18,
                      padding: 5,
                      borderRadius: "50%",
                      backgroundColor: active >= index ? "blue" : "gray",
                      color: "white",
                    }}
                  >
                    {index + 1}
                  </div>
                  {it.label}
                </div>
              </div>
            );
          })}
        </div>
        {DATA[active].content}
        <div
          style={{
            marginTop: 24,
            display: "flex",
            gap: 10,
            justifySelf: "center",
          }}
        >
          <button
            style={{
              padding: 10,
              fontSize: 24,
              color: "white",
              backgroundColor: "blue",
              borderRadius: 5,
            }}
            onClick={() => setActive((prev) => prev - 1)}
            disabled={active === 0}
          >
            Back
          </button>
          <button
            style={{
              padding: 10,
              fontSize: 24,
              color: "white",
              backgroundColor: "blue",
              borderRadius: 5,
            }}
            onClick={() => setActive((prev) => prev + 1)}
            disabled={active === DATA.length - 1}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
