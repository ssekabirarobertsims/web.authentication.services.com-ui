import HomePage from "./pages/Home.Page";
import { Routes, Route } from "react-router-dom";
import CreateServicePage from "./pages/Create.Service.Page";
import LoginServicePage from "./pages/Login.Service.Page";
import DashboardPage from "./pages/Dashboard.Page";
import BlankRedirectPage from "./pages/Blank.Redirect.Page";
import { createContext } from "react";
import service from "./hooks/Service.Hook";
export const _serviceContext = createContext(service);
import OfflinePage from "./pages/Offline.Page";
import ApiGuidePage from "./pages/Guide.Page";

function App() {
  return window.navigator.onLine ? (
    <_serviceContext.Provider value={service}>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/api/system/guide" element={<ApiGuidePage />}></Route>
        <Route
          path="/service/registration"
          element={<CreateServicePage />}
        ></Route>
        <Route path="/service/login" element={<LoginServicePage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route
          path="/authentication/redirect/blank/page"
          element={<BlankRedirectPage />}
        ></Route>
      </Routes>
    </_serviceContext.Provider>
  ) : (
    <OfflinePage />
  );
}

export default App;
