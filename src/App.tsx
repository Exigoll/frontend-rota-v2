import { Route, Routes } from "react-router-dom";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import { AboutPage } from "@/pages/AboutPage/AboutPage";
import { ContactsPage } from "@/pages/ContactsPage";
import { DeliveryPage } from "@/pages/DeliveryPage";
import { DocumentFlowPage } from "@/pages/DocumentFlowPage";
import { HomePage } from "@/pages/HomePage";
import { ProviderPage } from "@/pages/ProviderPage";
import { RegistrationPage } from "@/pages/RegistrationPage";
import { WarrantyReturnPage } from "@/pages/WarrantyReturnPage";
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
          <Route path="delivery" element={<DeliveryPage />} />
          <Route path="warrantyReturn" element={<WarrantyReturnPage />} />
          <Route path="documentFlow" element={<DocumentFlowPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
