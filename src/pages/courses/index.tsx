import type { FC } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { ROUTES } from "../../constants/routes";
import { COURSES } from "../../constants/courses";
import styles from "./Courses.module.css";

export const Courses: FC = () => {
  const { t } = useLanguage();

  return (
    <main>
      {/* Page header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageHeading}>{t("courses.heading")}</h1>
          <p className={styles.pageSubheading}>{t("courses.subheading")}</p>
        </div>
      </section>

      {/* Courses grid */}
      <section className={styles.coursesSection}>
        <div className="container">
          <div className={styles.coursesGrid}>
            {COURSES.map(({ key, icon: Icon, color, bg, itemCount }) => (
              <article key={key} className={styles.courseCard}>
                <div className={styles.cardTop}>
                  <div
                    className={styles.cardIcon}
                    style={{ backgroundColor: bg }}
                  >
                    <Icon size={28} style={{ color }} />
                  </div>
                </div>
                <h2 className={styles.cardTitle}>{t(`course.${key}.title`)}</h2>
                <ul className={styles.cardList}>
                  {Array.from({ length: itemCount }, (_, i) => (
                    <li key={i + 1}>{t(`course.${key}.item${i + 1}`)}</li>
                  ))}
                </ul>
                <p className={styles.cardTagline}>
                  {t(`course.${key}.tagline`)}
                </p>
                <div className={styles.cardFooter}>
                  <Link to={ROUTES.CONTACT} className={styles.registerBtn}>
                    {t("courses.register")}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaHeading}>{t("contact.heading")}</h2>
            <Link to={ROUTES.CONTACT} className={styles.ctaBtn}>
              {t("courses.cta")}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
