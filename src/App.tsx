import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { store } from "redux/store";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import { routes } from "@/store/route";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <main>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
