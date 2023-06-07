import { Route, Routes } from "react-router-dom";

import { Layout } from "@/components/layout";

import { AboutPage } from "@/pages/AboutPage";
import { AuthRoot } from "@/pages/Auth/AuthRoot";
import { ContactsPage } from "@/pages/ContactsPage";
import { DeliveryPage } from "@/pages/DeliveryPage";
import { DocumentFlowPage } from "@/pages/DocumentFlowPage";
import { HomePage } from "@/pages/HomePage";
import { OfficePage } from "@/pages/OfficePage";
import { BalancePage } from "@/pages/OfficePage/BalancePage";
import { CartPage } from "@/pages/OfficePage/CartPage";
import { DocumentsPage } from "@/pages/OfficePage/DocumentsPage";
import { FavoritesPage } from "@/pages/OfficePage/FavoritesPage";
import { OrdersPage } from "@/pages/OfficePage/OrdersPage";
import { ProfilePage } from "@/pages/OfficePage/ProfilePage";
import { ReturnsPage } from "@/pages/OfficePage/ReturnsPage";
import { SettingsPage } from "@/pages/OfficePage/SettingsPage";
import { StatutoryDocumentsPage } from "@/pages/OfficePage/StatutoryDocumentsPage";
import { UploadFromFilesPage } from "@/pages/OfficePage/UploadFromFilesPage";
import { ProviderPage } from "@/pages/ProviderPage";
import SearchResult from "@/pages/SearchResult/SearchResult";
import { SingleAssetPage } from "@/pages/SingleAssetPage";
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
            <Route path="office" element={<OfficePage />} />
            <Route path="office/balance" element={<BalancePage />} />
            <Route path="office/cart" element={<CartPage />} />
            <Route path="office/favorites" element={<FavoritesPage />} />
            <Route path="office/orders" element={<OrdersPage />} />
            <Route
              path="office/upload-from-file"
              element={<UploadFromFilesPage />}
            />
            <Route path="office/returns" element={<ReturnsPage />} />
            <Route path="office/documents" element={<DocumentsPage />} />
            <Route
              path="office/statutory-documents"
              element={<StatutoryDocumentsPage />}
            />
            <Route path="office/profile" element={<ProfilePage />} />
            <Route path="office/settings" element={<SettingsPage />} />
            <Route path="search-result" element={<SearchResult />}></Route>
          </Route>
          <Route path="login" element={<AuthRoot />} />
          <Route path="register" element={<AuthRoot />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
