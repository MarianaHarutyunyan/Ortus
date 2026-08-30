import { useRef, useState, type FC } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Heart,
  Lightbulb,
  Shield,
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Coins,
  Activity,
  Sparkles,
  ScrollText,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { ROUTES } from "../../constants/routes";
import { ArticlesSection } from "./ArticlesSection";
import heroImage from "../../assets/main(1).jpeg";
import curchImage from "../../assets/curchImage.png";
import styles from "./Home.module.css";

const VALUES = [
  { key: "curiosity", icon: Lightbulb },
  { key: "creativity", icon: Star },
  { key: "safety", icon: Shield },
  { key: "respect", icon: Heart },
];

const COURSE_PREVIEWS = [
  { key: "narek", icon: ScrollText, color: "#13294B", itemCount: 4 },
  { key: "body", icon: Activity, color: "#7A8D6A", itemCount: 3 },
  { key: "emotional", icon: Sparkles, color: "#D6B98C", itemCount: 3 },
  { key: "finance", icon: Coins, color: "#C27B4F", itemCount: 4 },
];

export const Home: FC = () => {
  const { t } = useLanguage();
  const valuesScrollRef = useRef<HTMLDivElement>(null);
  const [openDirections, setOpenDirections] = useState<
    Record<"premium" | "open", boolean>
  >({ premium: false, open: false });
  const [aboutOpen, setAboutOpen] = useState(false);

  const scrollValues = (dir: "left" | "right") => {
    const el = valuesScrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  };

  const toggleDirection = (key: "premium" | "open") => {
    setOpenDirections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <img
          src={heroImage}
          alt="ORTUS students"
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay} />

        <div className={["container", styles.heroInner].join(" ")}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>{t("site.tagline")}</span>

            <h1 className={styles.heroHeading}>
              <span>{t("hero.heading.line1")}</span>
              <em className={styles.heroAccent}>{t("hero.heading.line2")}</em>
            </h1>

            <p className={styles.heroSubheading}>{t("hero.subheading")}</p>

            <div className={styles.heroCtas}>
              <button
                type="button"
                className={styles.btnPrimary}
                onClick={() => setAboutOpen((o) => !o)}
                aria-expanded={aboutOpen}
              >
                {t("hero.cta.primary")}
                <ArrowRight
                  size={14}
                  className={[
                    styles.heroCtaIcon,
                    aboutOpen ? styles.heroCtaIconOpen : "",
                  ].join(" ")}
                />
              </button>
            </div>

            {aboutOpen && (
              <p className={styles.heroSecondText}>{t("values.subheading")}</p>
            )}
          </div>
        </div>

        <div className={styles.heroRibbon}>
          <span>{t("hero.image.word1")}</span>
          <span className={styles.heroRibbonDot}>•</span>
          <span>{t("hero.image.word2")}</span>
          <span className={styles.heroRibbonDot}>•</span>
          <span>{t("hero.image.word3")}</span>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className={styles.values}>
        <div className={styles.valuesScrollWrap}>
          <button
            className={[styles.valuesArrow, styles.valuesArrowLeft].join(" ")}
            onClick={() => scrollValues("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          <div className={styles.valuesScroll} ref={valuesScrollRef}>
            {VALUES.map(({ key, icon: Icon }) => (
              <div key={key} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Icon size={26} />
                </div>
                <h3 className={styles.valueTitle}>{t(`value.${key}.title`)}</h3>
                <p className={styles.valueDesc}>
                  {t(`value.${key}.description`)}
                </p>
              </div>
            ))}
          </div>

          <button
            className={[styles.valuesArrow, styles.valuesArrowRight].join(" ")}
            onClick={() => scrollValues("right")}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <ArticlesSection />

      {/* ── CHURCH BANNER ── */}
      <section
        className={styles.churchBanner}
        style={{ backgroundImage: `url(${curchImage})` }}
      >
        <div className={styles.churchOverlay} />
        <div className={["container", styles.churchContent].join(" ")}>
          <span className={styles.churchSpan1}>{t("church.span1")}</span>
        </div>
      </section>

      {/* ── CHURCH QUOTE ── */}
      <section className={styles.churchQuote}>
        <div className="container">
          <div className={styles.churchQuoteBox}>
            <p className={styles.churchSpan2}>{t("church.span2")}</p>
            <p className={styles.churchSpan3}>{t("church.span3")}</p>
          </div>
        </div>
      </section>

      {/* ── COURSES PREVIEW ── */}
      <section className={[styles.coursesPreview].join(" ")}>
        <div className="container">
          <div className={styles.coursesMeta}>
            <h2 className={styles.coursesHeading}>{t("courses.heading")}</h2>
          </div>

          <div className={styles.coursesGrid}>
            {COURSE_PREVIEWS.map(({ key, icon: Icon, color, itemCount }) => (
              <div key={key} className={styles.courseCard}>
                <div
                  className={styles.courseIconWrap}
                  style={{ backgroundColor: `${color}18` }}
                >
                  <Icon size={24} style={{ color }} />
                </div>
                <h3 className={styles.courseTitle}>
                  {t(`course.${key}.title`)}
                </h3>
                <ul className={styles.courseList}>
                  {Array.from({ length: itemCount }, (_, i) => (
                    <li key={i + 1}>{t(`course.${key}.item${i + 1}`)}</li>
                  ))}
                </ul>
                <p className={styles.courseTagline}>
                  {t(`course.${key}.tagline`)}
                </p>
              </div>
            ))}
          </div>

          <div className={styles.coursesAction}>
            <Link to={ROUTES.COURSES} className={styles.btnPrimary}>
              {t("common.see_all")}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── LEARNING DIRECTIONS ── */}
      <section className={styles.directions}>
        <div className="container">
          <div className={styles.directionsGrid}>
            {/* Card 1 – Premium */}
            <div className={styles.directionCard}>
              <div
                className={[
                  styles.directionIconCircle,
                  styles.directionIconAccent,
                ].join(" ")}
              >
                <Users size={22} />
              </div>
              <div className={styles.directionCardBody}>
                <h3 className={styles.directionTitle}>
                  {t("directions.premium.subtitle")}
                </h3>
                <ul className={styles.directionList}>
                  {(["bullet1", "bullet2", "bullet3"] as const).map((b) => (
                    <li key={b}>{t(`directions.premium.${b}`)}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={styles.directionInfoToggle}
                  onClick={() => toggleDirection("premium")}
                  aria-expanded={openDirections.premium}
                >
                  {t("common.learn_more")}
                  <ChevronDown
                    size={18}
                    className={[
                      styles.directionInfoIcon,
                      openDirections.premium
                        ? styles.directionInfoIconOpen
                        : "",
                    ].join(" ")}
                  />
                </button>
                {openDirections.premium && (
                  <p className={styles.directionInfo}>
                    {t("directions.premium.info")}
                  </p>
                )}
              </div>
            </div>

            {/* Card 2 – Open Access */}
            <div className={styles.directionCard}>
              <div
                className={[
                  styles.directionIconCircle,
                  styles.directionIconGreen,
                ].join(" ")}
              >
                <Users size={22} />
              </div>
              <div className={styles.directionCardBody}>
                <h3 className={styles.directionTitle}>
                  {t("directions.open.subtitle")}
                </h3>
                <ul className={styles.directionList}>
                  {(["bullet1", "bullet2", "bullet3"] as const).map((b) => (
                    <li key={b}>{t(`directions.open.${b}`)}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={styles.directionInfoToggle}
                  onClick={() => toggleDirection("open")}
                  aria-expanded={openDirections.open}
                >
                  {t("common.learn_more")}
                  <ChevronDown
                    size={18}
                    className={[
                      styles.directionInfoIcon,
                      openDirections.open ? styles.directionInfoIconOpen : "",
                    ].join(" ")}
                  />
                </button>
                {openDirections.open && (
                  <p className={styles.directionInfo}>
                    {t("directions.open.info")}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            {/* <div className={styles.ctaContent}>
              <h2 className={styles.ctaHeading}>{t("contact.heading")}</h2>
              <p className={styles.ctaSubheading}>{t("contact.subheading")}</p>
            </div> */}
            {/* <Link to={ROUTES.CONTACT} className={styles.ctaButton}>
              {t("nav.cta")}
              <ArrowRight size={18} />
            </Link> */}
          </div>
        </div>
      </section>
    </main>
  );
};
