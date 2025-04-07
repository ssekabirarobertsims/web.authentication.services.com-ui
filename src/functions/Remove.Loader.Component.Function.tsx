const RemoveLoader = (): void => {
  const element: HTMLElement = window.document.querySelector(
    ".spinner-component-wrapper"
  ) as HTMLElement as HTMLElement;
  window.setTimeout(() => {
    element.style.display = "none";
  }, 6000 as number);
};

export default RemoveLoader;
