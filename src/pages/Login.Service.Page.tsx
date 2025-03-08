import React from "react";
import NavigationBarComponent from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";
import { useState } from "react";
import ServiceLogin from "../functions/Service.Login.Function";
import Loader from "../components/Loader.Component";

const LoginServicePage: React.FC = () => {
  const [service, setService] = useState("" as string);
  const [password, setPassword] = useState("" as string | number);

  return (
    <>
      <NavigationBarComponent />
      <Loader />
      <section className="log-into-service-page-component-wrapper">
        <article className="__wrapper">
          <br />
          <h1>Log Into Service</h1>
          <form action="" method="post">
            <div>
              <span className="warning-flag-wrapper">
                <span className="warning-flag"></span>
              </span>
              <label htmlFor="service">1. Fill in the service name: </label>
              <input
                type="text"
                name="service"
                id="service"
                required
                aria-required
                placeholder=""
                aria-placeholder=""
                onChange={(event) => {
                  setService((event.target as HTMLInputElement).value);
                }}
                value={service}
              />
            </div>
            <div>
              <label htmlFor="service_password">
                2. Fill in the service password:{" "}
              </label>
              <input
                type="password"
                name="service_password"
                id="service_password"
                required
                aria-required
                placeholder=""
                aria-placeholder=""
                onChange={(event) => {
                  setPassword((event.target as HTMLInputElement).value);
                }}
                value={password}
              />
            </div>
            <p>
              New to web authentication services?{" "}
              <a href="/service/registration">Register a new service</a>
            </p>
            <br />
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                ServiceLogin(service, password);
              }}
            >
              Log Into Service
            </button>
          </form>
        </article>
      </section>
      <FooterComponent />
    </>
  );
};

export default LoginServicePage;
