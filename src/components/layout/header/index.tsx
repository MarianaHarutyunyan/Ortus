import { useState, useEffect, type FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, Globe } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { NAVIGATION } from "../../../constants/navigation";
import { ROUTES } from "../../../constants/routes";
import { SITE_NAME } from "../../../constants/site";
import logoImage from "../../../assets/4EC8EDB8-F0CD-47E8-B10C-2EF97B148582.png";
import styles from "./Header.module.css";

export const Header: FC = () => {
  const { t, lang, toggleLang } = useLanguage();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={[styles.header, scrolled ? styles.scrolled : ""].join(" ")}
    >
      <div className={[styles.inner, "container"].join(" ")}>
        {/* Logo */}
        <Link to={ROUTES.HOME} className={styles.logo} aria-label={SITE_NAME}>
          <img src={logoImage} alt={SITE_NAME} className={styles.logoImage} />
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Primary navigation">
          {NAVIGATION.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={[
                styles.navLink,
                location.pathname === item.path ? styles.active : "",
              ].join(" ")}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <button
            className={styles.langToggle}
            onClick={toggleLang}
            aria-label={`Switch to ${lang === "am" ? "English" : "Armenian"}`}
          >
            <Globe size={15} />
            <span>{lang === "am" ? "EN" : "ՀՅ"}</span>
          </button>
          <Link
            to={ROUTES.CONTACT}
            className={styles.ctaBtn}
            aria-label={t("nav.cta")}
          >
            <Mail size={15} />
            <span className={styles.ctaBtnLabel}>{t("nav.cta")}</span>
          </Link>
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <nav aria-label="Mobile navigation">
            {NAVIGATION.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={[
                  styles.mobileNavLink,
                  location.pathname === item.path ? styles.active : "",
                ].join(" ")}
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
