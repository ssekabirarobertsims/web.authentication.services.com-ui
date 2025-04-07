import React, { useRef, useState } from "react";
import service from "../hooks/Service.Login.Information.Hook";
import ServiceLogoutFunction from "../functions/Logout.Function";

interface Service {
  service: string;
  service_id: string;
  login_date: string;
  api_key: string;
  owner: string;
  owner_email: string;
  service_description: string;
  accounts: string;
  project: string;
}

const currentLoggedInService: Service = service as Service;

const LogoutFormComponent: React.FunctionComponent = () => {
  const buttonRef = useRef(null);
  const [password, setPassword] = useState("" as unknown as string);

  return (
    <>
      <aside className="logout-form-component">
        <form action="" method="post" encType="multipart/form-data">
          <h1>Confirm logout</h1>
          <input
            type="password"
            name="logout-password-input"
            id="logout-password-input"
            placeholder="Enter your password"
            aria-placeholder="Enter your password"
            required
            aria-required
            onChange={(event) => {
              setPassword(
                (event.target as HTMLInputElement).value as unknown as string
              );
            }}
            value={password}
          />
          <button
            type="button"
            ref={buttonRef}
            onClick={(event) => {
              event.stopPropagation();
              ServiceLogoutFunction(
                currentLoggedInService?.service
                  ? (currentLoggedInService.service as unknown as string)
                  : undefined,
                password as string | number
              );
            }}
          >
            Confirm
          </button>
        </form>
      </aside>
    </>
  );
};

export default LogoutFormComponent;
