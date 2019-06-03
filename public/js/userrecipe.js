$("#recipeCreate").on("click", function (event) {

  console.log("you clicked make a drink!")
  event.preventDefault();

  let newRecipe = {
    name: $("#recipeName").val().trim(),
    ingredient1: $("#ingredient1").val().trim(),
    ingr_measure1: $("#ingr_measure1").val().trim(),
    ingredient2: $("#ingredient2").val().trim(),
    ingr_measure2: $("#ingr_measure2").val().trim(),
    ingredient3: $("#ingredient3").val().trim(),
    ingr_measure3: $("#ingr_measure3").val().trim(),
    ingredient4: $("#ingredient4").val().trim(),
    ingr_measure4: $("#ingr_measure4").val().trim(),
    ingredient5: $("#ingredient4").val().trim(),
    ingr_measure5: $("#ingr_measure5").val().trim()

  };

  $.ajax("/api/drinks", {
    type: "POST",
    data: newRecipe
  }).then(
    function () {
      console.log("created new drink");
      // Reload the page to get the updated list
      location.reload();
    }
  );

})


$("#addDrink").on("click", function (event) {

  var modal = document.getElementById('myModal');
  modal.style.display = "block";

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];


  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }


}); 