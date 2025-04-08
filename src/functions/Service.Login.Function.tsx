async function ServiceLoginFunction(
  service?: string | unknown,
  password?: string | unknown
) {
  const responseMessagePlaceholderWrapper: HTMLSpanElement = window.document.querySelector(".service-warning-flag-wrapper-xyz") as HTMLSpanElement;
  const responseMessagePlaceholder: HTMLSpanElement = window.document.querySelector(".warning-flag-xyz") as HTMLSpanElement;

  try {
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
  
    if (!request.ok) {
      responseMessagePlaceholderWrapper.style.display = "flex";
      responseMessagePlaceholder.textContent = response?.message ? response?.message : "Failed to send request!";
    } else {
      window.localStorage.setItem(
        "service_login_info",
        window.encodeURIComponent(JSON.stringify(response))
      );
  
      responseMessagePlaceholderWrapper.style.display = "none";
  
      window.setTimeout(() => window.location.href = "/dashboard" as string, 2500 as number);
    }
  } catch (error) {
    console.error(error);
    responseMessagePlaceholderWrapper.style.display = "flex";
    responseMessagePlaceholder.textContent = "Failed to send request!";
    throw new Error("Failed to send request to server, check network connection plz!"); 
  }
} 

export default ServiceLoginFunction;
