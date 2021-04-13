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

const playlist_details = {'Minden': ["Love is Bad", 2],
                         '6lack ft jcole' : ["Pretty Little Fears","6lack_pretty_little_fears"],
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

const playSong = (audio) =>{
    image_cover.classList.add('play');
    play_icon.classList.remove('fa-play');
    play_icon.classList.add('fa-pause');
    let playlist_audio= document.getElementById(audio);
    playlist_audio.play();
    music_now_playing_bg.style.backgroundImage=`url(${audio}.jpg`;
    image_cover_bg.src=`${audio}.jpg`;
    
}
const pauseSong=()=>{
    image_cover.classList.remove('play');
    play_icon.classList.add('fa-play');
    play_icon.classList.remove('fa-pause');
   
}
const toogleSong =(audio)=>{
    if (play_icon.classList.contains("fa-play")){
        playSong(audio);
    }else{
        pauseSong();
    }
}

const musicTabClick =(name, artiste, audio)=>{
    music_playing_name.innerHTML= name;
    music_playing_artiste.innerHTML= artiste;
    music_title.innerHTML= name;
    music_artiste.innerHTML= artiste;
    image_cover.src= `${audio}.jpg`;
    playSong(audio);
}
const forwardSong =()=>{
    for (artiste in playlist_details){
        // console.log(playlist_details[artiste][1]);
        if (music_playing_artiste.innerHTML === artiste){
            let music= playlist_details[artiste][0];
            let audio= playlist_details[artiste][1];
            musicTabClick(music, artiste, audio);
            console.log('Hello');
            break;
        }
    }
}
