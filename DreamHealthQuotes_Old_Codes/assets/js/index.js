// navbar Code Start
let dropdownMenu = $(".nav-item.dropdown");

dropdownMenu.hover(
  function () {
    $(this).addClass("show");
    $(this).find(".dropdown-menu").addClass("show");
  },
  function () {
    $(this).removeClass("show");
    $(this).find(".dropdown-menu").removeClass("show");
  }
);

// navbar Code End
