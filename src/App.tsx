import { Route, Routes } from "react-router-dom";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import { routes } from "@/store/route";

import { HomePage } from "./pages/HomePage";
import { PrivateRoute } from "./utils/router";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
