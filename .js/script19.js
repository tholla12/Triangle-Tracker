$(document).ready(function () {
  $("#form-one").submit(function (event) {
    event.preventDefault()
    const num1 = parseInt($("#num1").val());
    const num2 = parseInt($("#num2").val());
    const num3 = parseInt($("#num3").val());
    console.log(num1);
    console.log(num2);
    console.log(num3);

    if (
      (num1 + num2 <= num3 || num2 + num3 <= num1 || num3 + num1 <= num2) ||
      (num1 === 0 && num2 === 0 && num3 === 0)

    ) {
      $(".one").show();
      $(".two").hide();
      $(".three").hide();
      $(".four").hide();
      $("#form-one").hide();
      $(".hid").hide();
    }
    else if (
      (num1 === num2 && num2 === num3) &&
      (num1 > 0 && num2 > 0 && num3 > 0)
    ) {
      $(".two").show();
      $(".one").hide();
      $(".three").hide();
      $(".four").hide();
      $("#form-one").hide();
      $(".hid").hide();
    }
    else if (
      ((num1 === num2) && (num1 + num2 > num3)) ||
      ((num2 === num3) && (num2 + num3 > num1)) ||
      ((num3 === num1) && (num3 + num1 > num2)) &&
      (num1 > 0 && num2 > 0 && num3 > 0)
    ) {
      $(".three").show();
      $(".four").hide();
      $(".two").hide();
      $(".one").hide();
      $("#form-one").hide();
      $(".hid").hide();
    }
    else if (
      (num1 != num2 && num2 != num3 && num1 != num3) &&
      (num1 + num2 > num3 || num1 + num3 > num2 || num2 + num3 > num1) &&
      (num1 > 0 && num2 > 0 && num3 > 0)
    ) {
      $(".four").show();
      $(".three").hide();
      $(".two").hide();
      $(".one").hide();
      $("#form-one").hide();
      $(".hid").hide();
    }
  })
})
