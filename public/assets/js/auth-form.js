var user = {
    email: "",
    local_pw: ""
}

$(".auth-input").keyup( function (e) {
    var name = e.target.name
    var value = e.target.value

    value = value.trim();

    if (name === "email") value = value.toLowerCase();

    user[name] = value

    enableBtns()
})

function enableBtns() {
    if (user.email.length > 0 && user.email !== "" && user.local_pw.length > 5 && user.local_pw !== "") {
        $(".auth").removeClass("disabled").attr("disabled", false);
    } else {
        $(".auth").addClass("disabled").attr("disabled", true);
    }

}

$(".auth").click(function (e) {
    e.preventDefault()
    var isValid = $("#auth-form")[0].checkValidity()
    if (isValid) {
        var selectedBtn = $(this).text().toLowerCase()
        var route = null
        switch(selectedBtn){
            case "signup": 
                route =  "/api/signup";
                authenticateUser(route)
            break;
            case "login":
                route =  "/api/login";
                authenticateUser(route)
            break;    
        }
    } else {

    }
})

function authenticateUser(route){
    $.post(route, user, function(response){
       if(response) {
           window.location.href = "/dashboard";
       } else {
           alert("error");
       }
    })
}