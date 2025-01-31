import React from "react";
import { Link } from "react-router-dom";
import { _serviceContext } from "../App";
import { GiAstronautHelmet } from "react-icons/gi";

const NavigationBarComponent: React.FC = () => {
  const service = React.useContext(_serviceContext);

  return (
    <nav>
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
              pathname: service ? "/dashboard" : "/service/login",
            }}
          >
            <li>Dashboard</li>
          </Link>
          <Link
            to={{
              pathname: service ? "/api/system/guide" : "/service/login",
            }}
          >
            <li>Guide</li>
          </Link>
          <Link
            to={{
              pathname: service ? "/dashboard" : "/service/login",
            }}
          >
            <li>Login</li>
          </Link>
          <Link
            to={{
              pathname: "/service/registration",
            }}
          >
            <li>
              <button type="button">Sign Up</button>
            </li>
          </Link>
        </ul>
      </article>
    </nav>
  );
};

export default NavigationBarComponent;
