$.get("/api/auth", function(isAuth){
    if(isAuth) {
        $("#navi").append(`
            <li><a href="">Hit-or-Miss</a></li>
            <li><a href="">Search</a><li>
            <li><a href="">Discover</a></li>
            <li><a href="">Feed</a></li>
            <li><a id="logout">Logout</a></li>
        `)
        } else {
        $("#navi").append(`
            <li><a href="/drinks">Search</a></li>
            <li><a href="/cocktails">Discover</a></li>
            <li><a href="/signup">Signup | Login</a></li>
        `)
    }
});

$("#navi").on("click", "#logout", function(){
    console.log("clicks")
    $.get('/api/logout', function(response){
        if(!response) {
            window.location.href = "/";
        } else {
            alert("err")
        }
    })
})