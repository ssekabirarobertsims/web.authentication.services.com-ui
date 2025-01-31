import React from "react";
import Lottie from "lottie-react";
import animation from "../assets/Animation - 1738226479418.json";
import { Link } from "react-router-dom";
import { RiErrorWarningLine } from "react-icons/ri";

const HeaderComponent: React.FC = () => {
  const content = React.useRef("direct api for web authentication services");

  return (
    <>
      <header>
        <article className="animation-wrapper">
          <Lottie animationData={animation} />
        </article>
        <article className="header-content-wrapper">
          <h1>{content.current.toLocaleUpperCase()}</h1>
          <p>
            Handle and make safe and secure authentications for users for your
            ui sites design without handling any backend codes with just one
            platform in one secure place like this.
          </p>
          <Link
            to={{
              pathname: "/service/registration",
            }}
          >
            <button type="button">Create Service</button>
          </Link>
        </article>
      </header>
      <br />
      <aside className="header-alert-msg">
        <div>
          <p>
            <RiErrorWarningLine /> This site is managed and developed for only
            software development purposes and help frontend and web developers
            carry out authentication for ui designs with no backend services
            only.
          </p>
        </div>
      </aside>
      <br />
      <br />
    </>
  );
};

export default HeaderComponent;
