import React, { useState, useRef } from "react"
import { playList } from "../data"

export default function Playlist() {
  const bgColors = ["#f64242",
                     "#f6b742",
                     "#d5f642",
                     "#6cf642",
                     "#42f6ab",
                     "#429ff6",
                     "#9f42f6",
                         "#f642a5"
  ];
  const [palyList, setPalyList] = useState(playList) // palyList Default songs

  const audioRef = useRef() // audio reference > import from "react"
  const mute = (name) => {
    // mute audio funcion
    palyList.forEach((element) => {
      const ele = document.getElementById(element.name)
      if (name === ele.id) {
        if (element.muted === true) {
          ele.muted = false
          element.muted = false
          console.log(name + " > " + ele.muted + " > unMute")
          unMute(name)
        } else {
          ele.muted = true
          element.muted = true
          console.log(name + " > " + ele.muted + " > mute")
        }
      }
    })
  }
  const unMute = (name) => {
    //unMute audio funcion
    palyList.forEach((element) => {
      const ele = document.getElementsByName(name)
      if (name === ele.id) {
        if (element.muted === false) {
          ele.muted = true
          element.muted = true
          console.log(name + " > " + ele.muted + " > mute")
          mute(name)
        } else {
          ele.muted = false
          element.muted = false
          console.log(name + " > " + ele.muted + " > muted")
        }
      }
    })
  }
  // calculator Current time of Audio track
  const onChange = (e) => {
    console.log("onChange")
    palyList.forEach((element) => {
      const audio = document.getElementById(element.name)
      // console.log(e.target.valueAsNumber);
      audio.currentTime = e.target.valueAsNumber
    })
  }

  return (
    <div className="play-list">
                  <div className="Audio-main">
                    
                    <div className="Audio-main-slider">
                      <input
                        type="range"
                        defaultValue={0}
                        min="0"
                        max="8"
                        step="0.01"
                        id="slider"
                        className="slider"
                        onClick={(e) => onChange(e)}
                        ></input>
                    </div>
                  </div>

      {palyList.map((p,inx) => {
        

        return (

          <div className="AudioTrack">

              <div className="AudioTrack-playList">
                  <div key={p.name} className="song">
                    <audio
                      ref={audioRef}
                      key={p.name}
                      id={p.name}
                      src={p.audio}
                      muted={p.muted}
                    ></audio>

                    <div className="form-check form-switch">
                      <span>Mute | Song: {p.name}</span>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={p.name + "-BootstrapSwitchButton"}
                        onClick={() => mute(p.name)}
                      ></input>
                      {/* <label
                                  className="form-check-label"
                                  htmlFor="flexSwitchCheckDefault"
                                ></label> */}
                    </div>

                  </div>
              </div>

              <div className="songBarElement" style={{backgroundColor: bgColors[inx] }}>





                    <div key={p.name} className={p.name}>
                      <div key={p.name} className="songBar" key={p.name}>
                        <div key={p.name} min="0" max="8" step="0.01"></div>
                      </div>
                    </div>
              </div>

          </div>

          )
          
          })}

    </div>
      
)}
