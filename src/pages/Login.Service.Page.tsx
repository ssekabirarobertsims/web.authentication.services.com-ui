import React from "react";
import { useState } from "react";
import Loader from "../components/Loader.Component";
import CookiesWarningComponent from "../components/Cookies.Warning.Component";
import DeviceWarningMessageComponent from "../components/Device.Warning.Message.Component";
import SecondaryNavigationBarComponent from "../components/Secondary.Dashboard.Component";
import axios from "axios";

const LoginServicePage: React.FunctionComponent = () => {
  const [service, setService] = useState("" as string);
  const [password, setPassword] = useState("" as string | number);
  const responseMessagePlaceholder: HTMLSpanElement = window.document.querySelector(".warning-flag-xyz") as HTMLSpanElement;
  const [responseMessage, setResponseMessage] = useState<string>("");
  
  async function HandleServiceLogin(): Promise<void> {

    // https://web-authentication-services-restapi.onrender.com/api/service/login
  try {
    const { data: response } = await axios.post("http://localhost:3000/api/service/login", {
        service: service,
        service_password: password,
    }, {
      headers: {
        "Content-Type": "Application/json",
        "Authorization": ""
      }
    });
  
    setResponseMessage(response.message);

    if (response.status_code !== Number(200) as Required<number>) {
      responseMessagePlaceholder.textContent = response?.message ? responseMessage : responseMessage;
    } else {
      setResponseMessage(response.message);
      window.localStorage.setItem(
        "service_login_info",
        window.encodeURIComponent(JSON.stringify(response))
      );

      responseMessagePlaceholder.textContent = response?.message ? responseMessage : responseMessage;
      window.setTimeout(() => window.location.href = "/dashboard" as Required<string>, 2500 as Required<number>);
    }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    responseMessagePlaceholder.textContent = error?.response?.data?.message as Required<Readonly<string>>;
    throw new Error("Failed to send request to server, check network connection plz!"); 
  }
} 

  return (
    <>
      <SecondaryNavigationBarComponent />
      <Loader />
      <CookiesWarningComponent />
      <DeviceWarningMessageComponent />
      <section className="log-into-service-page-component-wrapper">
        <article className="__wrapper">
          <br />
          <h1>Log Into Service</h1>
          <form action="" method="post">
            <span className="warning-flag-xyz"></span>
            <div>
              <label htmlFor="service">1. Fill in the service name: </label>
              <input
                type="text"
                name="service"
                id="service"
                required
                aria-required="true"
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
                aria-required="true"
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
              <a href="/service/registration">Create a new service</a>
            </p>
            <br />
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                const Loader: HTMLElement = window.document.querySelector(
                  ".loader-wrapper"
                ) as HTMLElement;
                Loader.style.display = "flex";
                HandleServiceLogin();

                window.setTimeout(
                  () => (Loader.style.display = "none"),
                  4000 as number
                );
              }}
            >
              Log Into Service
            </button>
          </form>
        </article>
      </section>
    </>
  );
};

export default LoginServicePage;
