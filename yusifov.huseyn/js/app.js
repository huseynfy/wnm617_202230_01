$(() => {
  checkUserId();

  // EVENT DELEGATION
  $(document)

   .on("pagecontainerbeforeshow", function (event, ui) {
      // Page Routing
      switch (ui.toPage[0].id) {
        case "recent-page":
          RecentPage();
          break;
        case "list-page":
          ListPage();
          break;
        case "user-profile-page":
          UserProfilePage();
          break;
        case "cat-profile-page":
          CatProfilePage();
          break;
          case "cat-edit-page":
            CatEditPage();
          break;
          case "edit-profile-page":
            UserEditPage();
          break;
      }
    })

    // FORM SUBMISSIONS
    .on("submit", "#signin-form", function (e) {
      e.preventDefault();
      checkLoginForm();
    })

    // CLICKS
    .on("click", ".js-logout", function () {
      sessionStorage.removeItem("userId");
      checkUserId();
    })

    .on("click", ".js-cat-jump", function (e) {
       try {
         e.preventDefault();
         sessionStorage.catId = $(this).data('id');
         $.mobile.navigate("#cat-profile-page")
       } catch (error) {
          throw('no id detected')
       }
    })

    // ACTIVATE TOOLS
    .on("click", "[data-activate]", function () {
      let target = $(this).data("activate");
      $(target).addClass("active");
    })
    .on("click", "[data-deactivate]", function () {
      let target = $(this).data("deactivate");
      $(target).removeClass("active");
    })
    .on("click", "[data-toggle]", function () {
      let target = $(this).data("toggle");
      $(target).toggleClass("active");
      this.style.display = "none";
    })
    .on("click", "[data-activateone]", function () {
      let target = $(this).data("activateone");
      $(target).addClass("active").siblings().removeClass("active");
    });

  // Footer Template Activation
  $("[data-template]").each(function () {
    let target = $(this).data("template");
    $(this).html($(target).html());
  });

  // Active Menu Control
  [, "#recent-page", "#list-page", "#user-profile-page"].forEach((p, i) => {
    if (window.location.hash === p) {
      $(`.nav-icon-set li:nth-child(${i})`).addClass("active");
    }
  });
});
