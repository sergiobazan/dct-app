import { useState } from "react";
import "./App.css";
import { Footer, Header, Main } from "./components";

function App() {
  const [title, setTitle] = useState("");

  return (
    <div className="app">
      <Header title={title} setTitle={setTitle} />
      <Main title={title} />
      <Footer />
    </div>
  );
}

export default App;
