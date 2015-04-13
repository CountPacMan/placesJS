
jQuery(document).ready(function() {
  $("#location").focus();
  $("#places-form").submit(function(event) {
    event.preventDefault();
    var inputLocation = $("#location").val();
    var inputSeason = $("#season").val();
    var inputNotes = $("#notes").val();
    var newPlace = {location: inputLocation, season: inputSeason, notes: inputNotes};

    $("ul#places").append("<li><span class='place'>" + newPlace.location + " " + newPlace.season + "</span></li>");

    $("#location").val("");
    $("#season").val("");
    $("#notes").val("");

    $(".place").last().click(function(){
      $("#show-place").show();
      $("#show-place h2").text(newPlace.location + " " + newPlace.season);
      $(".location").text(newPlace.location);
      $(".season").text(newPlace.season);
      $(".notes").text(newPlace.notes);

    });

  });
});
