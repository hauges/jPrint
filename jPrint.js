function jPrint(arg) {

  var PRINT_ELEMENT_CLASS = 'print_element';
  var identifierClassNumber = 0;
  var initialClasses = {};

  function perform(arg) {
    makeElementPrintable(arg);
    print();
    reset();
  }

  function makeElementPrintable(key) {
    var jq_element = $(key);
    for (var i = 0; i < jq_element.length; i++) {
      var identifierClass = 'jprint_' + identifierClassNumber++;
      initialClasses[identifierClass] = jq_element[i].className;
      jq_element[i].className += (jq_element[i].className.length == 0 ? '' : ' ')
        + identifierClass;
    }
    jq_element.addClass(PRINT_ELEMENT_CLASS);
  }

  function print() {
    window.print();
  }

  function reset() {
    Object.keys(initialClasses).forEach(function (key) {
      var jq_element = $('.'+key);
      for (var i = 0; i < jq_element.length; i++) {
        jq_element[i].className = initialClasses[key];        
      }
    });
  }

  perform(arg);

}
