import MetaData from '../components/MetaData';
import BannerCheckUp from '../components/BannerCheckUp';
import LocationCheckup from '../components/LocationCheckup';
import SearchLab from '../components/SearchLab';

import { BloodTestPacketContainer } from '../styles';

const BloodTestPacket = () => {
  return (
    <BloodTestPacketContainer>
      <MetaData title="Paket Test Darah" />
      <BannerCheckUp />
      <LocationCheckup />

      <hr className="separate__main" />

      <SearchLab />
    </BloodTestPacketContainer>
  );
};

export default BloodTestPacket;
