import { useState } from 'react';
import BackDrop from './BackDrop';
import SideDrawer from './SideDrawer';
import NavLink from './NavLink';
import NavDrawer from './NavDrawer';

import {
  LinkRouterDom,
  SiteHeader,
  HeaderMain,
  TopHeaderContainer,
} from '../../styles';

const Header = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  return (
    <>
      {drawerIsOpen && <BackDrop onClick={() => setDrawerIsOpen(false)} />}
      <SideDrawer show={drawerIsOpen} onClick={() => setDrawerIsOpen(false)}>
        <NavDrawer />
      </SideDrawer>

      <HeaderMain>
        <TopHeaderContainer>
          <div className="TopHeaderNav">
            <i className="fas fa-calendar-alt" style={{ color: '#28a745' }}></i>{' '}
            Senin - Jum'at (09.00 - 18.00 WIB)
          </div>
          <div className="TopHeaderNav">+62811 1122 015</div>
          <div className="TopHeaderNav">
            <i className="far fa-envelope" style={{ color: '#fd7e14' }}></i>{' '}
            cs@triasse.com
          </div>
        </TopHeaderContainer>

        <SiteHeader>
          <button
            className="main-navigation__menu-btn"
            onClick={() => setDrawerIsOpen(true)}
          >
            <span className="main-navigation__menu-btn__span" />
            <span className="main-navigation__menu-btn__span" />
            <span className="main-navigation__menu-btn__span" />
          </button>

          <div className="triasse__image__div">
            <LinkRouterDom to="/">
              <img
                className="triasse_image"
                src="https://www.triasse.com/static/v2/assets/img/img-brand-logo.png"
                alt="Logo Triasse"
              />
            </LinkRouterDom>
          </div>

          <nav className="main-navigation__header-nav">
            <NavLink />
          </nav>
        </SiteHeader>
      </HeaderMain>
    </>
  );
};

export default Header;
