import { Dispatch, SetStateAction, useState } from "react";
import s from "./ControllersPanel.module.css"
import { PlayIcon } from "../../content/icons/PlayIcon";
import { StopIcon } from "../../content/icons/StopIcon";

interface Props {
    onChange: Dispatch<SetStateAction<boolean>>,
    isPlayAll: boolean
}

export function ControllersPanel({ onChange, isPlayAll }: Props) {


    return (<div className={s.root}>
        <button className={!isPlayAll ? s.button_play : s.button_stop} onClick={() => onChange(!isPlayAll)}>{!isPlayAll ? (<PlayIcon />) : (<StopIcon />)}</button>
    </div>)
}