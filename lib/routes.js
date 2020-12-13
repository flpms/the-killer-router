class Routes {
  constructor() {
    this.routes = new Map();
  }

  add(path, view, config) {
    if (!arguments.length) return this;
    this.routes.set(path, { view, config });
    return this;
  }
}

export default Routes;
