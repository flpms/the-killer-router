import Routes from './routes';

export default class Router extends Routes {

  reactComponent(reactComponent) {
    this._reactComponent = reactComponent;
  }

  evaluteRoute(path) {
    if (!this[path] && !/^\w\:\/\//gi.test(path)) {
      return this['404'];
    }

    if (/^\w\:\/\//gi.test(path)) {
      return document.location.href = path;
    }

    return this[path];
  }

  navigate(path, data, title) {
    this.component = this.evaluteRoute(path);
    history.pushState(null, title, path);
    this._reactComponent && this._reactComponent.forceUpdate();
  }

  get render() {
    return this.component;
  }
}
