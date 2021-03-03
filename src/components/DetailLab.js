import * as Image from '../assets';
import {
  DetailLabContainer,
  RatingPricePacket,
  DiscountPricePaketTotal,
  Button,
} from '../styles';

const DetailLab = () => {
  return (
    <DetailLabContainer>
      <div className="description__laboratory">
        <div>
          <img src={Image.ArticleDummy} alt="article" />
        </div>
        <div className="article__laboratory__container">
          <div className="title__article">Paket Skrining Diabetes Mellitus</div>
          <div className="subtitle__article">Informasi detil</div>
          <div className="main__article">
            Diabetes Mellitus yang juga dikenal di Indonesia dengan istilah
            penyakit kencing manis atau penyakit gula. Tubuh pasien yang
            menderita diabetes mellitus tidak dapat memproduksi atau tidak dapat
            merespon hormon insulin yang dihasilkan oleh organ pankreas,
            sehingga kadar gula darah meningkat dan menyebabkan komplikasi
            jangka pendek maupun jangka panjang. Diabetes merupakan salah satu
            penyebab kematian tertinggi di dunia, bahkan di Indonesia. Paket
            Skrining Diabetes Mellitus yang disediakan Triasse terdiri dari tiga
            jenis tes, yaitu:
            <div>
              <ol>
                <li>
                  Glukosa Puasa: Pemeriksaan glukosa dalam darah ini baru bisa
                  dilakukan setelah Anda puasa selama 8-10 jam untuk mendapatkan
                  hasil yang akurat. Pengecekan glukosa ini dilakukan untuk
                  mengetahui hipoglikemik atau hiperglikemik untuk membantu
                  memastikan diagnosis diabetes atau untuk memantau kadar gula
                  diabetesi. Tes glukosa puasa juga dapat membantu mendiagnosis
                  prediabetes.
                </li>
                <li>
                  HbA1c (A1c): Tes hemoglobin terglikasi (HbA1c) dapat membantu
                  mengecek rata-rata kadar gula darah Anda dalam periode 2-4
                  bulan. HbA1c adalah gugus heterogen yang terbentuk dari reaksi
                  kimia antara hemoglobin dan glukosa. Pemeriksaan ini perlu
                  dilakukan saat baru terdiagnosis DM, DM berada pada kondisi
                  harus tergantung pada insulin, dan kondisi DM yang tidak
                  tergantung insulin. Tes ini juga diperlukan untuk
                  mengendalikan kondisi DM dan memperkecil risiko komplikasi
                  diabetes.
                </li>
                <li>
                  Urine Lengkap/Rutin: Tes urine untuk pemeriksaan diabetes
                  adalah untuk mendeteksi glukosa lewat urine.
                </li>
              </ol>
            </div>
          </div>

          <div className="subtitle__article">Persiapan</div>
          <div className="main__article">Perlu puasa 10 – 12 jam</div>
        </div>
      </div>
      <div className="packet__price__laboratory">
        <div className="title__price__packet">
          Paket Skrining Diabetes Mellitus
        </div>

        <hr className="seperate__price__packet" />

        <div className="contents__price__packet">
          <div>
            <img src={Image.HospitalExample} alt="hospital" />
          </div>
          <div className="description__price__packet">
            <div className="title__description__price__packet">
              Parahita Buncit
            </div>

            <RatingPricePacket>
              <div>
                <img
                  className="star__rating__image"
                  src={Image.Star}
                  alt="star"
                />
              </div>
              <div class="score__rating">4.8</div>
            </RatingPricePacket>
            <div className="address__price__packet">
              Jl. Warung Buncit Raya 150 Jakarta Selatan
            </div>

            <div className="pin__address__price__packet">
              <i className="fas fa-map-marker-alt"></i> Lihat Peta
            </div>
          </div>
        </div>
        <hr className="seperate__price__packet" />

        <div className="note__explain__price__packet">
          <div className="note__explain__price__packet__child">
            {' '}
            <span>
              <i className="fas fa-circle"></i>
            </span>{' '}
            <span style={{ marginLeft: '5px' }}>Tidak bisa reschedule</span>
          </div>
          <div>
            {' '}
            <span>
              <i className="fas fa-circle"></i>
            </span>
            <span style={{ marginLeft: '9px' }}>Tidak bisa refund</span>
          </div>
        </div>

        <hr className="seperate__price__packet" />

        <DiscountPricePaketTotal>
          <div className="discount__original__price">
            <div className="discount__price__packet">Hemat 20%</div>
            <div className="not__discount__price__packet">Rp370.500</div>
          </div>

          <div className="final__total__price__packet">Rp370.500</div>

          <div className="button__order__price__packet">
            <Button modifiers="largeEmailSubscription">Pesan Sekarang</Button>
          </div>
        </DiscountPricePaketTotal>
      </div>
    </DetailLabContainer>
  );
};

export default DetailLab;
