var tableTea = function(number1) {
  return number1 * 3;
};
var teaTable = function(number2) {
  return number2 / 3;
};

$(document).ready(function() {
  $("form#toTsp").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#tableSpoon").val());
    var result = tableTea(number1);
    $("#output").text(result);
  });
});

$(document).ready(function() {
  $("form#toTbsp").submit(function(event) {
    event.preventDefault();
    var number2 = parseInt($("#teaSpoon").val());
    var result = teaTable(number2);
    $("#output").text(result);
  });
});
