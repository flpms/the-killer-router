class Routes {
  add(path, view, config) {
    this[path] = {};
    if (!arguments.length) return this;
    this[path].view = view;
    this[path].config = config;
    return this;
  }
}

export default Routes;
