$(document).ready(function() {
    $.ajax({
        url: "https://api.publicapis.org/entries",
        type: "GET",
        success: function(result) {
            console.log(result);
        },
        error: function(err) {
            console.log(err);

        }
    })
})