class Routes {
  add(path, execution) {
    if (!arguments.length) return this;
    this[path] = execution;
    return this;
  }
}

export default Routes;
