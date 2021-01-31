// $(document).ready(function() {
//     var isSaved = false;
//     var text = "textarea"
//     var time = "id"
// });
//   $(".saveBtn").on("click", function(){
//      if (isSaved) {
//        return true;
//      }
//   });
    


$(document).ready(function() {

    var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
      var isSaved = false;
      var text = "textarea"
      var time = "id"
    });
      $(".btn saveBtn").on("click", function(){
      if (isSaved) {
        return true;
     }
    });
    