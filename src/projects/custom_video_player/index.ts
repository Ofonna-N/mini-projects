const video: HTMLVideoElement = document.getElementById(
  "video-player"
)! as HTMLVideoElement;

const playButton = document.querySelector(".play-btn")! as HTMLButtonElement;
const stepForwardButton = document.querySelector(
  ".step-fwd-btn"
)! as HTMLButtonElement;

video.addEventListener("click", toggleVideo);
playButton.addEventListener("click", toggleVideo);
stepForwardButton.addEventListener("click", stepForward);

function toggleVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  updatePlayButton(video.paused);
}

function updatePlayButton(isPaused: boolean) {
  const btnIcon = playButton.children[0];
  if (isPaused) {
    btnIcon.classList.replace("fa-pause", "fa-play");
  } else {
    btnIcon.classList.replace("fa-play", "fa-pause");
  }
}

function stepForward() {
  video.currentTime += 5;
}

const initVideoPlayer = () => {};

initVideoPlayer();
