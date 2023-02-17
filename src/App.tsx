import { AboutPage } from "pages/AboutPage/AboutPage";
import HomePage from "pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";

import { Header } from "./components/layout/Header";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
