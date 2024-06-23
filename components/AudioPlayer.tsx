function AudioPlayer() {
  return (
    <div>
      wowo
      <div>
        <figure>
          <figcaption>Listen to the T-Rex:</figcaption>
          {/* <audio controls src="/media/cc0-audio/t-rex-roar.mp3"></audio> */}
          <audio
            controls
            src="https://server.unimelb.top/public/music/myaudio.m4a"
          ></audio>
          {/* <a href="/media/cc0-audio/t-rex-roar.mp3"> Download audio </a> */}
        </figure>
      </div>
    </div>
  );
}

export default AudioPlayer;
