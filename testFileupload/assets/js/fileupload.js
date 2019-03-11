$(document).ready(() => {
    $("#uploadFile").on("change", () => {
        const file = $("#uploadFile")[0].files[0];
        $("#fileInfo").append("<p>Name: " + file.name + "</p>");
        $("#fileInfo").append("<p>Type: " + file.type + "</p>");
        $("#fileInfo").append("<p>Size: " + file.size + " bytes</p>");
    });
    $("#dragbox").on("dragend", (e) => {
        e.preventDefault();
        console.log(e);
    });
    $("#submitBtn").on("click", (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append("file", $("#uploadFile")[0].files[0]);
        $.ajax({
            method: "POST",
            url: "/api/parsexlsx",
            data: data,
            processData: false,
            contentType: false
        }).then((response) => {
            console.log(response)
            $("#fileInfo").empty().append("<p>Successfully uploaded.</p>")
        }).catch((err) => {
            console.error(err);
            $("#fileInfo").empty().append("<p>Upload unsuccessful.</p>")
        })
    })
});