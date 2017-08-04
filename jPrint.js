function jPrint() {

  var PRINT_ELEMENT_CLASS = 'print_element';

  var initialArgs = arguments;
  var initialClasses = {};

  function perform(initialArgs) {
    makeElementPrintable(args);
    print();
    reset();
  }

  function makeElementPrintable(args) {
    for (var i = 0; i < arguments.length; i++) {
      var e = $(arguments[i]);
      addToClass(arguments[i]);
    }
  }

  function addToClass(key) {
    var element = $(key)[0];
    initialClasses[key] = element.className;
    element.className += ' ' + PRINT_ELEMENT_CLASS; 
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

}
