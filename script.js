console.log("Wellcome to spotify");

// Inintialize the variables
let songIndex=0;
let audioElement= new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');
let gif =document.getElementById('gif');
let songItem=Array.from(document.getElementById('songItem'));
let songs=[
    {songsName:"Let me love you", filePath:"song/1.mp3", coverPath:"covers/jpg1.jpeg"},
    {songsName:"STAY", filePath:"song/2.mp3", coverPath:"covers/jpg2.jpeg"},
    {songsName:"MASHUP", filePath:"song/3.mp3", coverPath:"covers/jpg3.jpeg"},
    {songsName:"Selfih Love", filePath:"song/4.mp3", coverPath:"covers/jpg4.jpeg"},

]

songItem.forEach(element => {
    element.getElementsByName("img")[0].src=songs[i].filePath;
});

//audioElement.play

//Handle play?pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//listen to Event
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;

    myProgressBar.addEventListener('change', ()=>{
        audioElement.currentTime=(myProgressBar.value * audioElement.duration)/100;
    })
})