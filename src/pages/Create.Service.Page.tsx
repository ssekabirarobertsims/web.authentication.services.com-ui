import React from "react";
import NavigationBarComponent from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";
import { RiErrorWarningLine } from "react-icons/ri";
import { useState } from "react";
import Loader from "../components/Loader.Component";
import ServiceCreation from "../functions/Service.Create.Function";

const CreateServicePage: React.FC = () => {
  const [serviceName, setServiceName] = useState("" as string);
  const [servicePassword, setServicePassword] = useState("" as string);
  const [projectName, setProjectName] = useState("" as string);
  const [ownerUsername, setOwnerUsername] = useState("" as string);
  const [ownerEmail, setOwnerEmail] = useState("" as string);
  const description: string = "" as string;

  return (
    <>
      <NavigationBarComponent />
      <Loader />
      <section className="create-service-page-component">
        <article className="__wrapper">
          <h1>Register For A Service</h1>
          <form action="" method="post">
            <article className="form-inputs-wrapper">
              <div>
                <span className="service-warning-flag-wrapper-abc">
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
                    <RiErrorWarningLine /> Once the service is created, it cant
                    be edited!
                  </p>
                </div>
              </aside>
              <br />
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  ServiceCreation(
                    serviceName as string,
                    ownerUsername as string,
                    ownerEmail as string,
                    servicePassword as string,
                    projectName as string,
                    description as string
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
      <FooterComponent />
    </>
  );
};

export default CreateServicePage;
