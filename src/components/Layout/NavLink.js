import { SiteHeaderDiv, LinkRouterDom, Button } from '../../styles';

const NavLink = () => {
  return (
    <SiteHeaderDiv>
      <div>
        <LinkRouterDom to="/">Paket Test Darah</LinkRouterDom>
      </div>
      <div>
        <LinkRouterDom to="/laboratorium">Laboratorium</LinkRouterDom>
      </div>
      <div>
        <LinkRouterDom to="/artikel">Artikel</LinkRouterDom>
      </div>
      <div>
        <LinkRouterDom to="/login">
          <Button modifiers="mediumLogin">Masuk</Button>
        </LinkRouterDom>
      </div>
      <div>
        <LinkRouterDom to="/register">
          <Button modifiers="mediumRegister">Daftar</Button>
        </LinkRouterDom>
      </div>
    </SiteHeaderDiv>
  );
};

export default NavLink;
