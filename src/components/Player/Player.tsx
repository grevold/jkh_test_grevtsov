import { useCallback, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import videojs from 'video.js';

interface Props {
    src: string

}

export function Player({ src }: Props) {

    const styles = {
        display: 'flex',
        "flex-direction": 'raw',
        "flex-wrap": "wrap",
        color:"white"
    };
    const [state, setState] = useState(false)


    return (
        <div>
            <span style={styles} >{src}</span><ReactPlayer src={src} width={620} height={480} controls={true} onReady={() => {
                setState(true);
            }}></ReactPlayer>
            <div>{state ? ("видео загружено") : ("видео не загружено")}</div></div>




    )



}