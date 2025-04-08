import React, { useRef } from "react";
import { BiCookie } from "react-icons/bi";
import AllowSiteCookies from "../functions/Allow.Cookies.Function";

const CookiesWarningComponent: React.FunctionComponent = () => {
  const buttonReference = useRef(null);

  return window.localStorage.getItem("cookies_enabled") ? (
    ""
  ) : (
    <>
      <aside
        className={String(
          "site-main-page-cookies-warning-component"
        ).toLocaleLowerCase()}
      >
        <article
          className={String(
            "site-main-page-cookies-warning-component-content-wrapper"
          ).toLocaleLowerCase()}
        >
          <h1>
            <BiCookie />
          </h1>
          <h2>Site Cookies Settings</h2>
          <p>
            Web authentication developer tool uses cookies to improve on the
            functionality of this developer tool. Allowing cookies can be help
            to boost performance and improve user experiences sunt nesciunt
            possimus exercitationem, molestias unde, expedita ut enim quae
            similique dolores. Facilis at temporibus minima blanditiis, corrupti
            perferendis tenetur dignissimos vitae ex quisquam aperiam veniam
            ipsum nesciunt.
          </p>
          <button
            type="button"
            ref={buttonReference.current}
            onClick={(event) => {
              event.stopPropagation();
              AllowSiteCookies(
                window.document.querySelector(
                  ".site-main-page-cookies-warning-component"
                ) as HTMLElement
              );
            }}
          >
            Allow Cookies
          </button>
        </article>
      </aside>
    </>
  );
};

export default CookiesWarningComponent;
