async function ServiceCreation(
  service?: string | unknown,
  username?: string | unknown,
  email?: string | unknown,
  password?: string | unknown,
  project?: string | unknown,
  description?: string | unknown
) {
  const request = await fetch(
    "https://web-authentication-services-restapi.onrender.com/api/service/registration",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        service: service as string,
        owner_username: username as string,
        owner_email: email as string,
        service_password: password as string,
        project: project as string,
        description: description as string,
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
    ).textContent = response?.error;

    window.setTimeout(() => {
      (
        window.document.querySelector(".loader-wrapper") as HTMLSpanElement
      ).style.display = "none";
    }, 2500 as number);
  } else {
    (
      window.document.querySelector(".warning-flag-wrapper") as HTMLSpanElement
    ).style.display = "none";

    window.setTimeout(() => {
      (
        window.document.querySelector(".loader-wrapper") as HTMLSpanElement
      ).style.display = "none";

      window.location.href = "/authentication/redirect/blank/authorization/page-1" as string;
    }, 2500 as number);
  }
}

export default ServiceCreation;
