import React, { useState, useEffect, useRef } from 'react'
import { musicList } from './musicList'
import './audio.scss'

const lineHeight = {
  lineHeight: "1.15 !important"
}
const fontSize = {
  fontSize: "10px"
}

interface Music {
  id: string,
  track: string,
  artist: string,
  albumCover: string,
  file: string,
  time: string
}

const AccountAudio = () => {

  const [playBtn, setPlayBtn] = useState('inline-block')
  const [pauseBtn, setPauseBtn] = useState('none')
  const [playing, setPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentSong, setCurrentSong] = useState('0')
  const [song, setSong] = useState({
    id: musicList[0].id,
    track: musicList[0].track,
    artist: musicList[0].artist,
    albumCover: musicList[0].albumCover,
    file: musicList[0].file
  });
  const [curTime, setCurTime] = useState('00:00')
  const [eTime, setEndTime] = useState('00:00')

  let curAudio = useRef(new Audio(song.file))

  useEffect(() => {
    if (playing) {
      curAudio.current.play().then(() => {
        // Audio is playing.
      }).catch(error => {
        setHasError(true);
      });
    } else if (!hasError) {
      curAudio.current.pause();
    }
  }, [playing, hasError]);

  const handleAudio = (audioData: Music) => {
    setCurrentSong(audioData.id)
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

  const convertTime = (seconds: string) => {
    let sec = Math.floor( Number(seconds) );    
    let min = Math.floor( sec / 60 );
    
    let minute: string = min >= 10 ? String(min) : String('0' + min);
    sec = Math.floor( sec % 60 );
    
    let second = sec >= 10 ? sec : '0' + sec;    
    return minute + ':' + second;
  } 

  curAudio.current.ontimeupdate = function () {
    if(curAudio.current !== null) {
      let sec = curAudio.current.currentTime
      let strTime = convertTime(String(sec))

      setCurTime(strTime)
      setProgress((curAudio.current.currentTime / curAudio.current.duration) * 100)
    }
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

  curAudio.current.onloadedmetadata = function () {
    if(curAudio.current !== null) {
      let endTimeSec = curAudio.current.duration
      let endTime = convertTime(String(endTimeSec))

      setEndTime(endTime)
    }
  }

  // let audioElem = document.querySelector('#play-audio');
  // console.log('audio el', audioElem);

  return (
    <div id="account-audio">
      <h3>Wallet.<strong>Music Player</strong></h3>
      <div className="wallet-audio">
        <div className="music-player">
          <div className="music-card">
            <audio id="play-audio" ref={curAudio}>
              <source src={song.file}></source>
            </audio>
            <img className="player-image" src={song.albumCover} />
            {/* <div id="progress-wrapper">
              <div id="progress" style={{width: progress + "%"}}>
              </div>
            </div> */}
            <div className="play-btn">
              <i className="fas fa-history player-icon" onClick={handleRestart}></i>
              <i className="fas fa-step-backward player-icon" onClick={hanleBackward}></i>
              <i className="far fa-play-circle player-icon play-icon-btn" id="play-btn-id" onClick={handlePlayBtn} style={{display: `${playBtn}`}}></i>
              <i className="far fa-pause-circle player-icon play-icon-btn" id="pause-btn-id" onClick={handlePauseBtn} style={{display: `${pauseBtn}`}}></i>
              <i className="fas fa-step-forward player-icon" onClick={hanleForward}></i>
              <i className="fas fa-random player-icon" onClick={handleRandom}></i>
            </div>
            {/* <div>
              <h3 className="song-name">{song.track}</h3>
            </div> */}
          </div>
        </div>

        <div className="playlist-container">
          <div className="playlist-title show-big">
            <h3>Karen - The movie Soundtrack</h3>
            <h6>Tory Lanez / 2021 / 7 songs / 7 works of art</h6>
          </div>
          <div id="music-playlist">
            {musicList.map((music: Music) => (
            <div className={`music-card-list ${currentSong === music.id ? `active` : ``}`} 
              key={music.id} 
              onClick={(e) => handleAudio({id: music.id, file: music.file, albumCover: music.albumCover, track: music.track, artist: music.artist, time: music.time})}
            >
              <div className="music-details">
                <div className="music-num">{music.id}</div>
                <div className="playBtn"><i className="fas fa-play"></i></div>
                <div className="music-detail">Track 0{music.id} {music.track}</div>
                <div className="music-time">{music.time}</div>
              </div>
            </div>
            ))}
          </div>
        </div> 
      </div> 
      <div className="progress-bar-wrapper">
        <div className="start-time">{curTime}</div>
        <div className="progress-wrapper">
          <div className="progress" style={{width: progress + "%"}}></div>
        </div>
        <div className="end-time">{eTime}</div>
      </div>
    </div>
  )
}

export default AccountAudio