import React, {useRef, useState} from "react";

import "../styles/layout/Header.css";
import { Menu } from "../components/Menu";
import { mainMenuLinks, secondaryMenuLinks } from "../constants/menuLinks";
import { ReactComponent as MenuIcon } from "../resources/images/icons/menu__icon.svg";
import { ReactComponent as MenuIconClose } from "../resources/images/icons/menu__icon-close.svg";

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuTitleRef = useRef(null);
  const menuOpenRef = useRef(null);

  const openMenu = () => {
    setIsMenuActive(true);
    menuTitleRef.current.focus();
  };

  const closeMenu = () => {
    setIsMenuActive(false);
    menuOpenRef.current.focus();
  };

  return (
    <header className="header">
      <h1 className="header__title">Page title</h1>
      <div
        className="menu__open header__menu-open"
        tabIndex="1"
        onClick={openMenu}
        ref={menuOpenRef}
      >
        <MenuIcon />
      </div>
      <Menu
        title="Menu"
        mainMenuLinks={mainMenuLinks}
        secondaryMenuLinks={secondaryMenuLinks}
        isActive={isMenuActive}
        handleClickClose={closeMenu}
        menuTitleRef={menuTitleRef}
        MenuIconClose={MenuIconClose}
      />
    </header>
  );
};
