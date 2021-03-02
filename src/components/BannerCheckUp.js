import * as Image from '../assets';
import { BannerCheckUpContainer } from '../styles';

const BannerCheckUp = () => (
  <BannerCheckUpContainer>
    <div>
      <div className="text__checkUp__title">Pilih Jenis Pemeriksaan</div>
      <div className="text__checkUp__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </div>
    <div>
      <img src={Image.Doctor} alt="img-doctor" />
    </div>
  </BannerCheckUpContainer>
);

export default BannerCheckUp;
