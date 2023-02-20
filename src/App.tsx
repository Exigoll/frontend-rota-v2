import { AboutPage } from "pages/AboutPage/AboutPage";
import { Route, Routes } from "react-router-dom";

import { Header } from "./components/layout/Header";
import { ContactsPage } from "@/pages/ContactsPage";
import { HomePage } from "@/pages/HomePage";
import { ProviderPage } from "@/pages/ProviderPage";
import { RegistrationPage } from "@/pages/RegistrationPage/RegistrationPage";
import { WholesalePage } from "@/pages/WholesalePage";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="provider" element={<ProviderPage />} />
          <Route path="wholesale" element={<WholesalePage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
