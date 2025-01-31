import React from "react";
import { v4 as uuid } from "uuid";
import { format } from "date-fns";
// import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

interface LinkInterface {
  id: string;
  value: string;
}

const FooterComponent: React.FC = () => {
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
                pathname: "/api/system/guide",
              }}
            >
              <li>Guide</li>
            </Link>
            <Link
              to={{
                pathname: "/api/system/guide",
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
          </ul>
        </aside>
        <aside>
          <h1>Developers & Engineers</h1>
          <ul>
            <a href="http://robertsims.netlify.app" target="_blank">
              <li>Developer</li>
            </a>
            <a href="http://robertsims.netlify.app" target="_blank">
              <li>Database Engineer</li>
            </a>
            <a href="http://robertsims.netlify.app" target="_blank">
              <li>Design Engineer</li>
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
