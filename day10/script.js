$("#input-form").submit(function (e) {
    let playerName = $("#player-name").val();
    $.ajax({
        url: `http://localhost:3000/player/${playerName}`,
        type: "GET",
        success: function (data) {
            console.log(data);
        }
    });
})