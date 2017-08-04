function jPrint() {

  var PRINT_ELEMENT_CLASS = 'print_element';

  var initialArgs = arguments;
  var initialClasses = {};

  function perform() {
    makeElementPrintable(initialArgs);
    print();
    reset();
  }

  function makeElementPrintable(args) {
    for (var i = 0; i < arguments.length; i++) {
      addToClass(args[i]);
    }
  }

  function addToClass(key) {
    var element = $(key);
    initialClasses[key] = element[0].className;
    element.addClass(PRINT_ELEMENT_CLASS);
  }

  function print() {
    window.print();
  }

  function reset() {
    Object.keys(initialClasses).forEach(function (key) {
      var element = $(key)[0];
      element.className = initialClasses[key];
    });
  }

  perform();

}
