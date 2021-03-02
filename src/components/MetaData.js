import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const MetaData = ({ title }) => (
  <Helmet>
    <title>{`${title} || Triasse`}</title>
  </Helmet>
);

MetaData.propTypes = {
  title: PropTypes.any,
};

export default MetaData;
