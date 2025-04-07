const CloseDropDownMenu = (): void => {
  const element: HTMLElement = window.document.querySelector(
    ".dd-menu-wrapper"
  ) as HTMLElement as HTMLElement;

  element.style.width = "min(0%, 0%)";
};

export default CloseDropDownMenu;
