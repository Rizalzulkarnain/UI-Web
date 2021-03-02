import MetaData from '../components/MetaData';
import BannerCheckUp from '../components/BannerCheckUp';
import LocationCheckup from '../components/LocationCheckup';

import { BloodTestPacketContainer } from '../styles';

const BloodTestPacket = () => {
  return (
    <BloodTestPacketContainer>
      <MetaData title="Paket Test Darah" />
      <BannerCheckUp />
      <LocationCheckup />

      <hr />
    </BloodTestPacketContainer>
  );
};

export default BloodTestPacket;
