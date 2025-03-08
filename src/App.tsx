import HomePage from "./pages/Home.Page";
import { Routes, Route } from "react-router-dom";
import CreateServicePage from "./pages/Create.Service.Page";
import LoginServicePage from "./pages/Login.Service.Page";
import DashboardPage from "./pages/Dashboard.Page";
import BlankRedirectPage from "./pages/Blank.Redirect.Page";
import { createContext } from "react";
import service from "./hooks/Service.Hook";
export const _serviceContext = createContext(service);
import ApiGuidePage from "./pages/Guide.Page";
import NavigationBarComponent from "./components/Navigation.Bar.Component";
import HeaderComponent from "./components/Header.Component";
import SiteDeveloperNavigationComponent from "./components/Developer.Navigation.Div.Component";
import OfflineCardComponent from "./components/Offline.Card.Component";
import ServicesComponent from "./components/Services.Component";
import WarningComponent from "./components/Warning.Component";
import FooterComponent from "./components/Footer.Component";

function App() {
  return window.navigator.onLine ? (
    <_serviceContext.Provider value={service}>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route
          path="/api/system/guide"
          element={service ? <ApiGuidePage /> : <LoginServicePage />}
        ></Route>
        <Route
          path="/service/registration"
          element={<CreateServicePage />}
        ></Route>
        <Route path="/service/login" element={<LoginServicePage />}></Route>
        <Route
          path="/dashboard"
          element={service ? <DashboardPage /> : <LoginServicePage />}
        ></Route>
        <Route
          path="/authentication/redirect/blank/authorization/page-1"
          element={service ? <DashboardPage /> : <BlankRedirectPage />}
        ></Route>
      </Routes>
    </_serviceContext.Provider>
  ) : (
    <>
      <_serviceContext.Provider value={service}>
        <NavigationBarComponent />
        <HeaderComponent />
        <SiteDeveloperNavigationComponent />
        <ServicesComponent />
        <OfflineCardComponent />
        <WarningComponent />
        <FooterComponent />
      </_serviceContext.Provider>
    </>
  );
}

export default App;
