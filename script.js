$(document).ready(function () {
  $(".box").hide();
  $("select").change(function () {
    $(".firstBox").hide();
    $(this)
      .find("option:selected")
      .each(function () {
        var optionValue = $(this).attr("value");
        if (optionValue) {
          $(".box")
            .not("." + optionValue)
            .hide();
          $("." + optionValue).show();
        } else {
          $(".box").hide();
        }
      });
  });
  //.change();
});

//console.log(jQuery('span').attr('class'));

$("span.male").click(function () {
  $(".firstBox").hide();
  var myclass = $(this).prop("class").split(" ")[0];
  if (myclass) {
    $(".box")
      .not("." + myclass)
      .hide();
    $("." + myclass).show();
  } else {
    $(".box").hide();
  }
  $("select").val("disabled selected value");
});
