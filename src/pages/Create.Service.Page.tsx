import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { useState } from "react";
import Loader from "../components/Loader.Component";
import CookiesWarningComponent from "../components/Cookies.Warning.Component";
import DeviceWarningMessageComponent from "../components/Device.Warning.Message.Component";
import axios from "axios";
import SiteDeveloperNavigationComponent from "../components/Developer.Navigation.Div.Component";
import SecondaryNavigationBarComponent from "../components/Secondary.Dashboard.Component";

const CreateServicePage: React.FunctionComponent = () => {
  const [serviceName, setServiceName] = useState("" as string);
  const [servicePassword, setServicePassword] = useState("" as string);
  const [projectName, setProjectName] = useState("" as string);
  const [ownerUsername, setOwnerUsername] = useState("" as string);
  const [ownerEmail, setOwnerEmail] = useState("" as string);
  const description: string = "" as string;
  const responseMessagePlaceholder: HTMLSpanElement = window.document.querySelector(".warning-flag-abc") as HTMLSpanElement;
  const [responseMessage, setResponseMessage] = useState<string>("");

async function HandleServiceCreate(): Promise<void> {
  
  try {
    // "https://web-authentication-services-restapi.onrender.com/api/service/registration",
    const { data: response } = await axios.post("http://localhost:3000/api/service/registration", {
        service: serviceName as string, 
        owner_username: ownerUsername as string,
        owner_email: ownerEmail as string,
        service_password: servicePassword as string,
        project: projectName as string,
        description: description as string,
    }, {
      headers: {
        "Content-Type": "Application/json",
        "Authorization": ""
      }
    });
  
    // console.log(response.data)
    if (response.status_code !== Number(201) as Required<number>) {
      console.log(response)
      setResponseMessage(response.message);
      responseMessagePlaceholder.textContent = response?.message ? responseMessage : "Failed to send request!";
    } else {
    // console.log(response.data)
      setResponseMessage(response.message);
      window.setTimeout(() => (window.location.href = "/authentication/redirect/blank/authorization/page-1" as Required<string>), 2500 as Required<number>);
    }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
      console.error(error);
      responseMessagePlaceholder.textContent = error?.response?.data?.message;
      throw new Error("Failed to send request to server, check network connection plz!"); 
  }
}

console.log(responseMessage)

  return (
    <>
      <SecondaryNavigationBarComponent />
      <Loader />
      <CookiesWarningComponent />
      <DeviceWarningMessageComponent />
      <SiteDeveloperNavigationComponent />
      <section className="create-service-page-component">
        <article className="__wrapper">
          <h1>Register For A Service</h1>
          <form action="" method="post">
            <article className="form-inputs-wrapper">
              <div>
                <span className="service-warning-flag-wrapper-abc">
                  <span className="warning-flag-abc"></span>
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
                    setServiceName((event.target as HTMLInputElement).value);
                  }}
                  value={serviceName}
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
                    setServicePassword(
                      (event.target as HTMLInputElement).value
                    );
                  }}
                  value={servicePassword}
                />
              </div>
              <div>
                <label htmlFor="project">
                  3. Fill in the service project name:{" "}
                </label>
                <input
                  type="text"
                  name="project"
                  id="project"
                  required
                  aria-required
                  placeholder=""
                  aria-placeholder=""
                  onChange={(event) => {
                    setProjectName((event.target as HTMLInputElement).value);
                  }}
                  value={projectName}
                />
              </div>
              <div>
                <label htmlFor="owner_username">
                  4. Fill in the service owner username:{" "}
                </label>
                <input
                  type="text"
                  name="owner_username"
                  id="owner_username"
                  required
                  aria-required
                  placeholder=""
                  aria-placeholder=""
                  onChange={(event) => {
                    setOwnerUsername((event.target as HTMLInputElement).value);
                  }}
                  value={ownerUsername}
                />
              </div>
              <div>
                <label htmlFor="owner_email">
                  5. Fill in the service owner email:{" "}
                </label>
                <input
                  type="email"
                  name="owner_email"
                  id="owner_email"
                  required
                  aria-required
                  placeholder=""
                  aria-placeholder=""
                  onChange={(event) => {
                    setOwnerEmail((event.target as HTMLInputElement).value);
                  }}
                  value={ownerEmail}
                />
              </div>
              <br />
              <aside>
                <div>
                  <p className="alert">
                    <RiErrorWarningLine /> Please make sure you provide a valid email account for the service owner!
                  </p>
                </div>
              </aside>
              <br />
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  const Loader: HTMLElement = window.document.querySelector(
                    ".loader-wrapper"
                  ) as HTMLElement;
                  Loader.style.display = "flex";
                  // console.log("eee")

                  HandleServiceCreate();

                  window.setTimeout(
                    () => (Loader.style.display = "none"),
                    4000 as number
                  );
                }}
              >
                Create Service
              </button>
            </article>
            <article className="form-side-bar">
              <aside>
                <h1>Service Review Details</h1>
                <div>
                  <span>1. Service Name</span>
                  <p className="service-label">{serviceName}</p>
                </div>
                <div>
                  <span>3. Service Project Name</span>
                  <p className="service-label">{projectName}</p>
                </div>
                <div>
                  <span>4. Service Owner Name</span>
                  <p className="service-label">{ownerUsername}</p>
                </div>
                <div>
                  <span>5. Service Owner Email</span>
                  <p className="service-label">{ownerEmail}</p>
                </div>
              </aside>
            </article>
          </form>
        </article>
      </section>
    </>
  );
};

export default CreateServicePage;
