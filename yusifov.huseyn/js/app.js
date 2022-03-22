$(() => {
    checkUserId();
 
    // EVENT DELEGATION
    $(document)
 
    // FORM SUBMISSIONS
    .on("submit", "#signin-form", function(e) {
       e.preventDefault();
       checkLoginForm();
    })
 
 
    // CLICKS
    .on("click", ".js-logout", function() {
       sessionStorage.removeItem("userId");
       checkUserId();
    })
 
 
   // ACTIVATE TOOLS
   .on("click", "[data-activate]", function() {
      let target = $(this).data("activate");
      $(target).addClass("active")
   })
   .on("click", "[data-deactivate]", function() {
      let target = $(this).data("deactivate");
      $(target).removeClass("active")
   })
   .on("click", "[data-toggle]", function() {
      let target = $(this).data("toggle");
      $(target).toggleClass("active")
      this.style.display='none'
   })
   .on("click", "[data-activateone]", function() {
      let target = $(this).data("activateone");
      $(target).addClass("active")
         .siblings().removeClass("active")
   });

   // Footer Template Activation
   $("[data-template]").each(function(){
      let target = $(this).data("template");
      $(this).html($(target).html())
   });

   // Active Menu Control
   [,"#recent-page","#list-page","#user-profile-page"].forEach((p,i)=>{
      if(window.location.hash === p) {
         $(`.nav-icon-set li:nth-child(${i})`).addClass("active");
      }
   });
 });

