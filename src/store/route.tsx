import { AboutPage } from "@/pages/AboutPage/AboutPage";
import { ContactsPage } from "@/pages/ContactsPage";
import { DeliveryPage } from "@/pages/DeliveryPage";
import { DocumentFlowPage } from "@/pages/DocumentFlowPage";
import { HomePage } from "@/pages/HomePage";
import { ProviderPage } from "@/pages/ProviderPage";
import { RegistrationPage } from "@/pages/RegistrationPage";
import { WarrantyReturnPage } from "@/pages/WarrantyReturnPage";
import { WholesalePage } from "@/pages/WholesalePage";

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "about", element: <AboutPage /> },
  { path: "provider", element: <ProviderPage /> },
  { path: "wholesale", element: <WholesalePage /> },
  { path: "contacts", element: <ContactsPage /> },
  { path: "registration", element: <RegistrationPage /> },
  { path: "delivery", element: <DeliveryPage /> },
  { path: "warrantyReturn", element: <WarrantyReturnPage /> },
  { path: "documentFlow", element: <DocumentFlowPage /> },
];
