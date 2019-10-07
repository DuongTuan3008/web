$("#search").submit(function (e) {
    event.preventDefault()
    $("#result-list").text("")
    getVideo();
})
function getVideo() {
    if ($("#keyword").val()) {
        let keyword = $("#keyword").val();
        $.ajax({
            url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw`,
            type: "GET",
            success: function (data) {
                data.items.forEach(element => {
                    console.log(element);
                    $("#result-list").append(`<img src="${element.snippet.thumbnails.default.url}" alt="${element.snippet.title}">`);
                    $("#result-list").append(`<a href="https://www.youtube.com/watch?v=${element.id.videoId}">${element.snippet.title}</a><p>${element.snippet.description}</p>`);
                });
            }
        });
    }
}
