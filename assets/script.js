var currentDay = moment().format("dddd MMMM DD, YYYY");
var currentHour = moment().format("H");

var displayDay = function() {
    $("#currentDay").html(currentDay);
};

//


$(document).ready(function () {
    // saveBtn click listener 
    $(".btn").on("click", function () {
        //  values in the description JQuery
        var text = $(this).siblings("textarea").val();
        var time = $(this).parent().attr("id");
      console.log(text);
        localStorage.setItem(time, JSON.stringify(text));
    })
  
  });
  localStorage.getItem("id")