function toggleVideo() {
    var video = document.getElementById("meuVideo");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
function toggleVideoDois() {
    var video = document.getElementById("meuVideo2");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
function toggleVideoTres() {
    var video = document.getElementById("meuVideo3");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function redirectUm(){
    window.location.href = "http://127.0.0.1:5500/Inicio.html";
}
function redirectDois(){
    window.location.href = "http://127.0.0.1:5500/Livro%20do%20Dragão.html";
}
function redirectTres(){
    window.location.href = "http://127.0.0.1:5500/Atividade.html";
}