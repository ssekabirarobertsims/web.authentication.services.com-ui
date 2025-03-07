import React, { useRef } from "react";
import { Link } from "react-router-dom";

const HeaderComponent: React.FC = () => {
  const content = React.useRef(
    "The ultimate starter web authentication api free services for your project."
  );
  const buttonRef = useRef(null);
  const photoRef = useRef(null);

  return (
    <>
      <header>
        <article className="header-content-wrapper">
          <span>{content.current.toLocaleUpperCase()}</span>
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
            <button type="button" ref={buttonRef}>
              Get Started Free
            </button>
          </Link>
        </article>
        <article className="animation-wrapper">
          <img src="/banner_hu_bd8330c75c01695c.webp" alt="" ref={photoRef} />
        </article>
      </header>
      <br />
      <br />
    </>
  );
};

export default HeaderComponent;
