import { useState } from "react"
import { Player } from "../Player/Player"
import s from "./Grid.module.css"

interface Props {
    videosSrcs: string[]
}

export function Grid({ videosSrcs }: Props) {

    const [isPlayAll, setIsPlayAll] = useState(false)


    return (

        <>
            <div><button onClick={() => setIsPlayAll(!isPlayAll)}>Play all</button></div><div className={s.root}>{videosSrcs.map((videoSrc) => (<div><Player src={videoSrc} isPlay={isPlayAll}></Player></div>))}</div></>)
}