$(document).ready(function() {
//Topic of interest
var dogs = ["bulldog", "pug", "beagle", "poodle"];


    
    for (var i = 0; i < dogs.length; i++) {
        var buttonChoices = $("<button>"+dogs[i]+"</button>")
        buttonChoices.addClass("giphy")
        buttonChoices.attr("data-animal",dogs[i])
         $("#dogs").append(buttonChoices)
  
}
// function to make the buttons work

$("button").on("click", function() {
function pullGifs(){
  var inputDog = $("submit").val()
    
}
// Will said that $(this) means THIS the button that is being clicked
var animal = $(this).attr("data-animal");

var querURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=Vwuu6uix0fkoh9XC1cydLTHdYF8caLAV&limit=10"

$.ajax({
    url: querURL,
    method: "GET"
})
.then(function(response) {
console.log(response)

var results = response.data;
// Gif/images loop
for (var j = 0; j < results.length; j++) {

    var dogDiv = $("<div>");

    var p = $("<p>").text("Rating:" + results[j].rating);

    var dogImage = $("<img>");

    dogImage.attr("src", results[j].images.fixed_width_still.url);
    
    dogDiv.append(p);
    dogDiv.append(dogImage);

    $("#gif").prepend(dogDiv);
   
    
}
$("#gifs").prepend(gifMovement)
  })

})
// Still and animate the gifs

$("#gif").on("gif", function() {
  
  if ($(this).attr("data-state") == "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }






})







})


