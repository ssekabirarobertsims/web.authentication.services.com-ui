import React from "react";
import NavigationBarComponent from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";
import HeaderComponent from "../components/Header.Component";

const HomePage: React.FC = () => {
  return (
    <>
      <NavigationBarComponent />
      <HeaderComponent />
      <FooterComponent />
    </>
  );
};

export default HomePage;
