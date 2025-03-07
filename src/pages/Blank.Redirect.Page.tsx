import React from "react";

const BlankRedirectPage: React.FC = () => {
  React.useEffect(() => {
    window.setTimeout(() => {
      window.location.href = "/service/login";
    }, 4000 as number);
  });

  return (
    <section className="blank-redirect-page">
      <h1>Service Registered Successfully</h1>
      <p>Please wait as we are redirecting page...</p>
    </section>
  );
};

export default BlankRedirectPage;
