import { useState, useEffect, useRef } from 'react'
import { musicList } from './musicList'

const lineHeight = {
  lineHeight: "1.15 !important"
}

interface Music {
  id: string,
  track: string,
  artist: string,
  albumCover: string,
  file: string,
}

const MusicPlayer = () => {
  const [playBtn, setPlayBtn] = useState('inline-block')
  const [pauseBtn, setPauseBtn] = useState('none')
  const [playing, setPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [progress, setProgress] = useState(0)
  const [song, setSong] = useState({
    id: musicList[0].id,
    track: musicList[0].track,
    artist: musicList[0].artist,
    albumCover: musicList[0].albumCover,
    file: musicList[0].file
  });

  let curAudio = useRef(new Audio(song.file))

  useEffect(() => {
    if (playing) {
      curAudio.current.play().then(() => {
      }).catch(error => {
        setHasError(true);
      });
    } else if (!hasError) {
      curAudio.current.pause();
    }
  }, [playing, hasError]);

  const handleAudio = (audioData: Music) => {
    setPlaying(prevState => {
      return !prevState
    })
    playingNewMusic(audioData)
  }

  // play button
  const handlePlayBtn = () => {
    setPlayBtn('none')
    setPauseBtn('inline-block')
    setPlaying(true)
  }

  // pause button
  const handlePauseBtn = () => {
    setPlayBtn('inline-block');
    setPauseBtn('none')
    setPlaying(false)
  }

  curAudio.current.onended = function () {
    setPlaying(false);
    setPlayBtn('inline-block')
    setPauseBtn('none')
  }

  curAudio.current.onplay = function () {
    setHasError(false);
  }

  curAudio.current.ontimeupdate = function () {
    setProgress((curAudio.current.currentTime / curAudio.current.duration) * 100)
  }

  const hanleBackward = () => {
    const curMusicID = parseInt(song.id)
    let nextMusicID = curMusicID - 1;
    if(nextMusicID === 0) {
      nextMusicID = musicList.length
    }
    const nextMusic = musicList[nextMusicID - 1]
    playingNewMusic(nextMusic)
  }

  const hanleForward = () => {
    const curMusicID = parseInt(song.id)
    let nextMusicID = curMusicID + 1;
    if(nextMusicID > musicList.length) {
      nextMusicID = 1
    }
    const nextMusic = musicList[nextMusicID - 1]
    playingNewMusic(nextMusic)
  }

  const handleRestart = () => {
    curAudio.current.currentTime = 0
    setProgress(0)
  }

  const handleRandom = () => {
    curAudio.current.currentTime = 0
    setProgress(0)
    let randomNum = Math.floor(Math.random() * (musicList.length - 1))
    if(playing === true) {
      setPlaying(false)
    }
    const randomMusic = musicList[randomNum]
    playingNewMusic(randomMusic)
  }

  const playingNewMusic = (audioData: Music) => {
    setSong({
      id: audioData.id,
      track: audioData.track,
      artist: audioData.artist,
      file: audioData.file,
      albumCover: audioData.albumCover
    })
    curAudio.current.src = song.file
    setPlaying(true)
    setPlayBtn('none')
    setPauseBtn('inline-block')
    curAudio.current.play()
  }

  return (
    <div className="phone-mockup">
      <div className="main-container">
        <div id="music-player-bootsy">
          <div className="music-card">
            <audio id="play-audio" src={song.file}></audio>
            <img className="player-image" src={song.albumCover} />
            <div id="progress-wrapper">
              <div id="progress" style={{width: progress + "%"}}>
              </div>
            </div>
            <div className="play-btn">
              <i className="fas fa-random player-icon" onClick={handleRandom}></i>
              <i className="fas fa-step-backward player-icon" onClick={hanleBackward}></i>
              <i className="far fa-play-circle player-icon play-icon-btn" id="play-btn-id" onClick={handlePlayBtn} style={{display: `${playBtn}`}}></i>
              <i className="far fa-pause-circle player-icon play-icon-btn" id="pause-btn-id" onClick={handlePauseBtn} style={{display: `${pauseBtn}`}}></i>
              <i className="fas fa-step-forward player-icon" onClick={hanleForward}></i>
              <i className="fas fa-history player-icon" onClick={handleRestart}></i>
            </div>
            <div>
              <h3 className="song-name">{song.track}</h3>
              <p className="singer-name" dangerouslySetInnerHTML={{__html: song.artist}} />
            </div>
          </div>
        
          <div id="music-playlist-bootsy" style={{display: "none"}}>
            {musicList.map((music: Music) => (
            <div className="music-card-list" key={music.id} onClick={(e) => handleAudio({id: music.id, file: music.file, albumCover: music.albumCover, track: music.track, artist: music.artist})}>
              <img src={music.albumCover} className="music-image" />
              <div className="music-details">
                <h5 className="music-name">{music.track}</h5>
                <p className="singer-name" dangerouslySetInnerHTML={{__html: music.artist}} />
              </div>
            </div>
            ))}
          </div>
        </div>
        
        <div id="play-audio"></div>
        <div id="pause-btn-id"></div>
        <div id="play-btn-id"></div>
        <div id="progress"></div>
      </div>
    </div>
  )
}

export default MusicPlayer