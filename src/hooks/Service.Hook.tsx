const information: string = window.localStorage.getItem(
  "service_login_info"
) as string;
const service: string = JSON.parse(information) as string;

export default service;
