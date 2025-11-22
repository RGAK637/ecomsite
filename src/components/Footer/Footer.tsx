import Image from 'next/image';
import styles from './Footer.module.css';

const footerLinks = ['Company', 'Products', 'Offices', 'About', 'Contact'];

const socialIcons = [
  { src: '/assets/instagram_icon.png', alt: 'Instagram' },
  { src: '/assets/pintester_icon.png', alt: 'Pinterest' },
  { src: '/assets/whatsapp_icon.png', alt: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <Image
          src="/assets/logo_big.png"
          alt="Shopper logo"
          width={65}
          height={65}
        />
        <p>SHOPPER</p>
      </div>

      <ul className={styles.footerLinks}>
        {footerLinks.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>

      <div className={styles.footerSocialIcons}>
        {socialIcons.map(({ src, alt }) => (
          <div key={alt} className={styles.iconContainer}>
            <Image src={src} alt={alt} width={25} height={25} />
          </div>
        ))}
      </div>

      <div className={styles.footerCopyright}>
        <hr />
        <p>&copy; {new Date().getFullYear()} Shopper. All rights reserved</p>
      </div>
    </footer>
  );
}
