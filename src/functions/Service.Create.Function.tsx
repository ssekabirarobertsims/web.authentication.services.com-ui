async function ServiceCreation(
  service?: string | unknown,
  username?: string | unknown,
  email?: string | unknown,
  password?: string | unknown,
  project?: string | unknown,
  description?: string | unknown
) {
  const responseMessagePlaceholderWrapper: HTMLSpanElement = window.document.querySelector(".service-warning-flag-wrapper-abc") as HTMLSpanElement;
  const responseMessagePlaceholder: HTMLSpanElement = window.document.querySelector(".warning-flag-abc") as HTMLSpanElement;

  try {
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
    const responseMessagePlaceholderWrapper: HTMLSpanElement = window.document.querySelector(".service-warning-flag-wrapper-abc") as HTMLSpanElement;
    
    if (!request.ok) {
      responseMessagePlaceholderWrapper.style.display = "flex";
      responseMessagePlaceholder.textContent = response?.message ? response?.message : "Failed to send request!";
  
    } else {
      responseMessagePlaceholderWrapper.style.display = "none";
  
      window.setTimeout(() => window.location.href = "/authentication/redirect/blank/authorization/page-1" as string, 2500 as number);
    }
  } catch (error) {
      console.error(error);
      responseMessagePlaceholderWrapper.style.display = "flex";
      responseMessagePlaceholder.textContent = "Failed to send request!";
    throw new Error("Failed to send request to server, check network connection plz!"); 

  }
}

export default ServiceCreation;
