import * as Image from '../../assets';
import {
  FooterContainer,
  EmailSubcription,
  Button,
  SiteFooter,
} from '../../styles';

const Footer = () => {
  return (
    <FooterContainer>
      <EmailSubcription>
        <div className="text__newsletter">
          Berlangganan newsletter, spesial promo dan penawaran terbaik
        </div>
        <div className="form__newsletter">
          <form>
            <input type="text" placeholder="Masukka email Anda" />
            <Button modifiers="largeEmailSubscription" type="submit">
              Berlangganan
            </Button>
          </form>
        </div>
      </EmailSubcription>

      <SiteFooter>
        <div>
          <div className="title__footer">
            <img
              src="https://www.triasse.com/static/v2/assets/img/img-brand-logo-white.png"
              alt="logo"
            />
          </div>
          <ul>
            <li>
              Platform pertama untuk tes laboratorium dan pemeriksaan kesehatan
              di Indonesia yang memberikan pelanggan kemempuan untuk membuat
              keputusan yang lebih baik bagis kesehatan Indonesia.
            </li>
          </ul>
        </div>
        <div>
          <div className="title__footer">Lainnya</div>
          <ul>
            <li>Syarat & Ketentuan</li>
            <li>Karier</li>
            <li>Kebijakan Privasi</li>
            <li>Cara Kerja</li>
            <li>Login</li>
          </ul>
        </div>
        <div>
          <div className="title__footer">Hubungi Kami</div>
          <ul>
            <li>cs@triasse</li>
            <li>021-35760497</li>
            <li>08-1111-22-015</li>
            <li>Senin - Jumat</li>
            <li>(09.00 - 18.00)</li>
          </ul>
        </div>
        <div>
          <div className="title__footer">Alamat</div>
          <ul>
            <li>
              Gedung Perkantoran Madison Park, Lantai 6 Unit B. No. 02. Jl.
              Letjen S. Parman Kav 28, Jakarta 11470@triasse
            </li>
          </ul>
        </div>
        <div>
          <div className="title__footer">Media Sosial</div>

          <div className="medsos__logo">
            <div>
              <img src={Image.Facebook} alt="Triasse Facebook" />
            </div>
            <div>
              <img src={Image.Instagram} alt="Triasse Instagram" />
            </div>
            <div>
              <img src={Image.Linkedin} alt="Triasse LinkedIn" />
            </div>

            <div>
              <img src={Image.Pinteres} alt="Triasse Pinteres" />
            </div>
            <div>
              <img src={Image.Twitter} alt="Triasse Twitter" />
            </div>
            <div>
              <img src={Image.Youtube} alt="Triasse Youtube" />
            </div>
          </div>
        </div>
      </SiteFooter>
    </FooterContainer>
  );
};

export default Footer;
