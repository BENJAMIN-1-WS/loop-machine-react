import React, { useState } from "react"
import Controller from "./controller"
import Playlist from "./playlist"
import { playList } from "../data"

export default function LoopMachin() {
  const [palyList, setPalyList] = useState(playList)

  return (
    <>
        <div className="containerLoopMachin">
          <Playlist />
        </div>
      

      <div className="bottomBar">
        <Controller />
      </div>
    </>
  )
}
