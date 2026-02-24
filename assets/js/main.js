(function ($) {
  "use strict";

  /*:::::::::::::::::::::::::::::::::::
            Navbar Area
    :::::::::::::::::::::::::::::::::::*/

  // Navbar Sticky
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
      $(".navbar").addClass("bg-primari");
    } else {
      $(".navbar").removeClass("bg-primari");
    }
  });

  //Smoth Scroll
  $(function () {
    $(".nav-link, .smoth-scroll").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 0,
          },
          1000,
        );
      event.preventDefault();
    });
  });

  /*==========================
        Hero Area Slider
    ============================*/

  $(".hero-area-slids").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    doots: false,
    autoplay: true,
    animateOut: "fadeOutRight",
    animateIn: "fadeIn",
  });
  //Wow Animation
  new WOW().init();

  // Auto-apply AOS attributes to sections and common blocks, then init AOS
  $(function () {
    try {
      var selectors = [
        "section",
        "#header",
        "footer",
        ".single-featured-item-wrap",
        ".single-service",
        ".single-portfolio",
        ".single-faq",
        ".single-blog",
        ".single-testimonial",
        ".single-team",
        ".single-price-box",
        ".floating-social-contact",
        "#contact-form",
      ];

      selectors.forEach(function (sel) {
        document.querySelectorAll(sel).forEach(function (el, idx) {
          if (!el.hasAttribute("data-aos")) {
            // Stagger animations slightly for repeat items
            var defaultType =
              sel === "section" || sel === "#header" || sel === "footer"
                ? "fade-up"
                : "zoom-in";
            el.setAttribute("data-aos", defaultType);
          }
          if (!el.hasAttribute("data-aos-duration")) {
            el.setAttribute("data-aos-duration", "700");
          }
        });
      });

      if (typeof AOS !== "undefined") {
        AOS.init({ duration: 800, once: true });
      }
    } catch (e) {
      // fail silently if AOS isn't available
      console.warn("AOS auto-apply failed:", e);
    }
  });
  /*==========================
        Hero Title typer
    ============================*/
  var element = $(".typed");

  $(function () {
    element.typed({
      strings: [
        "Full Stack Web Developer",
        "Laravel Developer",
        "Frontend & Backend Expert",
        "Freelance Web Developer",
      ],
      typeSpeed: 100,
      loop: true,
      autoplay: true,
    });
  });

  /*::::::::::::::::::::::::::::::::::::
       Portfolio Section
    ::::::::::::::::::::::::::::::::::::*/

  lightbox.option({
    imageFadeDuration: 800,
    resizeDuration: 500,
    wrapAround: true,
  });

  $(".portfolio-area").mixItUp();

  /*::::::::::::::::::::::::::::::::::::
       Testimonial Section
    ::::::::::::::::::::::::::::::::::::*/

  $(".testimonials").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    dots: false,
  });

  /*::::::::::::::::::::::::::::::::::::
       Contact Area 
    ::::::::::::::::::::::::::::::::::::*/
  var form = $("#contact-form");

  var formMessages = $(".form-message");
  $(form).submit(function (e) {
    e.preventDefault();
    var formData = $(form).serialize();
    $.ajax({
      type: "POST",
      url: $(form).attr("action"),
      data: formData,
    })
      .done(function (response) {
        $(formMessages).removeClass("error");
        $(formMessages).addClass("success");
        $(formMessages).text(response);

        $("#contact-form input,#contact-form textarea").val("");
      })
      .fail(function (data) {
        $(formMessages).removeClass("success");
        $(formMessages).addClass("error");

        if (data.responseText !== "") {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text(
            "Oops! An error occured and your message could not be sent.",
          );
        }
      });
  });

  /*::::::::::::::::::::::::::::::::::::
       Floating Social Contact
    ::::::::::::::::::::::::::::::::::::*/
  $(".floating-toggle").on("click", function () {
    $(".floating-menu").toggleClass("float-show");
  });

  document
    .querySelector(".floating-toggle")
    .addEventListener("click", function () {
      const menu = document.querySelector(".floating-menu");
      menu.style.display = menu.style.display === "none" ? "flex" : "none";
      this.querySelector("i").style.transform =
        menu.style.display === "none" ? "rotate(0deg)" : "rotate(45deg)";
      this.querySelector("i").style.transition = "transform 0.3s ease";
    });

  /*::::::::::::::::::::::::::::::::::::
    Preloader
    ::::::::::::::::::::::::::::::::::::*/
  $(window).on("load", function () {
    $(".preloader").fadeOut();
  });
})(jQuery);
