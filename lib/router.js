import Routes from './routes';

export default class Router extends Routes {

  constructor() {
    this.route = {};
  }

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
    const {view, config} = this.evaluteRoute(path);
    this.component = view;
    this.activeRouteConfig = { config, data };
    history.pushState(null, title, path);
    this._reactComponent && this._reactComponent.forceUpdate();
  }

  get render() {
    return this.component;
  }
}
