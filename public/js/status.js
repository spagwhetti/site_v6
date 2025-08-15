const cafe_username = "spaghetti"; // change the username!!!
const posts_url = "https://cafe.frizzbees.dev/get_posts/1?name=";
const profile_url = "https://social.nekoweb.org/profile/?view=";
const post_url = "https://social.nekoweb.org/post/?id=";

function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + "yr";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + "mo";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + "d";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + "hr";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + "min";
  }
  return Math.floor(seconds) + "sec";
}

// thanks max
(async () => {
    try {
        const request = await fetch(posts_url + cafe_username);
        let json = await request.json();
        json = json[0]

        timestamp = json["timestamp"]
        time = timeSince(timestamp * 1000)
    
        div = document.getElementById("status")
        
        div.innerHTML = `
            <div class="row" style="display: flex;">
                <img id="nekocafe-pfp" src=${json["image"]} height=64">
                <div class="column" style="padding: 8px 0; width: 100%; flex: 1 1 0;">
                    <div style="display: flex; justify-content: space-between">
                        <b id="nekocafe-poster">${json["name"]}</b>
                        <small id="nekocafe-time">${time} ago</small>
                    </div>
                    <i id="nekocafe-text">
                        ${json["post"]}
                    </i>
                </div>
        ` // make sure the height on the img fits your page!!!
    } catch (error) {
        console.error(error)
    }
})();