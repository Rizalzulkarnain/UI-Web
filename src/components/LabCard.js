import { LabCardContainer } from '../styles';

import * as Image from '../assets';

const LabCard = () => {
  return (
    <LabCardContainer>
      <div>
        <img
          src={Image.HospitalExample}
          alt="Hospital"
          className="image__card"
        />
      </div>
      <div className="description__card">
        <div className="title__service__card">
          <div className="come__to__lab">DATANG KE LAB</div>
          <div className="home__service">HOME SERVICE</div>
        </div>
        <div>Parahita Buncit</div>
      </div>
      <div class="price__card">price</div>
    </LabCardContainer>
  );
};

export default LabCard;
