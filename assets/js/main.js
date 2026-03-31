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
              sel === "section" || sel === "footer" ? "fade-up" : "zoom-in";
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
      Contact Form
    ::::::::::::::::::::::::::::::::::::*/

  $(document).ready(function () {
    $("#contact-form").on("submit", function (e) {
      e.preventDefault();

      var $form = $(this);
      var $submitBtn = $form.find('button[type="submit"]');
      var $messageBox = $(".form-message");

      $submitBtn
        .prop("disabled", true)
        .html(
          '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...',
        );

      $.ajax({
        type: "POST",
        url: $form.attr("action"),
        data: $form.serialize(),
        dataType: "json",
        headers: {
          Accept: "application/json",
        },
        success: function (response) {
          // Success Message with Close Button
          var successHTML =
            '<div class="alert alert-success alert-dismissible fade show" role="alert" style="margin-top: 20px; border-left: 5px solid #28a745;">' +
            "<strong>Success!</strong> Your message has been sent successfully. We will get back to you shortly. Thank you!" +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="float:right; background:none; border:none; font-size:20px; cursor:pointer;">&times;</button>' +
            "</div>";

          $messageBox.html(successHTML);
          $form[0].reset();

          // 10 سیکنڈ بعد خود بخود ہٹانے کے لیے
          setTimeout(function () {
            $messageBox.find(".alert").fadeOut();
          }, 10000);
        },
        error: function (error) {
          // Error Message with Close Button
          var errorHTML =
            '<div class="alert alert-danger alert-dismissible fade show" role="alert" style="margin-top: 20px; border-left: 5px solid #dc3545;">' +
            "<strong>Error!</strong> Something went wrong. Please check your connection and try again." +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="float:right; background:none; border:none; font-size:20px; cursor:pointer;">&times;</button>' +
            "</div>";

          $messageBox.html(errorHTML);

          // 10 سیکنڈ بعد خود بخود ہٹانے کے لیے
          setTimeout(function () {
            $messageBox.find(".alert").fadeOut();
          }, 10000);
        },
        complete: function () {
          $submitBtn.prop("disabled", false).text("Send Message");
        },
      });
    });

    // کراس بٹن پر کلک کرنے سے الرٹ ختم کرنے کے لیے
    $(document).on("click", ".btn-close", function () {
      $(this).parent().fadeOut();
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
})(jQuery);
