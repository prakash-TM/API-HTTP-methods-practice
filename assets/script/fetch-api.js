fetch("https://api.publicapis.org/entries")
    .then(Response => {
        // console.log(Response)
        return Response.json();
    }).then(json => {
        console.log(json);
    })