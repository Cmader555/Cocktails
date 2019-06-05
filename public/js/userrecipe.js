$("#recipeCreate").on("click", function (event) {

  event.preventDefault();
  // console.log("you clicked make a drink!")
  // console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")



  let newRecipe = {
    name: $("#recipeName").val().trim(),
    ingredients: [],
    votes: 0, 
    imageURL: $("#imageURL").val().trim(), 
    description: $("#description").val().trim()
  }

  $(".adder").each(function () {

    let dataObj = {
      name: $(this).children("input[name=ingredient]").val().trim(),
      measurement: $(this).children("input[name=measurement]").val().trim()
    }

    newRecipe.ingredients.push(dataObj);

  });
  console.log(newRecipe);

  $.post("/api/cocktail", newRecipe).then(
    function () {
      console.log("created new drink");
      // Reload the page to get the updated list
      //location.reload();
    }
  )



})


$(document).ready(function () {

  $(".modal").modal();

})

// $("#addDrink").on("click", function (event) {

//   var modal = document.getElementById('myModal');
//   modal.style.display = "block";

//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];


//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function () {
//     modal.style.display = "none";
//   }

//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function (event) {
//     if (event.target === modal) {
//       modal.style.display = "none";
//     }
//   }


// });



let x = 1;

$("#addIngredient").on("click", function (e) {
  e.preventDefault();


  if (x < 20) {

    x++;
    let $adder = $("<div class='adder form-group newAdder'>");
    let newInput = $(`<input placeholder="Ingredient" type="text" class="form-control" name="ingredient">`)
    let newInputM = $(`<input placeholder="Measurement" type="text" class="form-control" name="measurement"> <button type="submit" class="btn btn-success submit deleteAdder">Remove</button> <br>`)
    $adder.append(newInput, newInputM);

    $("#add-drink").append($adder);

  }

})



$(document).on("click", ".deleteAdder", function (event) {

  event.preventDefault();

  $(this).parent('div').remove();
  x--;

})

$(document).on("click", "#upVote", function (event) {
  event.preventDefault();


  id = {

    id: (this.value)

  };

  function updateVotes(id) {
    $.ajax({
      method: "PUT",
      url: "/api/cocktail",
      data: id
    }).then(

        console.log("You clicked the upVote Button!")
    );
  }
  updateVotes(id);

})