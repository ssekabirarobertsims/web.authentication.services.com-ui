import React from "react";
import NavigationBarComponent from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
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
  const [description, setDescription] = useState("" as string);

  return (
    <>
      <NavigationBarComponent />
      <Loader />
      <section className="create-service-page-component-wrapper">
        <article className="__wrapper">
          <br />
          <Link
            to={{
              pathname: "/",
            }}
          >
            <IoMdArrowBack /> Back
          </Link>
          <p>
            Create and register for a new service here to host your own web
            authentication service on our platform to help handle your ui design
            authentication needs and system.
          </p>
          <br />
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
                  setServicePassword((event.target as HTMLInputElement).value);
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
            <div>
              <label htmlFor="service_description">
                6. Fill in the service short description:{" "}
              </label>
              <textarea
                name="service_description"
                id="service_description"
                required
                aria-required
                placeholder=""
                aria-placeholder=""
                onChange={(event) => {
                  setDescription((event.target as HTMLTextAreaElement).value);
                }}
                value={description}
              ></textarea>
            </div>
            <br />
            <div className="agreement-wrapper">
              <input type="checkbox" name="agree" id="agree" />
              <label htmlFor="agree">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, numquam est magni corrupti sint expedita minus iusto
                pariatur nihil voluptatem, eius libero autem excepturi facilis
                unde quasi! Quidem, cumque beatae quis amet sed consequuntur
                optio, dolorem, et ipsum nesciunt fuga.
              </label>
            </div>
            <br />
            <aside>
              <div>
                <p>
                  <RiErrorWarningLine /> Once the service is created, it cant be
                  edited!
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
          </form>
        </article>
      </section>
      <FooterComponent />
    </>
  );
};

export default CreateServicePage;
