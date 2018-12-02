
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
    var style = { "bottom": pos,"display":"block" };
  } else {
    var style = { "top": pos,"display":"block" };
  } // If dropdown is set to top

  child.slideDown({
    start: function () { $(this).css(style) }
  });

  $(this).addClass("dd-open");
  child.addClass("o");
  $(this).one("click", collapseDDMenu); // Set next click function
  event.stopPropagation();

  var bounding = document.querySelector(".dd-child.o").getBoundingClientRect(); // Get elements co-ordinates & check if is inside viewport
  if (bounding.left < 0) {
    $("#" + id).removeClass("r").addClass("l"); // Element is outside of viewport on left side
    console.log("out left")
  }
  if (bounding.right > (window.innerWidth || document.documentElement.clientWidth)) {
    $("#" + id).removeClass("l").addClass("r"); // Element is outside of viewport on right side
    console.log("out right")
  }
};

function collapseDDMenu() {
  $(".dd-menu.dd-open").removeClass("dd-open").one("click", expandDDMenu).children(".dd-child").slideUp().removeClass("o");
};
$(window).click(function() { 
  $(".dd-menu.dd-open").removeClass("dd-open").one("click", expandDDMenu).children(".dd-child").slideUp().removeClass("o"); 
}); // Close menus when clicked outside element & set next click function

$(document).ready(function() {
  $(".dd-menu").one("click", expandDDMenu); // Call the plugin
})