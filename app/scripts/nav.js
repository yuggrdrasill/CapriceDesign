(function() {
  require(['jquery'], function($) {
    var swapClass;
    swapClass = function(target, baseClass, swapClass) {
      $(target).addClass(baseClass);
      return $(target).removeClass(swapClass);
    };
    return $("a[class^='btn-'],span[class^='btn-']").each(function(index, element) {
      var baseClass, hoverClass, target;
      target = $(this);
      baseClass = target.attr("class");
      hoverClass = baseClass + "-hover";
      target.on("mouseover", function() {
        return swapClass(target, hoverClass, baseClass);
      });
      return target.on("mouseout", function() {
        return swapClass(target, baseClass, hoverClass);
      });
    });
  });

}).call(this);
