function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function draw(results){
    // console.log(results)
    var elemID = document.getElementById('songs');
    var template = "";

    results.forEach(song => {
      // template += `
      // <div class="row">
      //   <div class="col">
      //     <p>${song.title}</p>
      //     <img src="${song.albumArt}" alt="album artwork">
      //   </div>
      //   <div class="col-6">
      //     Price: $${song.price}<br>
      //     <audio controls preload="auto">
      //       <source src="${song.preview}">
      //     </audio>
      //   </div>
      //   <div class="col"></div> 
      // </div>
      // `
      template += `
      <div class="card bg-light mb-3 float-left" style="width: 350px; height: 300px">
      <div class="card-body">
        <div>
          <img src="${song.albumArt}" alt="album artwork" width="75px">
        </div>
        <h5 class="card-title">${song.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Artist: ${song.artist}</h6>
        <p style="padding-top: 3px;">Album: ${song.collection}  Album Price: $${song.price}</p>
        <audio controls preload="auto" style="display: block;">
          <source src="${song.preview}">
        </audio>
      </div>
    </div>
      `
    });

    elemID.innerHTML = template;
  }




  
}
