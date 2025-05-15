import HomePage from "./pages/Home.Page";
import { Routes, Route } from "react-router-dom";
import CreateServicePage from "./pages/Create.Service.Page";
import LoginServicePage from "./pages/Login.Service.Page";
import DashboardPage from "./pages/Dashboard.Page";
import BlankRedirectPage from "./pages/Blank.Redirect.Page";
import service from "./hooks/Service.Login.Information.Hook";
import serviceContext from "./context/Service.Login.Information.Context";
import ApiGuidePage from "./pages/Guide.Page";
// add verification page
// edit guide page
// update server responses
// add responsive for web
// edit service form component

function App() {
  return (
    <serviceContext.Provider value={service}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="/guide"
          element={!service ? <ApiGuidePage /> : <LoginServicePage />}
        />
        <Route
          path="/service/registration"
          element={service ? <DashboardPage /> : <CreateServicePage />}
        />
        <Route path="/service/login" element={<LoginServicePage />} />
        <Route
          path="/dashboard"
          element={service ? <DashboardPage /> : <LoginServicePage />}
        />
        <Route
          path="/authentication/redirect/blank/authorization/page-1"
          element={service ? <DashboardPage /> : <BlankRedirectPage />}
        />
      </Routes>
    </serviceContext.Provider>
  );
}

export default App;
