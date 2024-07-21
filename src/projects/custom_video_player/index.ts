const video: HTMLVideoElement = document.getElementById(
  "video-player"
)! as HTMLVideoElement;
const playButton = document.querySelector(".play-btn")! as HTMLButtonElement;
const stepForwardButton = document.querySelector(
  ".step-fwd-btn"
)! as HTMLButtonElement;
const rangeSlider = document.querySelector(".time-slider")! as HTMLInputElement;
const currentTime = document.querySelector(".current-time")! as HTMLSpanElement;
const duration = document.querySelector(".duration")! as HTMLSpanElement;
const volumeSlider = document.getElementById(
  "volume-slider"
)! as HTMLInputElement;

video.addEventListener("click", playOrPauseVideo);
playButton.addEventListener("click", playOrPauseVideo);
stepForwardButton.addEventListener("click", stepForward);
rangeSlider.addEventListener("input", updateVideoTime);
video.addEventListener("timeupdate", updateRangeSliderAndTimeStamp);
video.addEventListener("ended", () => updatePlayButton(true));
volumeSlider.addEventListener("input", updateVolume);
function playOrPauseVideo() {
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
  if (video.currentTime + 5 < video.duration) {
    video.currentTime += 5;
  } else {
    video.currentTime = video.duration;
  }
}

function updateVideoTime() {
  video.currentTime = (video.duration * +rangeSlider.value) / 100;
}

function updateRangeSliderAndTimeStamp() {
  rangeSlider.value = (video.currentTime / video.duration) * 100 + "";
  currentTime.textContent = formatTime(video.currentTime);
  duration.textContent = formatTime(video.duration);
}

function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}

function updateVolume() {
  video.volume = +volumeSlider.value;
}

const initVideoPlayer = () => {
  rangeSlider.min = "0";
  rangeSlider.value = "0";
  rangeSlider.max = "100";
  rangeSlider.step = "0.01";
  rangeSlider.style.width = "100%";
};

initVideoPlayer();
