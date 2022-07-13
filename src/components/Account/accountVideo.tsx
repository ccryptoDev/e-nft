import React, { useState, useEffect, useRef } from 'react'
// import { videoItemType } from '../../utils/types'
import videoInfo from './videoData'
import './video.scss'

interface videoItemType {
  id: number;
  original: string;
  video: string;
  thumbnail: string;
  alt: string;
  title: string,
  description: string;
}

const AccountVideo = () => {
  const videos : Array<videoItemType> = videoInfo

  const [playBtn, setPlayBtn] = useState('inline-block')
  const [pauseBtn, setPauseBtn] = useState('none')
  const [curVideo, setCurVideo] = useState({
    id: videos[0].id,
    original: videos[0].original,
    video: videos[0].video,
    title: videos[0].title,
    description: videos[0].description
  })

  const videoElem = useRef(document.createElement("video"))

  videoElem.current.onplay = function() {
    setPlayBtn('none')
    setPauseBtn('inline-block')
  }

  videoElem.current.onpause = function() {
    setPlayBtn('inline-block')
    setPauseBtn('none')
  }

  useEffect(() => {
    videoElem.current.src = curVideo.video
    // console.log(videoElem.current.currentSrc)
    videoElem.current.pause()
  }, [curVideo])

  const handleVideo = (id: number, original: string, video: string, title: string, description: string) => {
    setPlayBtn('inline-block')
    setPauseBtn('none')
    const newVideo = {
      id: id,
      original: original,
      video: video,
      title: title,
      description: description
    }
    setCurVideo(newVideo)
  }

  const hanleBackward = () => {
    let prevId = curVideo.id - 1
    prevId = prevId < 1 ? videos.length : prevId
    const nextVideo = {
      id: videos[prevId-1].id,
      original: videos[prevId-1].original,
      video: videos[prevId-1].video,
      title: videos[prevId-1].title,
      description: videos[prevId-1].description
    }
    setCurVideo(nextVideo)
    setPlayBtn('inline-block')
    setPauseBtn('none')
  }

  const hanleForward = () => {
    let nextId = curVideo.id + 1
    nextId = nextId > videos.length ? 1 : nextId
    const nextVideo = {
      id: videos[nextId-1].id,
      original: videos[nextId-1].original,
      video: videos[nextId-1].video,
      title: videos[nextId-1].title,
      description: videos[nextId-1].description
    }
    setCurVideo(nextVideo)
    setPlayBtn('inline-block')
    setPauseBtn('none')
  }

  const handlePlayBtn = () => {
    setPlayBtn('none')
    setPauseBtn('inline-block')
    videoElem.current.play()
  }

  const handlePauseBtn = () => {
    setPlayBtn('inline-block')
    setPauseBtn('none')
    videoElem.current.pause()
  }

  return (
    <div className="account-video">
      <h3>Wallet.<strong>Video Player</strong></h3>
      <div className="big-video">
        <div className="video-wrapper">
          <video ref={videoElem} poster={curVideo.original} playsInline controls>
            <source src={curVideo.video} type="video/mp4"></source>
          </video>
          <div className="video-action">
            <i className="fas fa-step-backward player-icon" onClick={hanleBackward}></i>
            <i className="far fa-play-circle player-icon play-icon-btn" id="play-btn-id" onClick={handlePlayBtn} style={{display: `${playBtn}`}}></i>
            <i className="far fa-pause-circle player-icon play-icon-btn" id="pause-btn-id" onClick={handlePauseBtn} style={{display: `${pauseBtn}`}}></i>
            <i className="fas fa-step-forward player-icon" onClick={hanleForward}></i>
          </div>
        </div>

        <div className="video-info">
          <h3>{curVideo.title}</h3>
          <p>{curVideo.description}</p>
        </div>
      </div>
      <hr />
      <div className="video-carousel">
        {videos.map((item, index: number) => (
          index > 0 && (
          <div className="small-video" key={item.id} onClick={(e) => handleVideo(item.id, item.original, item.video, item.title, item.description)}>
            <img src={item.thumbnail} alt={item.alt} />
            <div className="small-video-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>)
        ))}
      </div>
    </div>
  )
}

export default AccountVideo