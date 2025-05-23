import React, { useContext } from "react";
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
    _date: string;
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
import CookiesWarningComponent from "../components/Cookies.Warning.Component";
import DeviceWarningMessageComponent from "../components/Device.Warning.Message.Component";
import ServiceDashboardNavigationBarComponent from "../components/Dashboard.Navigation.Bar.Component";
import { TbLiveView } from "react-icons/tb";

const DashboardPage: React.FunctionComponent = () => {
  const service: Service = useContext(serviceContext) as unknown as Service;

  return (
    <>
      <ServiceDashboardNavigationBarComponent />
      <CookiesWarningComponent />
      <DeviceWarningMessageComponent />
      <section className="dashboard-page-component-wrapper">
        <article className="__wrapper">
          <div className="service-status-bars-wrapper">
            <div className="service-status-bar">
               <h1>
            {service?.data?.service ? service?.data?.service : "undefined"}
          </h1>
          <span>Hosted on {service?.data?._date} <button type="button" disabled className="service_status"><TbLiveView /> running</button></span>
              <p>
               Hosted by Web Authentication Services
              </p>
              <button type="button">Service running</button>
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
                Once you log out of the service, you can be able to login again at any time, no service information will be lost.
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
                      window.document.querySelector(
                        ".loader-wrapper"
                      ) as HTMLSpanElement
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
              <p>Once the service is deleted, the action is irreversible and all registered user accounts under this service will be lost including all saved emails and service Information Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum cum illo doloribus temporibus est soluta, ut dolor inventore nam.</p>
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
      <br />
      <FooterComponent />
    </>
  );
};

export default DashboardPage;
