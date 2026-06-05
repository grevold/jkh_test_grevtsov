import { Player } from "../Player/Player"
import s from "./Grid.module.css"

interface Props {
    videosSrcs: string[]
}

export function Grid({ videosSrcs }: Props) {
    return (<div className={s.root}>{videosSrcs.map((videoSrc) => (<div><Player src={videoSrc}></Player></div>))}</div>)
}