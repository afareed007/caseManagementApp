// Base class for viewmodels and nexuses
Base = class Base {
  constructor(view, name) {
    check(view, Blaze.View);
    check(name, Match.OneOf(String, null));

    // Static properties on instance
    defineProperties(this, {
      // Reference to view
      view: { value: view },

      // Instance name
      _name: { value: new ReactiveVar(name) }
    });
  }


  // Reactively get or set the name of the instance
  name(name) {
    // Ensure type of argument
    check(name, Match.Optional(String));

    if (_.isString(name))
      this._name.set(name);
    else
      return this._name.get();
  }

  // Test the name of this instance with a regex or string
  test(test) {
    if (_.isFunction(test))
      return test(this);
    else if (_.isRegExp(test))
      return test.test(this.name());

    return test === this.name();
  }


  // Run callback when view is rendered and after flush
  onReady(callback) {
    // Ensure type of argument
    check(callback, Function);

    // Bind callback to context
    callback = callback.bind(this);

    let view = this.view;

    if (view.isRendered) {
      if (!view.isDestroyed) {
        Tracker.afterFlush(callback);
      }
    }
    else {
      view.onViewReady(callback);
    }
  }

  // Register one or more autoruns
  autorun(callback) {
    // May be an array of callbacks
    if (_.isArray(callback))
      return _.each(callback, this.autorun, this);

    // Ensure type of argument
    check(callback, Function);

    // Bind callback to context
    callback = callback.bind(this);

    let view = this.view;

    // Wait until the view is rendered and after flush
    this.onReady(function () {
      view.autorun(callback);
    });
  }

  // Run callback when view is refreshed
  onRefreshed(callback) {
    // Ensure type of argument
    check(callback, Function);

    // Bind callback to context
    callback = callback.bind(this);

    this.view.onViewReady(function () {
      if (this.renderCount > 1)
        callback();
    });
  }

  // Run callback when view is destroyed
  onDestroyed(callback) {
    // Ensure type of argument
    check(callback, Function);

    // Bind callback to context
    callback = callback.bind(this);

    this.view.onViewDestroyed(callback);
  }

  // Run callback when the current computation is invalidated
  onInvalidate(callback) {
    // Ensure type of argument
    check(callback, Function);

    // Bind callback to context
    callback = callback.bind(this);

    let computation = Tracker.currentComputation;

    if (computation)
      computation.onInvalidate(callback);
  }
};
