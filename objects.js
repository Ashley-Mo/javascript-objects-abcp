var playlist={BrunoMars:'Grenade',Rihanna:'whats my name'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]='songTitle';
}
function removeFromPlaylist(playlist, artistName){
<<<<<<< HEAD
 delete playlist[artistName];
=======
 return delete playlist.artistName;
>>>>>>> e0cd229e63cec5b97782f2ca5d76ebb1a16fdeba
}