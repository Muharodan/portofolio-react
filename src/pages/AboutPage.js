import about from '../img/drawkit-support-woman-colour.svg';
import caretright from '../img/caret-right-solid.svg';

const AboutPage = () => {
  return (
    <section className='about-page' id='about'>
      <div className='section-center'>
        <h2
          className='section-title'
          data-aos='zoom-in'
          data-aos-duration='1500'
        >
          Tentang Saya
        </h2>
        <div className='section-content'>
          <img src={about} alt='' />
          <p className='section-text'>
            Saya adalah lulusan Teknik Informatika Universitas Katolik Parahyangan,
            <br />
            dengan skill yang saya kuasai saya percaya dapat menambah skill dengan mencoba bergabung dengan perusahaan anda.
            <br />
            Sebagai seorang programmer, saya bisa melihat diri saya bisa membuat desain yang sesuai dengan keinginan klien,
            saya juga memahami konsep design thinking sehingga tujuan dapat tercapai dari sebuah desain.
            <br />
            Ini adalah beberapa teknologi yang saya kuasai:
          </p>

          <div className='technologies'>
            <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>HTML5</p>
            </div>
            <div className='single-technology'>
              <img src={caretright} alt='' />
              <p>CSS3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
