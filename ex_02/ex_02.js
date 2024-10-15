async function displayVideo(mp4) {
    try {
      const response = await fetch(mp4);
      const blob = await response.blob();
      const videoURL = URL.createObjectURL(blob);
  
      const videoElement = document.createElement('video');
      videoElement.src = videoURL;
      videoElement.controls = true;
      videoElement.style.width = '100%';
  
      document.getElementById('video-container').appendChild(videoElement);
    } catch (error) {
      console.error('Error loading video:', error.message);
      document.getElementById('video-container').textContent = 'Failed to load video.';
    }}
  document.getElementById('fetch-data').addEventListener('click', () => displayVideo('global.mp4'));
