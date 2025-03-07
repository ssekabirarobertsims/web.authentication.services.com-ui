async function ServiceLogoutFunction(
  service?: string | unknown,
  password?: string | unknown
) {
  const request = await fetch(
    "https://web-authentication-services-restapi.onrender.com/api/service/logout",
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

  if (response.status === 200 || request.ok) {
    (
      window.document.querySelector(".logout-form-component") as HTMLElement
    ).style.display = "none";
    (
      window.document.querySelector(".loader-wrapper") as HTMLElement
    ).style.display = "flex";

    window.setTimeout(() => {
      window.location.href = "/service/login";
    }, 5000 as unknown as number);
  } else {
    (
      window.document.querySelector(".loader-wrapper") as HTMLSpanElement
    ).style.display = "flex";

    window.setTimeout(() => {
      (
        window.document.querySelector(".loader-wrapper") as HTMLSpanElement
      ).style.display = "none";

      (
        window.document.querySelector(
          ".logout-alert-message-placeholder"
        ) as HTMLSpanElement
      ).textContent = response?.message;
    }, 5000 as unknown as number);

  }
}

// logout service after a period of one day
class LogoutService {

  constructor() {
    window.setTimeout(() => {
      window.localStorage.removeItem("service_login_info");
    }, 1000 * 60 * 60 * 24 as number);
  }
}

new LogoutService();

export default ServiceLogoutFunction;
