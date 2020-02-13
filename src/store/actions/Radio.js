import React, { Component } from 'react';
import FilePlayer from 'react-player/lib/players/FilePlayer';


import { Icon, Layout } from 'antd';
//import '../pictures_css_radio/radio.css';
//import styles from  '../pictures_css_radio/radio.css';
import playbtn from '../pictures_css_radio/play.svg';
import pausebtn from '../pictures_css_radio/pause.svg';
import spectrumpic from '../pictures_css_radio/spectrum.gif';
import spectrumNone from '../pictures_css_radio/spectrum-none.png';
import mutedbtn from '../pictures_css_radio/mute.svg';
import playingbtn from '../pictures_css_radio/playing.svg';
import bufferingpic from '../pictures_css_radio/buffering.svg';

const { Header, Content } = Layout;

class RadioPlayer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            playing: false,
            volume: 0.2,
            muted: false,
            buffering: false,
        };
    };

    playPause = () => {
        this.setState({ playing: !this.state.playing })
    }

    setVolume = e => {
        this.setState({ volume: parseFloat(e.target.value) });
        if (parseFloat(e.target.value) === 0) {
            this.setState({ muted: true })
        } else if (parseFloat(e.target.value) > 0) {
            this.setState({ muted: false })
        };
    }
    toggleMuted = () => {
        this.setState({ muted: !this.state.muted })
    }
    setBuffer = () => {
        // this.setState({ buffering: true });
        console.log("bufferring!!!");
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    render() {
        const radioUrl = 'http://213.141.133.1:8000/stream';
        const { playing, volume, muted, buffering } = this.state
        let radiostate;
        let showbufferingimg = false;


        // handle playing, muted and buffering states
        if (playing && !muted) {
            if (buffering) {
                radiostate = " Загружается";
                showbufferingimg = true;
            } else {
                radiostate = " Воспроизведение"
            }
        } else if (playing && muted) {
            if (buffering) {
                radiostate = " Загружается, звук выключен";
                showbufferingimg = true;
            } else {
                radiostate = " Звук выключен"
            }
        } else if (!playing && !muted) {
            radiostate = " Пауза"
        } else if (!playing && muted) {
            radiostate = " Пауза , звук выключен";
        }




        return (
            <Layout  >
                <div style={{ "textAlign": "center" }}>

                    <Header style={{ backgroundColor: "#6600ff", color: "white" }} >Радио Приозерск ФМ </Header>



                    {/* The logo */}
                    <Content>


                        {/* Check state of 1.Playing, 2.Paused and 3.Buffering 4.Muted*/}
                        <br></br>
                        <h4  > {radiostate}  {showbufferingimg ? <img className="right-floater" src={bufferingpic} alt="buffering" height="30px" width="30px" /> : ''}</h4>

                        {/* The Play/Pause ('button') image */}
                        <Icon style={{ fontSize: '62px', color: "black" }} type="play-circle" src={playing ? pausebtn : playbtn} alt="pause" onClick={this.playPause} />
                        <br></br>
                        <br></br>




                        {/* The audio player */}
                        <FilePlayer
                            config={{ file: { forceAudio: true } }}
                            url={radioUrl}
                            playing={playing}
                            volume={volume}
                            muted={muted}
                            width='0'
                            height='0'
                            onBuffer={this.setBuffer()}
                            onError={e => console.log('onError', e)}
                        />

                        {/* the volume and  Mute buttons */}
                        <div><Icon type="sound" style={{ fontSize: '22px', color: "black" }} src={muted ? mutedbtn : playingbtn} alt="volume button" onClick={this.toggleMuted} />
                            <input style={{ fontSize: '12px', color: "black" }} type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
                            <label >{(volume * 10).toFixed(1)}</label>
                        </div>

                        {/*The voice spectrum*/}
                        {showbufferingimg ? <img style={{ height: "80px", width: "100px" }} src={spectrumNone} alt="Voice spectrum" /> : <img className="spectrum-img-dimensions" style={{ height: "80px", width: "65%" }} src={playing ? spectrumpic : spectrumNone} alt="Voice spectrum" />}




                    </Content>

                </div>
            </Layout>


        );
    }

}


export default RadioPlayer