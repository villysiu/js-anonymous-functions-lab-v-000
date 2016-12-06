$(document).ready(function(){
  menu();
  play();
  pause();
  show();
});

var jukeboxSongs = { "taylor swift": "in the clear", "beyonce": "halo", "drake": "hotline bling"};
var artists = Object.keys(jukeboxSongs);
var theArtist = artists[Math.floor(Math.random()) * artists.length];
var songToPlay = jukeboxSongs[theArtist];

function randomNumber() {
  return Math.floor(Math.random());
}

/*
function menu() {
  $('#menu').on('click', function(e) {
    $('#menuOptions').html("You can play a song, pause a song, or view all the songs");
  });
}
*/
function menu() {
  $('#menu').on('click', menuOpt_function)
}
function menuOpt_function() {
  $('#menuOptions').html("You can play a song, pause a song, or view all the songs");
}

/*
function play() {
  $('#play').on('click', function(e) {
    $('#songPlaying').html("now playing " + songToPlay + " by " + theArtist);
    return "now playing " + songToPlay + " by " + theArtist;
  });
}
*/
function play() {
  $('#play').on('click', songPlaying_function)
}
function songPlaying_function() {
  $('#songPlaying').html("now playing " + songToPlay + " by " + theArtist);
  return "now playing " + songToPlay + " by " + theArtist;
}


/*
function pause() {
  $('#pause').on('click', function(e) {
    $('#songPaused').html(songToPlay + " is paused");
  });
}
*/
function pause() {
  $('#pause').on('click', songPaused_function)
}
function songPaused_function() {
  $('#songPaused').html(songToPlay + " is paused");
}

/*
function show() {
  $('#show').on('click', function(e) {
    var songs = "";
    for (var key in jukeboxSongs) {
      songs += jukeboxSongs[key] + " by " + key +  " is available to play. "
    }
    $('#showSongs').html(songs);
  });
}
*/
function show() {
  $('#show').on('click', show_function)
}
function show_function() {
  var songs = "";
  for (var key in jukeboxSongs) {
    songs += jukeboxSongs[key] + " by " + key +  " is available to play. "
  }
  $('#showSongs').html(songs);
}
