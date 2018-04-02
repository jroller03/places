//business logic
//business logic
function Location(city, month, landmark) {
  this.city = city;
  this.month = month;
  this.landmark = landmark;
}

// user interface logic
$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    var inputtedCity = $("input#new-city").val();
    var inputtedMonth = $("input#new-month").val();
    var inputtedLandmark = $("input#new-landmark").val();


    var newLocation = new Location(inputtedCity, inputtedMonth, inputtedLandmark);

    $("ul#places").append("<li><span class='place'>" + newLocation.city + "</span></li>");
    $(".place").last().click(function() {
    $("#show-places").show();
    $("#show-places h2").text(newLocation.city);
    $(".city").text(newLocation.city);
    $(".month").text(newLocation.month);
    $(".landmark").text(newLocation.landmark);

    });
    $("input#new-city").val("");
    $("input#new-month").val("");
    $("input#new-landmark").val("");

  });
});
