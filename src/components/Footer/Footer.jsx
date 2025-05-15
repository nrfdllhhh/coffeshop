import style from './Footer.module.css';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className={style.container}>
      <footer className={style.footer}>
        <div className={style.footerTop}>
          <div className={style.brand}>
            <h2 className={style.title}><strong>Coffee Botsky</strong></h2>
            <p className={style.description}>
              Tempat ngopi sambil ngoding. Nikmati suasana cozy, kopi hangat, dan WiFi kencang!
            </p>
          </div>

          <div className={style.links}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Order</a></li>
            </ul>
          </div>

          <div className={style.social}>
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#"><FaInstagram className={style.icon} /> Instagram</a></li>
              <li><a href="#"><FaFacebookF className={style.icon} /> Facebook</a></li>
              <li><a href="#"><FaTwitter className={style.icon} /> Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className={style.footerBottom}>
          <p className={style.author}>@ 2025 <strong>Coffee Botsky</strong>. Created by Nur Fadilah</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
