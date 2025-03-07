import React from "react";
import { RiWifiOffLine } from "react-icons/ri";

const OfflineCardComponent: React.FunctionComponent = () => {
  return (
    <>
      <aside className="offline-card-component">
        <span>
          <RiWifiOffLine />
        </span>
        <p>You seem to be offline!</p>
      </aside>
    </>
  );
};

export default OfflineCardComponent;
