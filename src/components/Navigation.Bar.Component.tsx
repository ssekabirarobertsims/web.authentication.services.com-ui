import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { GiAstronautHelmet } from "react-icons/gi";
import DdMenuComponent from "./Dd.Menu.Component";

const NavigationBarComponent: React.FunctionComponent = () => {
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
                pathname: "/guide",
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
          <button type="button" ref={buttonRef}>
            Sign Up
          </button>
        </Link>
        <DdMenuComponent />
      </aside>
    </nav>
  );
};

export default NavigationBarComponent;
