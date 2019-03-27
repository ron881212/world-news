var thisId;
// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(document).on("click", ".add", function(event) {
  // Grab the id associated with the article from the submit button
  event.preventDefault();
  $(`.${thisId}`).text("")
  thisId = $(this).attr("data-id");
  console.log(thisId);
  
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      // Value taken from note textarea
      body: $(`#${thisId}`).val()
    }
  })
    // With that done
    .then(function(data) {
      // Log the response
      // console.log(data);      
      // Empty the notes section
      location.reload()
    });


  $(".form-control").val(""); 
})

$(document).on("click", ".view", function(event) {
  event.preventDefault();
  thisId = $(this).attr("data-id");
  console.log(thisId);
  $.ajax({
    method: "GET",
    url: "/articles/" + thisId
    
  })
    // With that done
    .then(function(data) {
      // Log the response
      // console.log(data);      

      $(`.${thisId}`).text(data.comment.body);
    });
});

$(document).on("click", ".delete", function(event) {
  event.preventDefault();
  $(`.${thisId}`).text("")
  $(`.${thisId}`).removeClass(thisId)
});
