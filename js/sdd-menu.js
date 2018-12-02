
// Simple dropdown menu - Easy to use 
// Designed by xigeti.me - forumonic.com

function expandDDMenu() {     
  var id = $(this).attr("id"), // Get elements ID.
      child = $(this).children(".dd-child"), // Find child dropdown element.
      parent = $(this).parent().hasClass("dd-menu-container"), // Check if has dd-container.
      open = $(".dd-menu.dd-open").length; // Check if any menus are currently open.
    
  if ( open > 0 ) {
    collapseDDMenu() // Close open menus.
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
  $(this).addClass("dd-open");
  $(this).one("click", collapseDDMenu); // Set next click function
  event.stopPropagation();
};

function collapseDDMenu() {
  $(".dd-menu.dd-open").removeClass("dd-open").one("click", expandDDMenu).children(".dd-child").slideUp().removeClass("o");
};
$(window).click(function() { 
  $(".dd-menu.dd-open").removeClass("dd-open").one("click", expandDDMenu).children(".dd-child").slideUp().removeClass("o"); 
  $(".dd-child").slideUp(); 
}); // Close menus when clicked outside element & set next click function

$(document).ready(function() {
  $(".dd-menu").one("click", expandDDMenu); // Call the plugin
})