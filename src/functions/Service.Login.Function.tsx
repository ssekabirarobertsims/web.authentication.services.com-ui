async function ServiceLogin(
  service?: string | unknown,
  password?: string | unknown
) {
  const request = await fetch(
    "https://web-authentication-services-restapi.onrender.com/api/service/login",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        service: service,
        service_password: password,
      }),
    }
  );

  const response = await request.json();

  (
    window.document.querySelector(".loader-wrapper") as HTMLSpanElement
  ).style.display = "flex";

  if (!request.ok) {
    (
      window.document.querySelector(".warning-flag-wrapper") as HTMLSpanElement
    ).style.display = "flex";
    (
      window.document.querySelector(".warning-flag") as HTMLSpanElement
    ).textContent = response?.message;

    window.setTimeout(() => {
      (
        window.document.querySelector(".loader-wrapper") as HTMLSpanElement
      ).style.display = "none";
    }, 2500 as number);
  } else {
    window.localStorage.setItem("service_login_info", JSON.stringify(response));

    (
      window.document.querySelector(".warning-flag-wrapper") as HTMLSpanElement
    ).style.display = "none";

    window.setTimeout(() => {
      (
        window.document.querySelector(".loader-wrapper") as HTMLSpanElement
      ).style.display = "none";

      window.location.href = "/dashboard" as string;
    }, 2500 as number);
  }
}

export default ServiceLogin;
