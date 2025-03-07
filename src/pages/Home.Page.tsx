import React from "react";
import NavigationBarComponent from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";
import HeaderComponent from "../components/Header.Component";
import ServicesComponent from "../components/Services.Component";
import SiteDeveloperNavigationComponent from "../components/Developer.Navigation.Div.Component";
import WarningComponent from "../components/Warning.Component";
import OfflineCardComponent from "../components/Offline.Card.Component";

const HomePage: React.FC = () => {
  return window.navigator.onLine ? (
    <>
      <NavigationBarComponent />
      <HeaderComponent />
      <SiteDeveloperNavigationComponent />
      <ServicesComponent />
      <WarningComponent />
      <FooterComponent />
    </>
  ) : (
    <>
      <NavigationBarComponent />
      <HeaderComponent />
      <SiteDeveloperNavigationComponent />
      <ServicesComponent />
      <OfflineCardComponent />
      <WarningComponent />
      <FooterComponent />
    </>
  );
};

export default HomePage;
