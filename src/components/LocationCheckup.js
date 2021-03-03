import {
  WrapperLocationCheckup,
  LocationCheckupContainer,
  Select,
  TypeOfPacket,
  Button,
} from '../styles';

const LocationCheckup = () => {
  return (
    <WrapperLocationCheckup>
      <LocationCheckupContainer>
        <div>
          <div className="title__locationChekUp">Provinsi</div>
          <div className="wrapper__input__select__locationChekUp">
            <i className="fas fa-map-marker-alt icon__location"></i>
            <Select>
              <option value="1">DKI Jakarta</option>
              <option value="2">Jawa Timur</option>
              <option value="3">Jawa Barat</option>
              <option value="4">Bali</option>
            </Select>
          </div>
        </div>
        <div>
          <div className="title__locationChekUp">Kota/Kabupaten</div>
          <div className="wrapper__input__select__locationChekUp">
            <i className="fas fa-map-marked-alt icon__location"></i>
            <Select>
              <option value="1">Jakarta Pusat</option>
              <option value="2">Bandung</option>
              <option value="3">Depok</option>
              <option value="4">Serang</option>
            </Select>
          </div>
        </div>
        <div>
          <div className="title__locationChekUp">Paket & Jenis Pemeriksaan</div>
          <div className="wrapper__input__select__locationChekUp">
            <i className="fas fa-stethoscope icon__location"></i>
            <input type="text" placeholder="Jenis Pemeriksaan" />
          </div>
        </div>
      </LocationCheckupContainer>
      <TypeOfPacket>
        <div className="button__typeOfPacket__container">
          <Button modifiers="bloodPacket">
            Paket Skrinning Diabetes Melitus{' '}
            <i
              style={{ marginLeft: '10px' }}
              className="fas fa-window-close"
            ></i>
          </Button>
        </div>
        <div className="button__typeOfPacket__container">
          <Button modifiers="bloodPacket">
            Glukosa Puasa*{' '}
            <i
              style={{ marginLeft: '10px' }}
              className="fas fa-window-close"
            ></i>
          </Button>
        </div>
        <div className="button__typeOfPacket__container">
          <Button modifiers="bloodPacket">
            Cholesterol(Kolesterol) Total*{' '}
            <i
              style={{ marginLeft: '10px' }}
              className="fas fa-window-close"
            ></i>
          </Button>
        </div>
      </TypeOfPacket>
      <TypeOfPacket>
        <div className="button__typeOfPacket__container">
          <Button modifiers="bloodPacket">
            Cholesterol(Kolesterol) HDL*{' '}
            <i
              style={{ marginLeft: '10px' }}
              className="fas fa-window-close"
            ></i>
          </Button>
        </div>
        <div className="button__typeOfPacket__container">
          <Button modifiers="bloodPacket">
            Insulin*{' '}
            <i
              style={{ marginLeft: '10px' }}
              className="fas fa-window-close"
            ></i>
          </Button>
        </div>
        <div className="button__typeOfPacket__container">
          <Button modifiers="bloodPacket">
            Pap Smear*{' '}
            <i
              style={{ marginLeft: '10px' }}
              className="fas fa-window-close"
            ></i>
          </Button>
        </div>
        <div className="button__typeOfPacket__container">
          <Button modifiers="disabled" disabled>
            Hapus Semua
          </Button>
        </div>
        <div className="button__typeOfPacket__container">
          <Button modifiers="cariLabButton">Cari Lab</Button>
        </div>
      </TypeOfPacket>
    </WrapperLocationCheckup>
  );
};

export default LocationCheckup;
