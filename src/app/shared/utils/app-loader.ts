export class AppLoader {
  public static hide(): void {
    const loaderElement = document.getElementsByClassName('app-loader').item(0);
    if (loaderElement) {
      loaderElement.classList.add('hide');
    }
  }
}
