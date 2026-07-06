import { useEffect, useState } from "react";

const ITEMS = ["This is a new park", "Parking is not allowed", "Eat food"];

function App() {
  const [search, setSearch] = useState("");

  const [searchItems, setSearchItems] = useState<string[]>([]);

  useEffect(() => {
    let newSearchedItems: string[];
    if (search === "" || search.length <= 3) {
      newSearchedItems = [];
    } else {
      newSearchedItems = ITEMS.filter((it) =>
        it.toLowerCase().includes(search.toLowerCase()),
      );
    }

    const timeout = setTimeout(() => setSearchItems(newSearchedItems), 200);

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <>
      <div>
        <h1>Get started</h1>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: 20,
          }}
        >
          <input
            placeholder="Search items"
            style={{
              height: 32,
              fontSize: 16,
              width: 400,
              padding: 10,
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div
            style={{
              width: 600,
              height: 800,
              fontSize: 16,
              padding: 10,
              border: "1px solid white",
            }}
          >
            {searchItems.map((it) => (
              <div
                style={{
                  border: "1px solid white",
                  height: 32,
                  margin: 4,
                  color: "white",
                  fontSize: 16,
                  padding: 10,
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
