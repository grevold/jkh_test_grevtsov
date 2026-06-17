import { useCallback, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import videojs from 'video.js';
import s from "./Player.module.css"

interface Props {
    src: string;
    isPlay: boolean

}

export function Player({ src, isPlay }: Props) {

    const styles = {
        display: 'flex',
        "flex-direction": 'raw',
        "flex-wrap": "wrap",
        color: "white"
    };
    const [state, setState] = useState(false)

    const [error, setError] = useState(false);

    if (error) {
        return (<div className={s.error_container}><span style={styles} >{src}</span><div className={s.error_block}>Ошибка видео-потока</div></div>)
    } else {
        return (
            <div>
                <span style={styles} >{src}</span><ReactPlayer id={src} src={src} width={620} height={480} controls={true} onReady={() => {
                    setState(true);
                }} playing={isPlay} onError={() => setError(true)}></ReactPlayer>
                <div>{state ? ("видео загружено") : ("видео не загружено")}</div>
            </div>
        )

    }
}