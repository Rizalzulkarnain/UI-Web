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
      <img
        src="https://www.triasse.com/static/v2/assets/img/img-doctor.svg"
        alt="img-doctor"
      />
    </div>
  </BannerCheckUpContainer>
);

export default BannerCheckUp;
