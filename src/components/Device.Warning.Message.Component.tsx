import React from "react";
import { MdOutlineDevices } from "react-icons/md";

const DeviceWarningMessageComponent: React.FunctionComponent = () => {
  return (
    <aside className={String("device-warning-message-component")}>
      <div>
        <article>
          <h1>
            <MdOutlineDevices />
          </h1>
          <span>Device Warning</span>
          <p>
            This application is not optimized for mobile devices. Please use a
            desktop or laptop computer for the best experience and performance
            of this application to avoid any issues or limitations that may
            arise from using a mobile device or tablet or any device below
            1440px to access this application or website.
          </p>
        </article>
      </div>
    </aside>
  );
};

export default DeviceWarningMessageComponent;
