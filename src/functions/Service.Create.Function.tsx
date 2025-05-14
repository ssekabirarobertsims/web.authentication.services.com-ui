import axios from "axios";

async function ServiceCreation(
  responseMessagePlaceholderWrapper: HTMLSpanElement,
  responseMessagePlaceholder: HTMLSpanElement,
  service?: string | unknown,
  username?: string | unknown,
  email?: string | unknown,
  password?: string | unknown,
  project?: string | unknown,
  description?: string | unknown,
) {
  
  try {
    // "https://web-authentication-services-restapi.onrender.com/api/service/registration",
    const { data: response } = await axios.post("http://localhost:3000/api/service/registration", {
        service: service as string, 
        owner_username: username as string,
        owner_email: email as string,
        service_password: password as string,
        project: project as string,
        description: description as string,
    }, {
      headers: {
        "Content-Type": "Application/json",
        "Authorization": ""
      }
    })
  
    const responseMessagePlaceholderWrapper: HTMLSpanElement = window.document.querySelector(".service-warning-flag-wrapper-abc") as HTMLSpanElement;
    
    console.log(response)
    if (response.status_code === Number(200) as Required<number>) {
    console.log(response)
      responseMessagePlaceholderWrapper.style.display = "flex";
      responseMessagePlaceholder.textContent = response?.message ? response?.message : "Failed to send request!";
    } else {
    console.log(response)
      responseMessagePlaceholderWrapper.style.display = "none";
      window.setTimeout(() => window.location.href = "/authentication/redirect/blank/authorization/page-1" as Required<string>, 2500 as Required<number>);
    }
  } catch (error) {
      console.error(error);
      responseMessagePlaceholderWrapper.style.display = "flex";
      responseMessagePlaceholder.textContent = "Failed to send request!";
    throw new Error("Failed to send request to server, check network connection plz!"); 

  }
}

export default ServiceCreation;
