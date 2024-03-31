const music = new Audio("vande.mp3");

const songs = [
  {
    id: "1",
    songName: ` Tum Se Hi <br> <div class="subtitle">Mohit Chauhan</div>`,
    poster: "Images/1.jpg",
    audioSrc: "Audio/1.mp3"
  },
  {
    id: "2",
    songName: ` Ye Ishq Hai<br> <div class="subtitle">Shreya Ghoshal</div>`,
    poster: "Images/2.jpg",
    audioSrc: "Audio/2.mp3"
  },
  {
    id: "3",
    songName: `Aaromal <br><div class="subtitle">  Vishal Chandrashekhar </div>`,
    poster: "Images/3.jpg",
    audioSrc: "Audio/3.mp3"
  },
  {
    id: "4",
    songName: `Dil Dhadkne Do <br><div class="subtitle">Joi Barua</div>`,
    poster: "Images/4.jpg",
    audioSrc: "Audio/4.mp3"
  },
  {
    id: "5",
    songName: `Sage <br><div class="subtitle">Ritviz</div>`,
    poster: "Images/5.jpg",
    audioSrc: "Audio/5.mp3"
  },
  {
    id: "6",
    songName: `Starboy<br><div class="subtitle">Weeknd</div>`,
    poster: "Images/6.jpg",
    audioSrc: "Audio/6.mp3"
  },
  {
    id: "7",
    songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
    poster: "Images/7.jpg",
    audioSrc: "Audio/7.mp3"
  },
  {
    id: "8",
    songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
    poster: "Images/8.jpg",
    audioSrc: "Audio/8.mp3"
  },
  {
    id: "9",
    songName: `Dilber <br><div class="subtitle">Satyameva Jayate</div>`,
    poster: "Images/9.jpg",
    audioSrc: "Audio/9.mp3"
  },
  {
    id: "10",
    songName: `Duniya <br><div class="subtitle">Luka Chuppi</div>`,
    poster: "Images/10.jpg",
    audioSrc: "Audio/10.mp3"
  },
  {
    id: "11",
    songName: `Lagdi Lahore Di <br><div class="subtitle">Street Dancer 3D</div>`,
    poster: "Images/11.jpg",
    audioSrc: "Audio/11.mp3"
  },
  {
    id: "12",
    songName: `Putt Jatt Da <br><div class="subtitle">Putt Jatt Da</div>`,
    poster: "Images/12.jpg",
    audioSrc: "Audio/12.mp3"
  },
  {
    id: "13",
    songName: `Baarishein <br><div class="subtitle">Atif Aslam</div>`,
    poster: "Images/13.jpg",
    audioSrc: "Audio/13.mp3"
  },
  {
    id: "14",
    songName: `Vaaste <br><div class="subtitle">Dhvani Bhanushali</div>`,
    poster: "Images/14.jpg",
    audioSrc: "Audio/14.mp3"
  },
  {
    id: "15",
    songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
    poster: "Images/15.jpg",
    audioSrc: "Audio/15.mp3"
  },
  {
    id: "16",
    songName: `Aakasam <br><div class="subtitle">Gv Prakash</div>`,
    poster: "Images/16.jpg",
    audioSrc: "Audio/16.mp3"
  },
];

const createSongList = () => {
    const menuSong = document.querySelector(".menu_song");
    songs.forEach(song => {
        const li = document.createElement("li");
        li.innerHTML = `<span class="playListPlay bi bi-play-circle-fill" id="${song.id}"></span>
        <img src="${song.poster}" alt="${song.songName}">
        <h5>${song.songName}</h5>`;
        menuSong.appendChild(li);
    });
};

createSongList();

songs.forEach(song => {
    console.log(song.audioSrc);
});

Array.from(document.getElementsByClassName("songItem")).forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].poster;
    element.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});
    
    let masterPlay = document.getElementById("masterPlay");
    let wave = document.getElementsByClassName("wave")[0];
    let index = 0;
    let poster_master_play = document.getElementById("poster_master_play");
    let title = document.getElementById("title");
    
    masterPlay.addEventListener("click", () => {
        if (music.paused || music.currentTime <= 0) {
            music.play();
            masterPlay.classList.remove("bi-play-fill");
            masterPlay.classList.add("bi-pause-fill");
            wave.classList.add("active2");
        } else {
            music.pause();
            masterPlay.classList.add("bi-play-fill");
            masterPlay.classList.remove("bi-pause-fill");
            wave.classList.remove("active2");
        }
    });
    
    const makeAllPlays = () => {
        Array.from(document.getElementsByClassName("playListPlay")).forEach((element) => {
            element.classList.add("bi-play-circle-fill");
            element.classList.remove("bi-pause-circle-fill");
        });
    };
    
    const makeAllBackgrounds = () => {
        Array.from(document.getElementsByClassName("songItem")).forEach((element) => {
            element.style.background = "rgb(105, 105, 170, 0)";
        });
    };
    
    Array.from(document.getElementsByClassName("playListPlay")).forEach((element) => {
        element.addEventListener("click", (e) => {
            index = parseInt(e.target.id);
            makeAllPlays();
            e.target.classList.remove("bi-play-circle-fill");
            e.target.classList.add("bi-pause-circle-fill");
            music.src = `Audio/${index}.mp3`;
            poster_master_play.src = `Images/${index}.jpg`;
            music.play();
            let song_title = songs.filter((ele) => ele.id === index)[0];
            title.innerHTML = song_title.songName;
            masterPlay.classList.remove("bi-play-fill");
            masterPlay.classList.add("bi-pause-fill");
            wave.classList.add("active2");
            music.addEventListener("ended", () => {
                masterPlay.classList.add("bi-play-fill");
                masterPlay.classList.remove("bi-pause-fill");
                wave.classList.remove("active2");
            });
            
            makeAllBackgrounds();
            Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = "rgb(105, 105, 170, .1)";
        });
    });
    
    let currentStart = document.getElementById("currentStart");
    let currentEnd = document.getElementById("currentEnd");
    let seek = document.getElementById("seek");
    let bar2 = document.getElementById("bar2");
    let dot = document.getElementsByClassName("dot")[0];
    
    music.addEventListener("timeupdate", () => {
        let music_curr = music.currentTime;
        let music_dur = music.duration;
        let min = Math.floor(music_dur / 60);
        let sec = Math.floor(music_dur % 60);
        
        if (sec < 10) {
            sec = `0${sec}`;
        }
        
        currentEnd.innerText = `${min}:${sec}`;
        
        let min1 = Math.floor(music_curr / 60);
        let sec1 = Math.floor(music_curr % 60);
        
        if (sec1 < 10) {
            sec1 = `0${sec1}`;
        }
        
        currentStart.innerText = `${min1}:${sec1}`;
        
        let progressbar = parseInt((music.currentTime / music.duration) * 100);
        seek.value = progressbar;
        let seekbar = seek.value;
        bar2.style.width = `${seekbar}%`;
        dot.style.left = `${seekbar
        }%`
    });
    
    seek.addEventListener("change", () => {
        music.currentTime = (seek.value * music.duration) / 100;
    });
    
    music.addEventListener("ended", () => {
        masterPlay.classList.add("bi-play-fill");
        masterPlay.classList.remove("bi-pause-fill");
        wave.classList.remove("active2");
    });
    
    let vol_icon = document.getElementById("vol_icon");
    let vol = document.getElementById("vol");
    let vol_dot = document.getElementById("vol_dot");
    let vol_bar = document.getElementsByClassName("vol_bar")[0];
    
    vol.addEventListener("change", () => {
        
        if (vol.value == 0) {
            vol_icon.classList.remove("bi-volume-down-fill");
            vol_icon.classList.add("bi-volume-mute-fill");
            vol_icon.classList.remove("bi-volume-up-fill");
        }
        
        if (vol.value > 0) {
            vol_icon.classList.add("bi-volume-down-fill");
            vol_icon.classList.remove("bi-volume-mute-fill");
            vol_icon.classList.remove("bi-volume-up-fill");
        }
        
        if (vol.value > 50) {
            vol_icon.classList.remove("bi-volume-down-fill");
            vol_icon.classList.remove("bi-volume-mute-fill");
            vol_icon.classList.add("bi-volume-up-fill");
        }
        let vol_a = vol.value;
        vol_bar.style.width = `${vol_a}%`;
        vol_dot.style.left = `${vol_a}%`;
        music.volume = vol_a / 100;
    });
    
    let back = document.getElementById("back");
    let next = document.getElementById("next");
    back.addEventListener("click", () => {
        index -= 1;
        if (index < 1) {
            index = Array.from(document.getElementsByClassName("songItem")).length;
        }
        
        music.src = `Audio/${index}.mp3`;
        poster_master_play.src = `Images/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele) => ele.id == index)[0];
        title.innerHTML = song_title.songName;
        
        makeAllPlays();
        document.getElementById(`${index}`).classList.remove("bi-play-fill");
        document.getElementById(`${index}`).classList.add("bi-pause-fill");
        
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = "rgb(105, 105, 170, .1)";
    });
    
    next.addEventListener("click", () => {
        index -= 0;
        index += 1;
        if (index > Array.from(document.getElementsByClassName("songItem")).length) {
            index = 1;
        }
        
        music.src = `Audio/${index}.mp3`;
        poster_master_play.src = `Images/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele) => ele.id == index)[0];
        title.innerHTML = song_title.songName;
        
        makeAllPlays();
        
        document.getElementById(`${index}`).classList.remove("bi-play-fill");
        document.getElementById(`${index}`).classList.add("bi-pause-fill");
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = "rgb(105, 105, 170, .1)";
    });
    
    let left_scroll = document.getElementById("left_scroll");
    let right_scroll = document.getElementById("right_scroll");
    let pop_song = document.getElementsByClassName("pop_song")[0];
    
    left_scroll.addEventListener("click", () => {
        pop_song.scrollLeft -= 330;
    });
    right_scroll.addEventListener("click", () => {
        pop_song.scrollLeft += 330;
    });
    
    let left_scrolls = document.getElementById("left_scrolls");
    let right_scrolls = document.getElementById("right_scrolls");
    let item = document.getElementsByClassName("item")[0];
    
    left_scrolls.addEventListener("click", () => {
        item.scrollLeft-=330;
    });
    
    right_scrolls.addEventListener("click", () => {
        item.scrollLeft+=330;
    });
