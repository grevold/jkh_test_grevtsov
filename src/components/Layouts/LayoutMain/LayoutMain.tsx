import { JSX } from 'react';
import s from './LayoutMain.module.css';
import { Header } from '../../Header/Header';

interface Props {
  children?: JSX.Element;
}

export const LayoutMain: React.FC<Props> = ({ children }) => {
  return (
    <main className={s.root}>
      <Header />
      <div className={s.container}>{children}</div>
    </main>
  );
};
