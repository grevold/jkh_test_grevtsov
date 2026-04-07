import { MainLogo } from "../../assets/logo/MainLogo/MainLogo";
import s from "./Header.module.css";

export function Header() {
  return (
    <div className={s.root}>
      <MainLogo />
    </div>
  );
}
