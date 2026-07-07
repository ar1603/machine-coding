import { data, FileExplorer } from "./file_explorer";

function App() {
  return (
    <>
      <div>
        <h1>Get started</h1>
        <div style={{ display: "flex", width: "100%" }}>
          <FileExplorer {...data} />
        </div>
      </div>
    </>
  );
}

export default App;
