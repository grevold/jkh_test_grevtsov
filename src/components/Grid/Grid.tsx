import { Player } from "../Player/Player"
import s from "./Grid.module.css"

interface Props {
    videosSrcs: string[],
    isPlayAll: boolean
}

export function Grid({ videosSrcs, isPlayAll }: Props) {

    return (
        <>
            <div className={s.root}>{videosSrcs.map((videoSrc) => (<div><Player src={videoSrc} isPlay={isPlayAll}></Player></div>))}</div>
        </>)
}