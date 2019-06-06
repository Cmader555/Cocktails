$(document).ready(function() {
    // Getting references to singup user form and inputs
    var user = {
        profile: true,
        birthday: null,
        fullName: null,
        city: null,
        state: null,
        country: null,
        phoneNum: null
    }

// When the form is submitted, we validate there's an all profile info entered
    $(".profile-input").keyup(function (e) {
        var name = e.target.name
        var value = e.target.value

        value = value.trim();

        if (name === "fullName") value = value.toUpperCase();
        if (name === "phoneNum") value = value;
        if (name === "city") value = value.toUpperCase();
        if (name === "state") value = value.toUpperCase();
        if (name === "country") value = value.toUpperCase();
        if (name === "birthday") {
            value = moment(value).format("MM/DD/YYYY")
        }

        user[name] = value

        enableBtns()
    })

    function enableBtns() {
        var count = 0;
        for (key in user) {
            if (user[key] !== null) {
                count++;
            } else {
                $(".profile").addClass("disabled").attr("disabled", true);
            }
        }

        if (count === 7) {
            $(".profile").removeClass("disabled").attr("disabled", false);
        }

    }

    $(".profile").click(function (e) {
        e.preventDefault()
        var isValid = $("#profile-form")[0].checkValidity()
        if (isValid) {

            authenticateUser()

        } else {

        }
    })

    function authenticateUser() {
        $.ajax({
            url: '/api/user',
            type: 'PUT',
            data: user,
            success: function () {
                $("#profile-form").addClass("hide");
                $("#fullName").text(user.fullName);
                $("#birthday").text(user.birthday);
                $("#phoneNum").text(user.phoneNum);
                $("#city").text(user.city);
                $("#state").text(user.state);
                $("#country").text(user.country);
                $("#profile-data").removeClass("hide")
            }
        })
    }
});