import { AboutPage } from "@/pages/AboutPage";
import { AuthRootComponent } from "@/pages/Auth/AuthRootComponent";
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
  { path: "login", element: <AuthRootComponent /> },
  { path: "register", element: <AuthRootComponent /> },
  { path: "delivery", element: <DeliveryPage /> },
  { path: "warrantyReturn", element: <WarrantyReturnPage /> },
  { path: "documentFlow", element: <DocumentFlowPage /> },
];
