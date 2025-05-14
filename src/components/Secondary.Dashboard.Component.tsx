import React from "react";
import { Link } from "react-router-dom";
import { GiAstronautHelmet } from "react-icons/gi";

const SecondaryNavigationBarComponent: React.FunctionComponent = () => {
  return (
    <nav className="secondary-navigation-bar">
      <aside className="secondary-navigation-bar-content-wrapper">
        <Link to={{
            pathname: "/",
            search: "page=home"
        }}>
            <span className="logo">
              <GiAstronautHelmet />
            </span>{" "}
            Web Authentication Services
        </Link>
      </aside>
    </nav>
  );
};

export default SecondaryNavigationBarComponent;
