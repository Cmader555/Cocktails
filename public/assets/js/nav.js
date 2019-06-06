$.get("/api/auth", function(isAuth){
    if(isAuth) {
        $("#navi").append(`
           
            <li><a href="/drinks">Search</a><li>
            <li><a href="/cocktails">Discover</a></li>
          
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