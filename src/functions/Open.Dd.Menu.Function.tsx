const OpenDropDownMenu = (): void => {
  const element: HTMLElement = window.document.querySelector(
    ".dd-menu-wrapper"
  ) as HTMLElement as HTMLElement;

  element.style.width = "min(100%, 100%)";
};

export default OpenDropDownMenu;
