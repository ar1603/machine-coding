import { useState } from "react";

const TOTAL_ITEM = 50000000; // 5 crores item

const Items = Array.from({ length: TOTAL_ITEM }, (_, it) => it + 1);

const ItemHeight = 100;
const height = ItemHeight * TOTAL_ITEM;
function App() {
  const [start, setStart] = useState(0);

  const handleScroll = (e: any) => {
    const top = e.target.scrollTop;
    setStart(top / ItemHeight);
  };

  return (
    <>
      <div>
        <h1>Virtual List</h1>
        <h3>Item count: {TOTAL_ITEM} - 5 crores items</h3>
        <div
          style={{
            width: "100%",
            border: "1px solid white",
            height: "700px",
            overflow: "scroll",
          }}
          onScroll={handleScroll}
        >
          <div style={{ height: height, position: "relative" }}>
            {Items.slice(start, start + 25).map((it) => (
              <div
                style={{
                  fontSize: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: ItemHeight,
                  color: "white",
                  backgroundColor: "orange",
                  border: "1px solid black",
                  position: "absolute",
                  width: "1200px",
                  top:
                    start < 1 ? (it - 1) * ItemHeight : (it - 10) * ItemHeight,
                }}
              >
                {it}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
