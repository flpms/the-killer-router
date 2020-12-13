import Routes from './routes';

export default class Router extends Routes {

  constructor() {
    super();
    this.route = new Map();
    this.previousRoute = null;
  }

  reactComponent(reactComponent) {
    this._reactComponent = reactComponent;
    this.paramRoutes = new Map();
    this.routes.forEach((v, key) => /(\:\w*)/g.test(key) ?
        this.paramRoutes.set(key, key.split('/')) :
        null);
  }

  evaluteRoute(path) {
    let view;
    const pathParams = path.split('/');

    if (/^\w\:\/\//gi.test(path)) {
      return document.location.href = path;
    }

    if (this.routes.get(path)) {
      this.route.clear();
      return this.routes.get(path);
    }

    this.previousRoute = this.actualRoute;

    this.paramRoutes.forEach((value, key) => {
      const matchParams = pathParams
        .filter(param =>
          value.find(val => val === param));
      if (value.length === pathParams.length &&
        matchParams && matchParams.length
      ) {
        value.forEach((val, index) => {
          if (pathParams[index] !== val && /\:/gi.test(val))
            this.route.set(val, pathParams[index]);
        });

        view = this.routes.get(key);
      }
    });

    return view;
  }

  navigate(path, data, title) {
    const { view, config} = this.evaluteRoute(path);
    this.component = view;
    this.activeRoute = {
      ...config,
      ...data
    };
    history.pushState(null, title, path);
    this._reactComponent && this._reactComponent.forceUpdate();
  }

  get render() {
    return this.component;
  }
}
