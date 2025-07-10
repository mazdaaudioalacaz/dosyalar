/*============== Main Js Start ========*/

(function ($) {
  "use strict";

  /*============== Header Hide Click On Body Js ========*/
  $('.navbar-toggler.header-button').on('click', function () {
    if ($('.body-overlay').hasClass('show')) {
      $('.body-overlay').removeClass('show');
    } else {
      $('.body-overlay').addClass('show');
    }
  });
  $('.body-overlay').on('click', function () {
    $('.header-button').trigger('click');
  });



  /* ==========================================
  *     Start Document Ready function
  ==========================================*/
  $(document).ready(function () {
    "use strict";
    /*================== Password Show Hide Js ==========*/
    $(".toggle-password").on('click', function () {
      $(this).toggleClass(" fa-eye-slash");
      var input = $($(this).attr("id"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });

    /*================== Show Login Toggle Js ==========*/
    $('#showlogin').on('click', function () {
      $('#checkout-login').slideToggle(700);
    });

    /*================== Show Coupon Toggle Js ==========*/
    $('#showcupon').on('click', function () {
      $('#coupon-checkout').slideToggle(400);
    });



   

    


    /* ========================= Latest Slider Js Start ===============*/


    /*======================= Mouse hover Js Start ============*/
    $('.mousehover-item').on('mouseover', function () {
      $('.mousehover-item').removeClass('active')
      $(this).addClass('active')
    });

    /*================== Sidebar Menu Js Start =============== */
    // Sidebar Dropdown Menu Start
    $(".has-dropdown > a").on('click',function (e) {
      e.preventDefault();
      var $submenu = $(this).next(".sidebar-submenu");
      var $parent = $(this).parent();
      if ($submenu.css("display") === "block") {
        $submenu.slideUp(200);
        $parent.removeClass("active");
      } else {
        $(".sidebar-submenu").not($submenu).slideUp(200);
        $(".has-dropdown.active").removeClass("active");
        $parent.addClass("active");
        $submenu.slideDown(200);
      }
    });



    /*==================== Sidebar Icon & Overlay js ===============*/
    $(".dashboard-body__bar-icon").on("click", function () {
      $(".sidebar-menu").addClass('show-sidebar');
      $(".sidebar-overlay").addClass('show');
    });
    $(".sidebar-menu__close, .sidebar-overlay").on("click", function () {
      $(".sidebar-menu").removeClass('show-sidebar');
      $(".sidebar-overlay").removeClass('show');
    });

    /*=================== Nice Select Start Js ==================*/
    // $('select').niceSelect();

    /*================= Increament & Decreament Js Start ======*/
    const productQty = $(".product-qty");
    productQty.each(function () {
      const qtyIncrement = $(this).find(".product-qty__increment");
      const qtyDecrement = $(this).find(".product-qty__decrement");
      let qtyValue = $(this).find(".product-qty__value");
      qtyIncrement.on("click", function () {
        var oldValue = parseFloat(qtyValue.val());
        var newVal = oldValue + 1;
        qtyValue.val(newVal).trigger("change");
      });
      qtyDecrement.on("click", function () {
        var oldValue = parseFloat(qtyValue.val());
        if (oldValue <= 0) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        qtyValue.val(newVal).trigger("change");
      });
    });

    /*======================= Event Details Like Js Start =======*/
    $('.hit-like').each(function () {
      $(this).on(click(function () {
        $(this).toggleClass('liked')
      }));
    });

    /* ========================= Odometer Counter Js Start ========== */
    $(".counterup-item").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
            var el = document.querySelectorAll('.odometer')[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });

    /*============** Number Increment Decrement **============*/
    $(".add").on("click", function () {
      if ($(this).prev().val() < 999) {
        $(this)
          .prev()
          .val(+$(this).prev().val() + 1);
      }
    });
    $(".sub").on("click", function () {
      if ($(this).next().val() > 1) {
        if ($(this).next().val() > 1)
          $(this)
            .next()
            .val(+$(this).next().val() - 1);
      }
    });

    /* =================== User Profile Upload Photo Js Start ========== */
    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
          $('#imagePreview').hide();
          $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
      }
    }
    $("#imageUpload").change(function () {
      readURL(this);
    });

  });
  /*==========================================
  *      End Document Ready function
  // ==========================================*/

  /*========================= Preloader Js Start =====================*/

  $(window).on("load", function () {
    $("#loading").fadeOut();
  })

  /*========================= Header Sticky Js Start ==============*/
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 60) {
      $('.header').addClass('fixed-header');
    }
    else {
      $('.header').removeClass('fixed-header');
    }
  });

  /*============================ Scroll To Top Icon Js Start =========*/
  var btn = $('.scroll-top');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');

  });

  /*============================ Header Search =========*/

  $('.header-search-icon').on('click', function () {
    $('.header-search-hide-show').addClass('show');
    $('.header-search-icon').hide();
    $('.close-hide-show').addClass('show');
  });

  $('.close-hide-show').on('click', function () {
    $('.close-hide-show').removeClass('show');
    $('.header-search-hide-show').removeClass('show');
    $('.header-search-icon').show();
  });



  /*============================ header menu show hide =========*/
  $('.sidebar-menu-show-hide').on('click', function () {
    $('.sidebar-menu-wrapper').addClass('show');
    $(".sidebar-overlay").addClass('show');
  });

  $('.sidebar-overlay, .close-hide-show').on('click', function () {
    $('.sidebar-menu-wrapper').removeClass('show');
    $(".sidebar-overlay").removeClass('show');
  });


  /*---------- 05. Scroll To Top ----------*/
  // progressAvtivation
  if ($('.scroll-top').length > 0) {
    var scrollTopbtn = document.querySelector('.scroll-top');
    var progressPath = document.querySelector('.scroll-top path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 800;
    jQuery(window).on('scroll', function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(scrollTopbtn).addClass('show');
      } else {
        jQuery(scrollTopbtn).removeClass('show');
      }
    });
    jQuery(scrollTopbtn).on('click', function (event) {
      event.preventDefault();
      jQuery('html, body').animate({ scrollTop: 0 }, duration);
      return false;
    })


  }



  $(".toggle-password-change").on('click',function () {
    var targetId = $(this).data("target");
    var target = $("#" + targetId);
    var icon = $(this);
    if (target.attr("type") === "password") {
      target.attr("type", "text");
      icon.removeClass("fa-eye-slash");
      icon.addClass("fa-eye");
    } else {
      target.attr("type", "password");
      icon.removeClass("fa-eye");
      icon.addClass("fa-eye-slash");
    }
  });
  // wow js
  new WOW().init();


  // add to favorite btn

  $('.add-fav-btn').on('click', function () {
    $(this).toggleClass('active-fav');
    var icon = $(this).find('i');
    if (icon.hasClass('fa-solid')) {
      icon.removeClass('fa-solid').addClass('fa-regular');
    } else {
      icon.removeClass('fa-regular').addClass('fa-solid');
    }
  });


  // login box
  $(document).ready(function () {
    "use strict";
    $('.login-btn,.request-link').on('click', function () {
      $('.cart-box').addClass('show-cart-box');
      $('.sidebar-overlay').addClass('show');
    });

    $('.close--btn, .sidebar-overlay').on('click', function () {
      $('.cart-box').removeClass('show-cart-box');
      $('.sidebar-overlay').removeClass('show');
    });
  });

  /*============** Mgnific Popup **============*/
  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $('.popup_video').magnificPopup({
    type: 'iframe',
  });


  // scroll up and down


  // mobile-search option
  $('.mobile-search-btn').on('click',function () {
    $('.input-wrap,.header-menu-wrapper').toggleClass('input-show');
  });


    // show more item
    $('.show-more').on('click',function () {
      
      $('.more-list').toggleClass('show');
    });

  // photo upload
  $(document).ready(function () {
    "use strict";
    var images = [];

    function selectFiles() {
      $("#fileInput").click();
    }

    function onFileSelect(event) {
      const files = event.target.files;

      if (files.length === 0) return;
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.split('/')[0] !== 'image') continue;
        if (!images.some((e) => e.name == files[i].name)) {
          images.push({
            name: files[i].name,
            url: URL.createObjectURL(files[i])
          });
        }
      }
      updateImages();
    }

    function deleteImage(index) {

      images.splice(index, 1);
      $("#containerArea").empty();
    }

    function updateImages() {
      images.forEach(function (image, index) {
      $("#containerArea").empty();
       
        var deleteButton = $('<span class="delete"><i class="fas fa-times"></i></span>');
        deleteButton.on('click',function () {
          deleteImage(index);
        });

        var imageDiv = $('<div class="image"></div>').append(deleteButton).append($('<img src="' + image.url + '" alt="..."/>'));
        $("#containerArea").append(imageDiv);
      });
    }



    function onDragOver(event) {
      event.preventDefault();
      $("#dragArea").addClass("isDragging");
      event.originalEvent.dataTransfer.dropEffect = "copy";
    }

    function onDragLeave(event) {
      event.preventDefault();
      $("#dragArea").removeClass("isDragging");
    }

    function onDrop(event) {
      event.preventDefault();
      $("#dragArea").removeClass("isDragging");
      const files = event.originalEvent.dataTransfer.files;
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.split('/')[0] !== 'image') continue;
        if (!images.some((e) => e.name == files[i].name)) {
          images.push({
            name: files[i].name,
            url: URL.createObjectURL(files[i])
          });
        }
      }
      updateImages();
    }

    $("#selectFiles").on('click',selectFiles);
    $("#fileInput").change(onFileSelect);
    $("#dragArea").on("dragover", onDragOver).on("dragleave", onDragLeave).on("drop", onDrop);
  });



  $(document).ready(function() {

    "use strict";
    const colors = [
      'hsl(101, 68%, 44%)',
      'hsl(45, 100%, 51%)',
      'hsl(354, 78%, 51%)',
      'hsl(264, 100%, 50%)',
      'hsl(198, 100%, 50%)',
      'hsl(302, 100%, 50%)',

     
    ];
  
   
    $('.category').each(function() {
      const randomColorIndex = Math.floor(Math.random() * colors.length);
      const randomColor = colors[randomColorIndex];
      $(this).css('color', randomColor);
    });

    $('.card-btn,.date-time-wrap').each(function() {
      const randomColorIndex = Math.floor(Math.random() * colors.length);
      const randomColor = colors[randomColorIndex];
      $(this).css('background', randomColor);
    });
    
  });

// parallax image
document.addEventListener("mousemove",parallax);
function parallax(e){
  document.querySelectorAll(".animation-img").forEach(function(move){
    var movingValue = move.getAttribute("data-value");
    var x = (e.clientX * movingValue) / 250;
    var y = (e.clientY * movingValue) / 250;
    move.style.transform = "translateX("+ x +"px) translateY("+ y +"px)";
  })
}

function handleSlideArrows(slick) {
  var slidesToShow = slick.options.slidesToShow;
  var slideCount = slick.slideCount;
  var currentSlide = slick.currentSlide || 0; 

  if (currentSlide === 0) {
    $(slick.$slider).find('.slick-prev').hide();
  } else {
    $(slick.$slider).find('.slick-prev').show();
  }

  if (currentSlide + slidesToShow === slideCount) {
    $(slick.$slider).find('.slick-next').hide();
  } else {
    $(slick.$slider).find('.slick-next').show();
  }
}

// Initialize sliders
$('.item-slider1').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  responsive: [
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1
      }
    }
  ]
}).on('init reInit afterChange', function(event, slick, currentSlide) {
  handleSlideArrows(slick);
});

// Explicitly call handleSlideArrows after initialization to handle initial slide
$('.item-slider1').each(function() {
  var slickInstance = $(this).slick('getSlick');
  handleSlideArrows(slickInstance);
});



})(jQuery);


