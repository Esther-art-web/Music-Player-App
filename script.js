"use-strict"

let playlist1= document.getElementById('music-tab-1');
let playlist2= document.getElementById('music-tab-2');
let playlist3= document.getElementById('music-tab-3');
let playlist4= document.getElementById('music-tab-4');
let playlist5= document.getElementById('music-tab-5');
let playlist6= document.getElementById('music-tab-6');
let playlist7= document.getElementById('music-tab-7');
let playlist8= document.getElementById('music-tab-8');

let forwardBtn= document.getElementById("forward");
let playBtn= document.getElementById("play");
let backwardBtn= document.getElementById("backward");

let image_cover= document.getElementById("image-cover");
let play_icon= document.getElementById("play-icon");

let music_playing_name = document.getElementById("music-playing-name");
let music_playing_artiste = document.getElementById("music-playing-artiste");

let music_now_playing_bg = document.getElementsByClassName('music-now-playing-bg')[0];
let image_cover_bg= document.getElementById("image-cover-bg");

let music_title= document.getElementById("title");
let music_artiste = document.getElementById("artiste");

let song= document.getElementById("music-playing-audio");
let prevTabSong = [];

let now_playing_id = null;

const playlist_details = {'Minden': ["Love is Bad", 2],
                         '6lack ft Jcole' : ["Pretty Little Fears","6lack_pretty_little_fears"],
                         'jhene' : ["Love", "jhene_love" ],
                         'Lewis Capaldi' :["Hollywood", "lewis_hollywood"],
                         'Ariana Grande' : ["pov","ariana_pov" ],
                         'Pink Sweats ft Kehlani': ["At my worst","pink_at_my_worst"],
                         'Summer Walker ft Drake' : ["Girls need love", "summer_girls_need_love" ],
                         'Alessia Cara' : ["Out of Love", "alessia_out_of_love"]}
// const playlist_songs = ["6lack_pretty_little_fears",
//                          "jhene_love", 
//                          "lewis_hollywood", 
//                          "ariana_pov",
//                          "pink_at_my_worst",
//                          "summer_girls_need_love",
//                          "alessia_out_of_love"
//                         ]
const startSong= () =>{
    play_icon.classList.remove('fa-play');
    play_icon.classList.add('fa-pause');
}
const stopSong =()=>{
    play_icon.classList.remove('fa-pause');
    play_icon.classList.add('fa-play');
}
const playSong = (audio) =>{
    startSong();
    image_cover.classList.add('play');
    var playlist_audio= document.getElementById(audio);
    var music_playing_icon=  document.getElementById(`music-gif-${now_playing_id}`);
    music_playing_icon.src="Music.gif";
    music_playing_icon.style.display='block';
    playlist_audio.play();   
}
const pauseSong=(audio)=>{
    stopSong();
    image_cover.classList.remove('play');
    var playlist_audio= document.getElementById(audio);
    playlist_audio.pause();
    var music_playing_icon=  document.getElementById(`music-gif-${now_playing_id}`);
    music_playing_icon.src="music_pause.jpg";
    music_playing_icon.style.display='block';
   
}
const toogleSong =(audio= "music-playing-audio")=>{
    if (play_icon.classList.contains("fa-play")){
        playSong(audio);
    }else{
        pauseSong(audio);
    }
}
const musicTabClick =(name, artiste, audio, no)=>{
    now_playing_id= no;
    music_playing_name.innerHTML= name;
    music_playing_artiste.innerHTML= artiste;
    music_title.innerHTML= name;
    music_artiste.innerHTML= artiste;
    image_cover.src= `${audio}.jpg`;
    music_now_playing_bg.style.backgroundImage=`url(${audio}.jpg`;
    image_cover_bg.src=`${audio}.jpg`;
    document.getElementById(`music-no-${no}`).style.display='none';
    document.getElementById(`music-gif-${no}`).style.display='none';
    song.src=`${audio}.mp3`;
    toogleSong();
}

const nextSong =()=>{
    var artistes= (Object.keys(playlist_details));
    for (var i=0; i < artistes.length; i++){
        if (music_playing_artiste.innerHTML === artistes[i]){
            i+=1;
            toogleSong();
            document.getElementById(`music-no-${i}`).style.display='block';
            document.getElementById(`music-gif-${i}`).style.display='none';
            let music= playlist_details[artistes[i]][0];
            let audio= playlist_details[artistes[i]][1];
            musicTabClick(music, artistes[i], audio, i+1);
        }
    }   
}

const prevSong =() =>{
    var artistes= (Object.keys(playlist_details));
    for (var i= (artistes.length - 1); 0 <= i && i < artistes.length; i--){
        if (music_playing_artiste.innerHTML === artistes[i]){
            toogleSong();
            document.getElementById(`music-no-${i + 1}`).style.display='block';
            document.getElementById(`music-gif-${i + 1}`).style.display='none';
            i-=1;
            let music= playlist_details[artistes[i]][0];
            let audio= playlist_details[artistes[i]][1];
            musicTabClick(music, artistes[i], audio, i+1);
        }
    }   
}