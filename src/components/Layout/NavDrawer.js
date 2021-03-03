import { NavDrawerContainer, LinkRouterDom, Button } from '../../styles';

const NavDrawer = () => {
  return (
    <NavDrawerContainer>
      <ul className="list__navbar">
        <li className="nav__link">
          <LinkRouterDom to="/">Paket Test Darah</LinkRouterDom>
        </li>
        <li className="nav__link">
          <LinkRouterDom to="/laboratorium">Laboratorium</LinkRouterDom>
        </li>
        <li className="nav__link">
          <LinkRouterDom to="/artikel">Artikel</LinkRouterDom>
        </li>

        <div className="auth__register__login">
          <li className="nav__link">
            <LinkRouterDom to="/login">
              <Button modifiers="mediumLogin">Masuk</Button>
            </LinkRouterDom>
          </li>
          <li className="nav__link">
            <LinkRouterDom to="/register">
              <Button modifiers="mediumRegister">Daftar</Button>
            </LinkRouterDom>
          </li>
        </div>
      </ul>
    </NavDrawerContainer>
  );
};

export default NavDrawer;
