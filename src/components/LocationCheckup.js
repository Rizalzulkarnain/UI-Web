import * as Image from '../assets';

import {
  LocationCheckupContainer,
  Select,
  TypeOfPacket,
  Button,
} from '../styles';

const LocationCheckup = () => {
  return (
    <>
      <LocationCheckupContainer>
        <div>
          <div className="title__locationChekUp">Provinsi</div>
          <div>
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
          <div>
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
          <img src={Image.Stetoscop} alt="img-icon-stetoscop" />
          <input
            type="select-one"
            autocomplete="off"
            placeholder="Jenis Pemeriksaan"
          />
        </div>
      </LocationCheckupContainer>
      <TypeOfPacket>
        <div>
          <Button modifiers="bloodPacket">
            Paket Skrinning Diabetes Melitus{' '}
            <i
              style={{ marginLeft: '10px' }}
              className="fas fa-window-close"
            ></i>
          </Button>
        </div>
        <div>
          <Button modifiers="bloodPacket">
            Glukosa Puasa*{' '}
            <i
              style={{ marginLeft: '10px' }}
              className="fas fa-window-close"
            ></i>
          </Button>
        </div>
        <div>
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
        <div>
          <Button modifiers="bloodPacket">
            Cholesterol(Kolesterol) HDL*{' '}
            <i
              style={{ marginLeft: '10px' }}
              className="fas fa-window-close"
            ></i>
          </Button>
        </div>
        <div>
          <Button modifiers="bloodPacket">
            Insulin*{' '}
            <i
              style={{ marginLeft: '10px' }}
              className="fas fa-window-close"
            ></i>
          </Button>
        </div>
        <div>
          <Button modifiers="bloodPacket">
            Pap Smear*{' '}
            <i
              style={{ marginLeft: '10px' }}
              className="fas fa-window-close"
            ></i>
          </Button>
        </div>
        <div>
          <Button modifiers="disabled" disabled>
            Hapus Semua
          </Button>
        </div>
        <div>
          <Button modifiers="cariLabButton">Cari Lab</Button>
        </div>
      </TypeOfPacket>
    </>
  );
};

export default LocationCheckup;