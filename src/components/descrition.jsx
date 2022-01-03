import 'font-awesome/css/font-awesome.css'
export default function Descrition() {
    return (<>
        <div className="main">
            <div className="description-h1">

                <h1>Description - Loop Machine</h1>
            </div>
            <div className="description-div">
                    <a>• Playing audio tracks simultaneously, it is possible to mute each song individually.</a>
                    <a>• Activating the "Loop" button will allow you to repeat the sound player over and over again. (On. Off) </a>
                    <a>• Activating the Stop button will return the section to the beginning.</a>
                    <a>• Option to mute the audio tracks.</a>
            </div>

            <div className="description-div-down">
                        <h3>Development</h3>
                        <a><b>• client-side : </b> develope on react.js. </a>
                        <a><b>• Libraries : </b> react-router-dom, useState, useRef.</a>
                        <h3>Design</h3>
                        <a> <b>• Libraries : </b> font-awesome, react-bootstrap</a>
                        <h3>Links</h3>
                <a className='Link' href="https://github.com/BENJAMIN-1-WS/loop-machine-react"><b>• Git Hub</b></a>
                <a className='Link' href="https://github.com/BENJAMIN-1-WS/loop-machine-react"><b>• deploy on heroku server</b></a>
   
            </div> 
           
        </div>
    </>)
}