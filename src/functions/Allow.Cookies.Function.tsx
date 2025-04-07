const AllowSiteCookies = (element: HTMLElement) => {
  window.localStorage.setItem("cookies_enabled", "true" as string);
  element.style.display = "none";
};

export default AllowSiteCookies;
