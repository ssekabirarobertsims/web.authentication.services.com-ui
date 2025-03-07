const information: string = window.localStorage.getItem(
  "service_login_info"
) as string;

interface Service {
  service: string;
  service_id: string;
  login_date: string;
  api_key: string;
  owner:string;
  owner_email: string;
  service_description: string;
  accounts: string;
  project: string;
}

const service: Service = JSON.parse(information) as Service;

export default service;
