var currentDay = moment().format("dddd MMMM DD, YYYY");
var currentHour = parseInt(moment().format("H"));

var displayDay = function() {
    $("#currentDay").text(currentDay);
    $("currentHour").currentHour;
   
};

//


$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
     debugger
      //  values in the description JQuery
        var text = $(this).siblings("textarea").val();
        var time = $(this).parent().attr("id");
      
        localStorage.setItem(time,text);
     
    });


  function background() {
    $(".time-block").each(function(){
      
      var timeId =parseInt($(this).attr("id"));
      if (timeId <currentHour){
        $(this).children("textarea").addClass("past");
      } else if (timeId === currentHour){
        $(this).children("textarea").removeClass("past");
        $(this).children("textarea").removeClass("future");
        $(this).children("textarea").addClass("present");
      }else{
        $(this).children("textarea").removeClass("past");
        $(this).children("textarea").removeClass("present");
        $(this).children("textarea").addClass("future");

      }
    
    })
   
  }
  background();
});
