$(function () {
  $("#name_error_message").hide();
  $("#email_error_message").hide();
  $("#password_error_message").hide();
  $("#retype_password_error_message").hide();

  var error_fname = false;
  var error_email = false;
  var error_password = false;
  var error_retype_password = false;

  $("#form_name").focusout(function () {
    check_fname();
  });
  $("#form_email").focusout(function () {
    check_email();
  });
  $("#form_password").focusout(function () {
    check_password();
  });
  $("#form_retype_password").focusout(function () {
    check_retype_password();
  });

  function check_fname() {
    var fname_length = $("#form_name").val().length;
    if (fname_length < 5) {
      $("#name_error_message").html("Input minimum 5 characters");
      $("#name_error_message").show();
      $("#form_name").css("border", "2px solid #F90A0A");
      error_fname = true;
    } else {
      $("#name_error_message").hide();
      $("#form_name").css("border", "2px solid #34F458");
    }
   }

  function check_password() {
    var password_length = $("#form_password").val().length;
    if (password_length < 8) {
      $("#password_error_message").html(" Input minimum 8 Characters");
      $("#password_error_message").show();
      $("#form_password").css("border", "2px solid #F90A0A");
      error_password = true;
    } else {
      $("#password_error_message").hide();
      $("#form_password").css("border", "2px solid #34F458");
    }
  }

  function check_retype_password() {
    var password = $("#form_password").val();
    var retype_password = $("#form_retype_password").val();
    if (password !== retype_password) {
      $("#retype_password_error_message").html("Passwords doesn't match");
      $("#retype_password_error_message").show();
      $("#form_retype_password").css("border", "2px solid #F90A0A");
      error_retype_password = true;
    } else {
      $("#retype_password_error_message").hide();
      $("#form_retype_password").css("border", "2px solid #34F458");
    }
  }

  function check_email() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#form_email").val();
    if (pattern.test(email) && email !== "") {
      $("#email_error_message").hide();
      $("#form_email").css("border", "2px solid #34F458");
    } else {
      $("#email_error_message").html("Invalid Email");
      $("#email_error_message").show();
      $("#form_email").css("border", "2px solid #F90A0A");
      error_email = true;
    }
  }

  $("#registration_form").submit(function () {
    error_fname = false;
    error_email = false;
    error_password = false;
    error_retype_password = false;

    check_fname();
    check_email();
    check_password();
    check_retype_password();

    if (
      error_fname === false &&
      error_email === false &&
      error_password === false &&
      error_retype_password === false
    ) {
      alert("Registration Successful");
      return true;
    } else {
      alert("Please Fill the form Correctly");
      return false;
    }
  });
});
