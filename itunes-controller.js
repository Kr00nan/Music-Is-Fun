function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function draw(results) {
    // console.log(results)
    var elemID = document.getElementById('songs');
    var template = "";

    results.forEach(song => {
      if (song.price == undefined) {
        song.price = " Album Only";
      }
      template += `
      <div class="card bg-light mb-3 float-left">
        <div class="card-body">
          <div>
            <img src="${song.albumArt}" alt="album artwork">
          </div>
          <h5 class="card-title">${song.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Artist: ${song.artist}</h6>
          <p>Album: ${song.collection}  Album Price: $${song.price}</p>
          <audio controls preload="auto" id="${song.id}">
            <source src="${song.preview}">
          </audio>
        </div>
      </div>
      `
    });

    elemID.innerHTML = template;
    debugger
    
  }
  
  document.addEventListener('play', function (event) {

    var players = document.getElementsByTagName('audio');
    for (let i = 0; i < players.length; i++) {
      const element = players[i];
      if(element != event.target) {
        element.pause();
      }
    }
  }
  , true);
}
