var thisId;
// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(document).on("click", ".add", function(event) {
  // Grab the id associated with the article from the submit button
  event.preventDefault();
  thisId = $(this).attr("data-id");
    // let userComment = $(".form-control").val();
    // let newComment = $("<li>" + userComment + "</li>");

    // $(`#${thisId}`).append(newComment)

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      // Value taken from note textarea
      body: $(".form-control").val()
    }
  })
    // With that done
    .then(function(data) {
      // Log the response
      console.log(data);      
      // Empty the notes section
      // location.reload()
    });

  // Also, remove the values entered in the input and textarea for note entry
  $(".form-control").val("");    
})

$(document).on("click", ".view", function(event) {
  event.preventDefault();
  // thisId = $(this).attr("data-id");
  $.ajax({
    method: "GET",
    url: "/articles/" + thisId
    
  })
    // With that done
    .then(function(data) {
      // Log the response
      console.log(data);      
      // Empty the notes section
      $(`.${thisId}`).text(data.comment.body);
    });
});
