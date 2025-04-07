import React, { useContext } from "react";
import NavigationBarComponent from "../components/Navigation.Bar.Component";
import FooterComponent from "../components/Footer.Component";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";
import serviceContext from "../context/Service.Login.Information.Context";
import Loader from "../components/Loader.Component";
import axios from "axios";
import LogoutFormComponent from "../components/Logout.Form.Component";

interface Service {
  data: {
    api_key: string;
    login_date: string;
    owner: string;
    owner_email: string;
    service: string;
    service_description: string;
    service_id: string;
    accounts: unknown;
    project: string;
  };
  message: string;
}

import SiteDeveloperNavigationComponent from "../components/Developer.Navigation.Div.Component";

const DashboardPage: React.FC = () => {
  const service: Service = useContext(serviceContext) as unknown as Service;

  return (
    <>
      <NavigationBarComponent />
      <section className="dashboard-page-component-wrapper">
        <article className="__wrapper">
          <div className="service-status-bars-wrapper">
            <div className="service-status-bar">
              <h1>Service Status</h1>
              <p>
                <RiErrorWarningLine /> Your service is currently live and
                running at this very moment!
              </p>
              <button type="button">Upgrade</button>
            </div>
          </div>
          <br />
          <div className="_dashboard-content">
            <aside>
              <div>
                <h1>Service Information</h1>
              </div>
            </aside>
            <ul>
              <li>
                <div>
                  <span>Service Id</span>
                </div>
                <div>
                  <span>
                    {service?.data?.service_id
                      ? service?.data?.service_id
                      : ("undefined" as string)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    window.navigator.clipboard.writeText(
                      (service?.data?.service_id as string)
                        ? (service?.data?.service_id as string)
                        : ("undefined" as string)
                    );
                  }}
                >
                  <IoCopyOutline />
                </button>
              </li>
              <li>
                <div>
                  <span>Service Name</span>
                </div>
                <div>
                  <span>
                    {(service?.data?.service as string)
                      ? (service?.data?.service as string)
                      : ("undefined" as string)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    window.navigator.clipboard.writeText(
                      (service?.data?.service as string)
                        ? (service?.data?.service as string)
                        : ("undefined" as string)
                    );
                  }}
                >
                  <IoCopyOutline />
                </button>
              </li>
              <li>
                <div>
                  <span>Service Secrete Key</span>
                </div>
                <div>
                  <span>
                    {(service?.data?.api_key as string)
                      ? (service?.data?.api_key as string)
                      : ("undefined" as string)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    window.navigator.clipboard.writeText(
                      (service?.data?.api_key as string)
                        ? (service?.data?.api_key as string)
                        : ("undefined" as string)
                    );
                  }}
                >
                  <IoCopyOutline />
                </button>
              </li>
              <li>
                <div>
                  <span>Service Owner</span>
                </div>
                <div>
                  <span>
                    {(service?.data?.owner as string)
                      ? (service?.data?.owner as string)
                      : ("undefined" as string)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    window.navigator.clipboard.writeText(
                      (service?.data?.owner as string)
                        ? (service?.data?.owner as string)
                        : ("undefined" as string)
                    );
                  }}
                >
                  <IoCopyOutline />
                </button>
              </li>
              <li>
                <div>
                  <span>Project Name</span>
                </div>
                <div>
                  <span>
                    {(service?.data?.project as string)
                      ? (service?.data?.project as string)
                      : ("undefined" as string)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    window.navigator.clipboard.writeText(
                      (service?.data?.project as string)
                        ? (service?.data?.project as string)
                        : ("undefined" as string)
                    );
                  }}
                >
                  <IoCopyOutline />
                </button>
              </li>
              <li>
                <div>
                  <span>Registered Accounts</span>
                </div>
                <div>
                  <span>
                    {service?.data?.accounts as unknown as number} Accounts
                    Registered On Service
                  </span>
                </div>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    window.navigator.clipboard.writeText(
                      (service?.data?.accounts as string)
                        ? (service?.data?.accounts as string)
                        : ("undefined" as string)
                    );
                  }}
                >
                  <IoCopyOutline />
                </button>
              </li>
              <li>
                <div>
                  <span>Service Host</span>
                </div>
                <div>
                  <span>Web Authentication Services</span>
                </div>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    window.navigator.clipboard.writeText(
                      "Web Authentication Services" as string
                    );
                  }}
                >
                  <IoCopyOutline />
                </button>
              </li>
              <li>
                <div>
                  <span>Service Api Link</span>
                </div>
                <div>
                  <span>https://web-authentication-services-restapi.onrender.com/</span>
                </div>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    window.navigator.clipboard.writeText(
                      "https://web-authentication-services-restapi.onrender.com/" as string
                    );
                  }}
                >
                  <IoCopyOutline />
                </button>
              </li>
            </ul>
          </div>
          <br />
          <h1>Danger Zone</h1>
          <aside>
            <div>
              <p>
                <RiErrorWarningLine /> Once the service is deleted, it cant be
                edited, retrieved or reused by any user or you the owner and
                this action is irreversible!
              </p>
            </div>
          </aside>
          <div className="danger-zone">
            <div className="danger-zone-wrapper">
              <h1>Service Logout</h1>
              <p>
                Once you log out of the service, you can be able to login again.
              </p>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();

                  (
                    window.document.querySelector(
                      ".loader-wrapper"
                    ) as HTMLElement
                  ).style.display = "flex";

                  window.setTimeout(() => {
                    (
                      window.document.querySelector(".loader-wrapper") as HTMLSpanElement
                    ).style.display = "none";
              
                   window.localStorage.removeItem("service_login_info");
                   window.location.href = "/service/login";
                  }, 5000 as unknown as number);
                }}
              >
                Log out
              </button>
              <br />
              <h1>Delete Service</h1>
              <span className="warning-flag-wrapper">
                <span className="warning-flag"></span>
              </span>
              <p>Once the service is deleted, the action is irreversible.</p>
              <button
                type="button"
                onClick={async (event) => {
                  event.stopPropagation();
                  (
                    window.document.querySelector(
                      ".loader-wrapper"
                    ) as HTMLSpanElement
                  ).style.display = "flex";

                  const request = await axios.delete(
                    `https://web-authentication-services-restapi.onrender.com/api/registered/services/${service?.data?.service_id}`,
                    {
                      headers: {
                        Authorization: `Bearer ${
                          (service?.data?.api_key as string)
                            ? (service?.data?.api_key as string)
                            : ("undefined" as string)
                        }`,
                      },
                    }
                  );

                  const response = await request.data;

                  window.setTimeout(() => {
                    if (!(request.status === 200)) {
                      (
                        window.document.querySelector(
                          ".warning-flag-wrapper"
                        ) as HTMLSpanElement
                      ).style.display = "flex";
                      (
                        window.document.querySelector(
                          ".warning-flag"
                        ) as HTMLSpanElement
                      ).textContent = response?.message;
                      (
                        window.document.querySelector(
                          ".loader-wrapper"
                        ) as HTMLSpanElement
                      ).style.display = "none";
                      return;
                    } else {
                      (
                        window.document.querySelector(
                          ".loader-wrapper"
                        ) as HTMLSpanElement
                      ).style.display = "none";
                      window.localStorage.removeItem("service_login_info");
                      window.location.href = "/";
                    }
                  }, 3500 as number);
                }}
              >
                Delete Service
              </button>
            </div>
          </div>
        </article>
      </section>
      <Loader />
      <SiteDeveloperNavigationComponent />
      <LogoutFormComponent />
      <FooterComponent />
    </>
  );
};

export default DashboardPage;
