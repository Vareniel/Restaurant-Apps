/* eslint-disable no-undef */
import Drawer from '../utils/drawer';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    Drawer.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    const skipLinkElem = document.querySelector('.sekip');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#resto__container').focus();
    });
    await page.afterRender();
  }
}
export default App;
