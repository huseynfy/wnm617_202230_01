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
          case "addnew-page": CatAddPage(); break;
        case "choose-location-page": 
        ChooseLocationPage(); 
        break;

        case "choose-cat-page": ChooseCatPage(); break;
        case "cat-edit-photo-page": AnimalEditPhotoPage(); 
        break;
        case "user-edit-photo-page": UserEditPhotoPage(); 
        break;
      }
    })

    // FORM SUBMISSIONS
    .on("submit", "#signin-form", function (e) {
      e.preventDefault();
      checkLoginForm();
    })

    .on("submit", "#signup-form", function (e) {
      e.preventDefault();
      submitUserSignup();
    })

    // Form submission clicks

    .on("click", ".js-submit-animal-add", function () {
      submitCatAdd();
    })
    .on("click", ".js-submit-animal-edit", function () {
      submitCatEdit();
    })
    .on("click", ".js-submit-password-edit", function () {
      submitPasswordEdit();
    })

    .on("click", ".js-submit-user-edit", function () {
      submitUserEdit();
    })
    .on("click", ".js-submit-location-add", function () {
      submitLocationAdd();
    })

    .on("click",".js-animal-delete", function(e) {
      submitDeleteCat();
   })
   .on("change", "#choose-cat-input select", function(e) {
    $("#location-animal").val(this.value);
 })

   // Image Upload
   .on("change",".imagepicker input", function(e){
    checkUpload(this.files[0])
    .then(d=>{
       console.log(d)
       let filename = `uploads/${d.result}`;
       $(this).parent().prev().val(filename)
       $(this).parent().css({
          "background-image":`url(${filename})`
       }).addClass("picked");
    })
 })
 .on("click", ".js-submit-user-upload", function(e) {
    let image = $("#user-edit-photo-image").val();
    query({
       type: "update_user_image",
       params: [image, sessionStorage.userId]
    }).then(d=>{
       if(d.error) throw(d.error);
       history.go(-1);
    })
 })
 .on("click", ".js-submit-animal-upload", function(e) {
    let image = $("#animal-edit-photo-image").val();
    query({
       type: "update_animal_image",
       params: [image, sessionStorage.catId]
    }).then(d=>{
       if(d.error) throw(d.error);
       history.go(-1);
    })
 })
 .on("submit", "#list-search-form", function(e) {
  e.preventDefault();
  let s = $(this).find("input").val();
  checkSearchForm(s);
})

    // CLICKS
    .on("click", ".js-logout", function () {
      sessionStorage.removeItem("userId");
      checkUserId();
    })

    .on("click", ".js-cat-jump", function (e) {
      try {
        e.preventDefault();
        sessionStorage.catId = $(this).data("id");
        $.mobile.navigate("#cat-profile-page");
      } catch (error) {
        throw "no id detected";
      }
    })
    .on("click",".js-location-choose-animal", function(e) {
      $("#location-animal").val(sessionStorage.catId)
      $("#location-start").val(-2);
   })
   .on("click", "[data-filter]", function(e) {
    let {filter,value} = $(this).data();
    if(value=="") ListPage();
    else checkFilter(filter,value);
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
