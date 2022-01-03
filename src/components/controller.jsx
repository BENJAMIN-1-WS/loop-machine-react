import { useState } from "react"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPlay,faPause,faStop,faRedo,faVolumeMute,faVolumeUp,
} from "@fortawesome/free-solid-svg-icons"
import { playList } from "../data"
import { ButtonGroup, ToggleButton } from "react-bootstrap"

export default function Controller() {
  const [int1, setInt1] = useState()
  const [palyList, setPalyList] = useState(playList)
  const [checked, setChecked] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const Loop = () => {
    palyList.forEach((element) => {
      const ele = document.getElementById(element.name) 
      if (ele.loop) {
        ele.loop = false
      } else {
        ele.loop = true 
      }
    })
  }
  const Load = () => {
    palyList.forEach((element) => {
      const ele = document.getElementById(element.name)
      ele.load()
    })
  }
  const Pause = () => {
    stopSetValue()
    palyList.forEach((element) => {
      const ele = document.getElementById(element.name)
      ele.pause()
    })
  }
  const PlayAll = () => {
    palyList.forEach((element) => {
      const ele = document.getElementById(element.name)
      ele.play()
    })
    setValue()
  }
  const disableMuteAll = () => {
    palyList.forEach((element) => {
      const ele = document.getElementById(element.name)
      ele.muted = false
    })
  }
  const enableMuteAll = () => {
    palyList.forEach((element) => {
      const ele = document.getElementById(element.name)
      ele.muted = true
    })
  }
  const setValue = () => {
    const ele1 = document.getElementById("m1")
    const ele2 = document.getElementById("slider")
    const int__ = setInterval(() => {
      setInt1(int__)
      setCurrentTime(ele1.currentTime)
      ele2.value = ele1.currentTime
    }, 1)
  }
  const stopSetValue = () => {
    clearInterval(int1)
  }
  const formater = (currentTime) => {
    if (currentTime < 1 || currentTime > 8) return "00:00:00"
    else return `00:00:0${Number(currentTime).toFixed(0)}`
  } 
  return (
    <>

      <div className="controller">
        <div className="subController">
          <FontAwesomeIcon
            className="controllerIcons"
            icon={faVolumeMute}
            onClick={() => enableMuteAll()}
          />{" "}
          <FontAwesomeIcon
            className="controllerIcons"
            icon={faVolumeUp}
            onClick={() => disableMuteAll()}
          />{" "}
          <FontAwesomeIcon
            className="controllerIcons"
            icon={faStop}
            onClick={() => Load()}
          />
          <FontAwesomeIcon
            className="controllerIcons"
            icon={faPlay}
            onClick={() => PlayAll()}
          />
          <FontAwesomeIcon
            className="controllerIcons"
            icon={faPause}
            onClick={() => Pause()}
          />
          <ButtonGroup className="mb-2">
            <ToggleButton
              className="mb-2"
              id="toggle-check"
              type="checkbox"
              variant="outline-primary"
              checked={checked}
              onChange={(e) => setChecked(e.currentTarget.checked)}
              size="sm"
              onClick={() => Loop()}>
              <FontAwesomeIcon className="controllerIcons" icon={faRedo} />
            </ToggleButton>
          </ButtonGroup>
        </div>
<div className="shwotime">{formater(currentTime)}</div>
      </div>
    </>
  )
}
