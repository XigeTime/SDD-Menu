// Simple dropdown menu - Easy to use 
// Designed by xigeti.me - forumonic.com
function expandIt() {     
  var id = $(this).attr("id"), // Get elements ID.
      child = $(this).children(".dd-child"), // Find child dropdown element.
      parent = $(this).parent().hasClass("dd-menu-inline"),
      open = $(".dd-menu.open").length; // Check if is inline menu.
  
  if ( open > 0 ) {
    collapseAll()
  }

  if (parent) {
    var pos = $(this).height(); // Get height of dd-menu element.
  } else {
    var pos = $("#" + id).parent().height(); // Get height of parent element.
  }

  if ( $(this).hasClass("t") ) {
    var sty = { "bottom": pos,"display":"block" };
  } else {
    var sty = { "top": pos,"display":"block" };
  }

  child.slideDown({
    start: function () { $(this).css(sty) }
  });
  $(this).addClass("open");
  $(this).one("click", collapseAll); // Set next click function
  event.stopPropagation();
};

function collapseAll() {
  $(".dd-menu.open").removeClass("open").one("click", expandIt).children(".dd-child").slideUp();
};
$(window).click(function() { 
  $(".dd-menu.open").removeClass("open").one("click", expandIt);
  $(".dd-child").slideUp(); 
}); // Close menus when clicked outside element & set next click function

$(document).ready(function() {
  $(".dd-menu").one("click", expandIt); // Call the plugin
})