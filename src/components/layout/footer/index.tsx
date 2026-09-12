import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { NAVIGATION } from "../../../constants/navigation";
import { SITE_NAME } from "../../../constants/site";
import { TELEGRAM_URL, INSTAGRAM_URL } from "../../../constants/social";
import { InstagramIcon } from "../../ui/icons/InstagramIcon";
import logoImage from "../../../assets/footer-logo.png";
import styles from "./Footer.module.css";
import type { FC } from "react";

export const Footer: FC = () => {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={["container", styles.inner].join(" ")}>
        {/* Brand column */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src={logoImage} alt={SITE_NAME} className={styles.logoImage} />
          </div>
          <p className={styles.tagline}>{t("footer.tagline")}</p>
        </div>

        {/* Nav column */}
        <div className={styles.col}>
          <nav>
            {NAVIGATION.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={styles.footerLink}
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>
          <div className={styles.social}>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Telegram"
            >
              <Send size={16} />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>

        {/* Contact column */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>{t("footer.contact.label")}</h4>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>
                {t("contact.info.telegram.label")}
              </span>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                {t("contact.info.telegram.value")}
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>
                {t("contact.info.instagram.label")}
              </span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                {t("contact.info.instagram.value")}
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>
                {t("contact.info.address.label")}
              </span>
              <span className={styles.footerLink}>
                {t("contact.info.address.value")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.rights}>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};
