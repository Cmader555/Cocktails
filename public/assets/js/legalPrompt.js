var legal = window.localStorage.getItem("legal")

if(legal === "fale" || legal === null || legal === undefined){
    $("#modal .modal-content").append(`
        <h4>Are you 21 or older?</h4>
    `);

    $("#modal .modal-footer").append(`
        <div align="center">
            <a class="modal-close waves-effect btn">Yes</a>
            <a class="modal-close waves-effect btn">No</a>
        </div>
    `)

    $("#modal").slideDown("slow")

    $("#modal").on("click",".modal-close", function(){
        var selectedBtn = $(this).text().toLowerCase()
        if(selectedBtn === "yes") {
            window.localStorage.setItem("legal", "true")
            $("#modal").slideUp();
        } else {
            window.localStorage.setItem("legal", "false")
            window.location.href = "http://www.good2grow.com/";
        }
    
    })
}

