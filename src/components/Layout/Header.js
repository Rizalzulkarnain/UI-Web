import {
  LinkRouterDom,
  HeaderMain,
  TopHeaderContainer,
  SiteHeader,
  SiteHeaderDiv,
  Button,
} from '../../styles';

const Header = () => {
  return (
    <>
      <HeaderMain>
        <TopHeaderContainer>
          <div>
            <i className="fas fa-calendar-alt" style={{ color: '#28a745' }}></i>{' '}
            Senin - Jum'at (09.00 - 18.00 WIB)
          </div>
          <div>
            <i className="far fa-comments" style={{ color: '#007bff' }}></i>{' '}
            +62811 1122 015
          </div>
          <div>
            <i className="far fa-envelope" style={{ color: '#fd7e14' }}></i>{' '}
            cs@triasse.com
          </div>
        </TopHeaderContainer>

        <SiteHeader>
          <div>
            <LinkRouterDom to="/">
              <img
                src="https://www.triasse.com/static/v2/assets/img/img-brand-logo.png"
                alt="Logo Triasse"
              />
            </LinkRouterDom>
          </div>

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
        </SiteHeader>
      </HeaderMain>
    </>
  );
};

export default Header;
