$("#recipeCreate").on("click", function (event) {

  console.log("you clicked make a drink!")
  event.preventDefault();


  let newRecipe = {
    name: $("#recipeName").val().trim(),
    ingredients: []
  }

  $(".adder").each(function () {

    let dataObj = {
      name: $(this).children("input[name=ingredient]").val().trim(),
      measurement: $(this).children("input[name=measurement]").val().trim()
    }

    newRecipe.ingredients.push(dataObj);

  });
  console.log(newRecipe);

  $.post("/api/drinks", newRecipe).then(
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





$("#addIngredient").on("click", function (e) {
  e.preventDefault();

  let $adder = $("<div class='adder form-group'>");
  let newInput = $(`<input placeholder="Ingredient" type="text" class="form-control" id="ingredient">`)
  let newInputM = $(`<input placeholder="Measurement" type="text" class="form-control" id="measurement">`)
  $adder.append(newInput, newInputM);

  $("#add-drink").append($adder);



})

