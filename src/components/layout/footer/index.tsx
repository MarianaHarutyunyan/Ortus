import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { NAVIGATION } from "../../../constants/navigation";
import { SITE_NAME } from "../../../constants/site";
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
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="3.5" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="0.5"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Contact column */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>{t("footer.contact.label")}</h4>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>
                {t("contact.info.email.label")}
              </span>
              <a
                href={`mailto:${t("contact.info.email.value")}`}
                className={styles.footerLink}
              >
                {t("contact.info.email.value")}
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>
                {t("contact.info.phone.label")}
              </span>
              <a
                href={`tel:${t("contact.info.phone.value")}`}
                className={styles.footerLink}
              >
                {t("contact.info.phone.value")}
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
