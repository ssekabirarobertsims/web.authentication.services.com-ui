import service from "../hooks/Service.Login.Information.Hook";
import React from "react";

const serviceContext = React.createContext(service);

export default serviceContext;