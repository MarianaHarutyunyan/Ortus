import { useRef, useState, type FC } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ArticleDetail.module.css";
import { ALL_ARTICLES } from "../../../constants/articles";
import { articleDetailPath, ROUTES } from "../../../constants/routes";
import { useLanguage } from "../../../context/LanguageContext";

export const ArticleDetail: FC = () => {
  const { t } = useLanguage();
  const { slug } = useParams<{ slug: string }>();

  const index = ALL_ARTICLES.findIndex((a) => a.slug === slug);
  const article = index !== -1 ? ALL_ARTICLES[index] : null;

  const [openSectionId, setOpenSectionId] = useState<string | null>(
    article && "sections" in article ? article.sections?.[0]?.id ?? null : null
  );
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleToggleSection = (sectionId: string, isOpen: boolean) => {
    const nextId = isOpen ? null : sectionId;
    setOpenSectionId(nextId);
    if (nextId) {
      requestAnimationFrame(() => {
        sectionRefs.current[nextId]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  };

  if (!article) {
    return <Navigate to={ROUTES.ARTICLES} replace />;
  }

  const prevArticle = index > 0 ? ALL_ARTICLES[index - 1] : null;
  const nextArticle =
    index < ALL_ARTICLES.length - 1 ? ALL_ARTICLES[index + 1] : null;

  const sections = "sections" in article ? article.sections : undefined;
  const showExcerpt = "showExcerpt" in article && article.showExcerpt;

  return (
    <main>
      <article className={styles.articlePage}>
        <div className={styles.container}>
          <Link to={ROUTES.ARTICLES} className={styles.backLink}>
            <ArrowLeft size={16} />
            {t("articles.backToArticles")}
          </Link>

          <h1 className={styles.title}>{article.titleAm}</h1>

          {showExcerpt && (
            <p className={styles.excerpt}>{article.excerptAm}</p>
          )}

          <div className={styles.divider} />

          {sections && sections.length > 0 ? (
            <div className={styles.sectionsList}>
              {sections.map((section, i) => {
                const isOpen = openSectionId === section.id;

                return (
                  <div
                    key={section.id}
                    ref={(el) => {
                      sectionRefs.current[section.id] = el;
                    }}
                    className={[
                      styles.sectionItem,
                      isOpen ? styles.sectionItemOpen : "",
                    ].join(" ")}
                  >
                    <button
                      type="button"
                      className={styles.sectionHeader}
                      aria-expanded={isOpen}
                      onClick={() => handleToggleSection(section.id, isOpen)}
                    >
                      <span className={styles.sectionNumber}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={styles.sectionTitle}>
                        {section.titleAm}
                      </span>
                      <ChevronDown
                        size={18}
                        className={styles.sectionChevron}
                      />
                    </button>
                    <div className={styles.sectionContentWrapper}>
                      <div className={styles.sectionContentInner}>
                        <p className={styles.sectionContent}>
                          {section.contentAm}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={styles.content}>{article.contentAm}</div>
          )}

          <div className={styles.divider} />

          <nav className={styles.articleNav} aria-label="Article navigation">
            {prevArticle ? (
              <Link
                to={articleDetailPath(prevArticle.slug)}
                className={[styles.navLink, styles.navPrev].join(" ")}
              >
                <ChevronLeft size={16} />
                <span>
                  <span className={styles.navLabel}>
                    {t("articles.previous")}
                  </span>
                  <span className={styles.navTitle}>{prevArticle.titleAm}</span>
                </span>
              </Link>
            ) : (
              <span />
            )}

            {nextArticle ? (
              <Link
                to={articleDetailPath(nextArticle.slug)}
                className={[styles.navLink, styles.navNext].join(" ")}
              >
                <span>
                  <span className={styles.navLabel}>{t("articles.next")}</span>
                  <span className={styles.navTitle}>{nextArticle.titleAm}</span>
                </span>
                <ChevronRight size={16} />
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </article>
    </main>
  );
};
