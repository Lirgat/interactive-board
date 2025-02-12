import React, { FC, JSX } from "react";
import style from "./style.module.css";
import Logo from "../Logo/Logo.tsx";
// import MenuBtn from "../MenuBtn/MenuBtn.tsx";
import LinkList from "../LinkList/LinkList.tsx";

const HeaderComponent: FC = (): JSX.Element => {
  return (
      <header className={style.Header}>
        <Logo></Logo>
        {/* <MenuBtn></MenuBtn> */}
        <LinkList></LinkList>
      </header>
  );
};

export default HeaderComponent;
