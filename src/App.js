import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Myself } from "./components/Myself";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Myself />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
