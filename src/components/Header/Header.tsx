import React, { FC, JSX, useEffect, useState } from "react";
import style from "./style.module.css";
import Logo from "../Logo/Logo.tsx";
// import MenuBtn from "../MenuBtn/MenuBtn.tsx";
import LinkList from "../LinkList/LinkList.tsx";

const HeaderComponent: FC = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 300){
        setIsScrolled(true);
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll);

    return() => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <>
      <div className={style.invisibleBlock}></div>
      <header className={isScrolled ? `${style.Header} ${style.Sticky}` : style.Header}>
        <Logo/>
        {/* <MenuBtn></MenuBtn> */}
        <LinkList/>
      </header>
    </>
  );
};

export default HeaderComponent;
