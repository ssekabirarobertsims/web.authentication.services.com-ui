import React from "react";
import NavigationBarComponent from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";

const OfflinePage: React.FC = () => {
  return (
    <>
      <NavigationBarComponent />
      <section className="offline-page-component">
        <img src="/offline-concept-illustration_114360-7233.jpg" alt="" />
        <p>You seem to be offline!</p>
      </section>
      <FooterComponent />
    </>
  );
};

export default OfflinePage;
