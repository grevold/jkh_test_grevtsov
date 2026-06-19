import { ReactNode } from 'react';

import s from "./Layout.module.css"

interface Props {
    children: ReactNode
}

export function Layout({ children }: Props) {
    return (<div className={s.root}>{children}</div>)
}