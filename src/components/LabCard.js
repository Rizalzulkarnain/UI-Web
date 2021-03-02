import { LabCardContainer, PriceCard } from '../styles';

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
        <div className="hospital">Parahita Buncit</div>
        <div className="hospital__address">
          Jl. Warung Buncit Raya 150 Jakarta Selatan
        </div>
        <div className="hospital__rating__container">
          <div>
            <img src={Image.Star} alt="star" />
          </div>
          <div className="score__rating">4.8/5</div>
          <div className="description__rating">
            <div style={{ marginRight: '10px' }}>
              {' '}
              <span>
                <i className="fas fa-circle"></i>
              </span>{' '}
              Tidak bisa reschedule
            </div>
            <div style={{ marginRight: '10px' }}>
              {' '}
              <span>
                <i className="fas fa-circle"></i>
              </span>
              Tidak bisa refund
            </div>
          </div>
        </div>
      </div>

      <hr className="seperate__card__price" />

      <PriceCard>
        <div className="price__discount">Hemat 20%</div>
        <div className="not_discount">Rp370.500</div>
        <div className="final_discount">Rp370.500</div>
      </PriceCard>
    </LabCardContainer>
  );
};

export default LabCard;
