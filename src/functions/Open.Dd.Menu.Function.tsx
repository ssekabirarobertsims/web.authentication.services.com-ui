const OpenDropDownMenu = (): void => {
  const element: HTMLElement = window.document.querySelector(
    ".dd-menu-component"
  ) as HTMLElement as HTMLElement;

  element.style.display = "flex";
};

export default OpenDropDownMenu;
