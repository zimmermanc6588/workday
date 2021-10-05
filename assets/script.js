var currentDay = moment().format("dddd MMMM DD, YYYY");
var currentHour = moment().format("H");

var displayDay = function() {
    $("#currentDay").text(currentDay);
   
};

//


$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        //  values in the description JQuery
        var text = $(this).siblings("textarea").val();
        var time = $(this).parent().attr("id");
      console.log(text);
        localStorage.setItem(time, JSON.stringify(text));
    })
  
  });
  localStorage.getItem(text,time)

  function background () {
    $(".time-block").each(function(){
      var timeId =parseInt($(this).attr("id"));
      if (timeId <currentHour){
        $(this).addClass("past");
      } else if (timeId === currentHour){
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }else{
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");

      }
    })
  }
  background();