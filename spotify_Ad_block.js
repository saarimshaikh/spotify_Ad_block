muteButton = document.getElementsByClassName("volume-bar")[0].firstElementChild
playing = document.getElementsByClassName("now-playing now-playing--cover-expanded")[0]
text = 'Advertisement'
window.setInterval(function(){
    nowPlaying = playing.ariaLabel.split(' ')[2]
    nowStatus = document.getElementsByClassName("volume-bar")[0].firstElementChild.ariaLabel
    if (nowPlaying == text && nowStatus == 'Mute'){
        muteButton.click()
    }
    else if (nowPlaying != text && nowStatus == 'Unmute'){
        muteButton.click()
}
}, 1000);