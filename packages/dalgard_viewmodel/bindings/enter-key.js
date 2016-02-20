ViewModel.addBinding("enterKey", {
  on: "keyup",

  get(event, $elem, prop) {
    if (event.which === 13)
      prop(event, this.args, this.hash);
  }
});
