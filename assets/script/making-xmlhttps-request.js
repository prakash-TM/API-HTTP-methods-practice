const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/posts/1/comments") // or https://api.publicapis.org/entries11
request.send();
request.onload = () => {
    // console.log(request);
    if (request.status === 200) {
        console.log(JSON.parse(request.response));

    } else {
        console.log(request);
        console.log(`error ${request.status}`)
    }
}