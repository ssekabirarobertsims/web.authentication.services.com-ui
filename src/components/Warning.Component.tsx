import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";

const WarningComponent: React.FunctionComponent = () => {
  const content = React.useRef(`This site is managed and developed for only
            software development purposes and help frontend and web developers
            carry out authentication for ui designs with no backend services
            only.`);

  return (
    <>
      <br />
      <aside className="header-alert-msg">
        <div>
          <p>
            <RiErrorWarningLine /> {content.current}
          </p>
        </div>
      </aside>
      <br />
      <br />
    </>
  );
};

export default WarningComponent;
