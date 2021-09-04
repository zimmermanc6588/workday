var currentDay = moment().format("dddd MMMM DD, YYYY");
var currentHour = moment().format("H");

var displayDay = function() {
    $("#currentDay").text(currentDay);
};

//


$(document).ready(function () {
    // saveBtn click listener 
    $(".btn").on("click", function () {
        //  values in the description JQuery
        var text = $(this).siblings(".text-area").val();
        var time = $(this).parent().attr("id");
      
        localStorage.setItem(time, JSON.stringify(text));
    })
  
  });