import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { _serviceContext } from "../App";
import { GiAstronautHelmet } from "react-icons/gi";

const NavigationBarComponent: React.FC = () => {
  const buttonRef = useRef(null);

  return (
    <nav>
      <aside className="navigation-bar-content-wrapper">
      <article>
        <span>
          <span className="logo">
            <GiAstronautHelmet />
          </span>{" "}
          Web Authentication Services
        </span>
      </article>
      <article className="_nav-bar-content">
        <ul>
          <Link
            to={{
              pathname: "/",
            }}
          >
            <li>Home</li>
          </Link>
          <Link
            to={{
              pathname: "/dashboard",
            }}
          >
            <li>Dashboard</li>
          </Link>
          <Link
            to={{
              pathname: "/api/system/guide",
            }}
          >
            <li>Guide</li>
          </Link>
          <Link
            to={{
              pathname: "/dashboard",
            }}
          >
            <li>Login</li>
          </Link>
        </ul>
      </article>
          <Link
            to={{
              pathname: "/service/registration",
            }}
          >
              <button type="button" ref={buttonRef}>Sign Up</button>
          </Link>
      </aside>
    </nav>
  );
};

export default NavigationBarComponent;
