song = ""

function preload() {
    song = loadSound("music.mp3")
}

function draw()  {
    image(video, 0, 0, 600, 420);
}

function play() {
    song.play();
}

function setup() {
    canvas = createCanvas(600, 420);    
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

}