$("#button").click(function () {
  getQuote();
})
function getQuote() {
  hideText();
  $.ajax({
    url: "https://api.quotable.io/random",
    type: "GET",
    success: function (data) {
        const { content, author } = data;
        $("#quote").html(`"${content}"`);
        $("#author").html("by " + author);
        showText();
        console.log(data);
    },
    error: function (error) {
      $("#quote").html("Some errors happened");
      $("#author").html("Unknown");
      showText();
    }
  });
}
function hideText() {
  $(".text").removeClass("opacity-1").addClass("opacity-0");
}
function showText() {
  $(".text").removeClass("opacity-0").addClass("opacity-1");
}