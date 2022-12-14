const videoContainer = document.querySelector('.about__video');

const startPlay = () => {
  const videoCover = videoContainer.querySelector('img');
  const videoButton = videoContainer.querySelector('button');
  if (videoContainer.dataset.videoSrc) {
    const videoUrl = videoContainer.dataset.videoSrc;
    let video = document.createElement('div');
    video.innerHTML = '<iframe width="560" height="315" src="' + videoUrl + '?feature=oembed&autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    videoContainer.appendChild(video);
  } else {
    let video = document.createElement('div');
    video.innerHTML = '<p style="background-color: #000000; color: red; width: 100%; height: 100%; font-weight: 700; margin: 0; text-align: center">Видео недоступно</p>';
    videoContainer.appendChild(video);
  }

  videoContainer.classList.add('about__video--close-cover');

  if (videoCover) {
    videoCover.style.display = 'none';
  }

  if (videoButton) {
    videoButton.style.display = 'none';
  }
};

export const initVideo = () => {
  if (videoContainer) {
    videoContainer.addEventListener('click', () => {
      startPlay();
    });
  }
};
