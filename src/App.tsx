import { Route, Routes } from "react-router-dom";

import { Layout } from "@/components/layout";

import { AboutPage } from "@/pages/AboutPage";
import AuthRoot from "@/pages/Auth/AuthRoot";
import { ContactsPage } from "@/pages/ContactsPage";
import { DeliveryPage } from "@/pages/DeliveryPage";
import { DocumentFlowPage } from "@/pages/DocumentFlowPage";
import { HomePage } from "@/pages/HomePage";
import { ProviderPage } from "@/pages/ProviderPage";
import { WarrantyReturnPage } from "@/pages/WarrantyReturnPage";
import { WholesalePage } from "@/pages/WholesalePage";

import { PrivateRoute } from "@/utils/router";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<Layout />}>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="provider" element={<ProviderPage />} />
            <Route path="wholesale" element={<WholesalePage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="delivery" element={<DeliveryPage />} />
            <Route path="warrantyReturn" element={<WarrantyReturnPage />} />
            <Route path="documentFlow" element={<DocumentFlowPage />} />
          </Route>
          <Route path="login" element={<AuthRoot />} />
          <Route path="register" element={<AuthRoot />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
