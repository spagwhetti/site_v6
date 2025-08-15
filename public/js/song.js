function truncateTitle(title, maxLength) {
  if (title.length > maxLength) {
    return title.substring(0, maxLength-2) + '...';
  }
  return title;
}

function fetchRecentTrack() {
    const url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=spagwhetti&api_key=48020aab45fde6bbe12846c805ac47cb&format=json";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const track = data.recenttracks.track[0];
            const artist = track.artist["#text"];
            const song = track["name"];
            const artwork = track.image[3]["#text"];

            const artworkElement = document.getElementById("album-cover");
            artworkElement.setAttribute("src", artwork);

            const trackElement = document.getElementById("song");
            trackElement.innerHTML = song;

            const artistElement = document.getElementById("artist");
            artistElement.innerHTML = artist;
        })
        .catch(error => console.error("Error fetching data:", error));
}

document.addEventListener("DOMContentLoaded", function () {
  fetchRecentTrack(); // Run once immediately
  setInterval(fetchRecentTrack, 10000); // Run every 10 seconds
});