import React from "react";
import { v4 as uuid } from "uuid";
import { format } from "date-fns";
// import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

interface LinkInterface {
  id: string;
  value: string;
}

const FooterComponent: React.FunctionComponent = () => {
  const [content, setContent] = React.useState([
    {
      id: uuid() as string,
      value: "Guide" as string,
    },
    {
      id: uuid() as string,
      value: "Sponsor" as string,
    },
  ] as LinkInterface[]);

  React.useEffect(() => {
    setContent(content);
  }, [content]);

  return (
    <footer>
      <article className="footer-content-wrapper">
        <aside>
          <h1>Support</h1>
          <ul>
            <Link
              to={{
                pathname: "/guide",
              }}
            >
              <li>Guide</li>
            </Link>
            <Link
              to={{
                pathname: "/guide",
              }}
            >
              <li>Help</li>
            </Link>
            <Link
              to={{
                pathname: "",
              }}
            >
              <li>Sponsors</li>
            </Link>
            <a href="https://jsonresources-api.netlify.app/" target="_blank">
              <li>json resources api</li>
            </a>
          </ul>
        </aside>
        <aside>
          <h1>Developers & More</h1>
          <ul>
            <a href="http://ssekabirarobertsims.netlify.app" target="_blank">
              <li>Developer</li>
            </a>
            <a href="http://ssekabirarobertsims.netlify.app" target="_blank">
              <li>Database Engineer</li>
            </a>
            <a
              href="https://web-authentication-services-restapi.onrender.com/"
              target="_blank"
            >
              <li>API</li>
            </a>
            <a href="http://stacktechnologies.netlify.app" target="_blank">
              <li>Organization</li>
            </a>
          </ul>
        </aside>
        <aside>
          <h1>Terms & Policies</h1>
          <ul>
            <Link
              to={{
                pathname: "",
              }}
            >
              <li>Terms</li>
            </Link>
            <Link
              to={{
                pathname: "",
              }}
            >
              <li>Policies</li>
            </Link>
          </ul>
        </aside>
      </article>
      <div className="copyright-wrapper">
        <span className="copyright">
          Authentication Web Services Developer Tool &copy;right{" "}
          {format(new Date(), "yyyy")} rights reserved
        </span>
      </div>
    </footer>
  );
};

export default FooterComponent;
