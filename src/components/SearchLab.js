import { SearchLabContainer } from '../styles';
import LabCard from './LabCard';

const SearchLab = () => {
  return (
    <SearchLabContainer>
      <div>
        <div className="filter__title">Filter hasil Pencarian</div>
        <div className="filter__card">
          <div>Harga</div>
          <div className="checkbox__price">
            <label className="container">
              Terendah - tertinggi
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Tertinggi - terendah
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <hr className="seperate__filter" />
          <div>Jenis Layanan</div>
          <div className="checkbox__price">
            <label className="container">
              Home Service
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Datang ke Lab
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      <div>
        <>
          <LabCard />
        </>
      </div>
    </SearchLabContainer>
  );
};

export default SearchLab;
