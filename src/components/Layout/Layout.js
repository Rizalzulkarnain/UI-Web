import Header from './Header';
import Footer from './Footer';

import { Main } from '../../styles';

const Layout = ({ children }) => {
  return (
    <Main>
      <Header />
      {children}
      <Footer />
    </Main>
  );
};

export default Layout;
