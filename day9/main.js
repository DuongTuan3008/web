const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&q='
const YOUTUBE_VIDEO_URL = 'https://www.youtube.com/watch?v=';

$(document).ready(function(){
  $('#search').submit(function(e) {
    e.preventDefault();
    $('#result-list').html("");
    $('#result-list').append(`
      <div class='loading-indicator'>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      </div>
    `);
    if ($('#keyword').val()) {
      $.ajax({
        type: 'GET',
        url: `${YOUTUBE_API_URL}${$('#keyword').val()}`,
        success: function(data) {
          console.log(data);
          $('#result-list').html("");
          if (data && data.items && data.items.length) {
            data.items.forEach((item) => {
              const appendedElement = `
                <div class="col-12 video-container">
                  <div class="row">
                    <div class="col-6 col-md-3">
                      <a href="${YOUTUBE_VIDEO_URL}${item && item.id && item.id.videoId}">
                        <img class="video-thumbnail" src="${item.snippet && item.snippet.thumbnails && item.snippet.thumbnails.high && item.snippet.thumbnails.high.url}">
                      </a>
                    </div>
                    <div class="col-6 col-md-9">
                      <a href="${YOUTUBE_VIDEO_URL}${item && item.id && item.id.videoId}">
                        <h3 class="video-title">${item.snippet && item.snippet.title}</h3>
                      </a>
                      <p class="video-description">${item.snippet && item.snippet.description}</p>
                    </div>
                  <div>
                </div>
              `
              $('#result-list').append(appendedElement);
            })
          }
        },
        error: function(err) {
          console.log(err);
        }
      })
    }
  })
})