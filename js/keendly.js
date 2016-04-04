/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
});

// Submits contact form
$("#contact_send").click(function(event) {
  $(this).button('loading');
  $.ajax({
    url: "https://formspree.io/contact@keendly.com",
    type: "POST",
    data: JSON.stringify({'name': $('#name').val(), 'email': $('#email').val(), 'message': $('#message').val()}),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data) {
      $(this).button('reset');
      $('#success').show()
      $('#error').hide()
    }.bind(this),
    error: function(xhr, status, err) {
      $(this).button('reset');
      $('#error').show()
      $('#success').hide()
    }.bind(this)
  });
  event.preventDefault();
});

// Submits subscribe form
$("#subscribe_btn").click(function(event) {
  $(this).button('loading');
  $.ajax({
    url: "https://oiw67v9ine.execute-api.eu-west-1.amazonaws.com/prod/subscriber",
    type: "POST",
    data: JSON.stringify({'email': $('#sub_email').val(), 'type': $('#sub_type').val()}),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data) {
      $(this).button('reset');
      console.log(data)
      if (data == 200){
        console.log('ok') // success
        $('#sub_success').show()
        $('#sub_error').hide()
      } else {
        console.log('error')
        $('#sub_error').show()
        $('#sub_success').hide()
      }
    }.bind(this),
    error: function(xhr, status, err) {
      $(this).button('reset');
      $('#sub_error').show()
      $('#sub_success').hide()
    }.bind(this)
  });
  event.preventDefault();
});

$(".signup-btn").click(function(event) {
  $('#sub_type').val($(this).attr('type'))
});
