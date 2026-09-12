import type { FC } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ArticleDetail.module.css";
import { ALL_ARTICLES } from "../../../constants/articles";
import { articleDetailPath, ROUTES } from "../../../constants/routes";
import { useLanguage } from "../../../context/LanguageContext";

export const ArticleDetail: FC = () => {
  const { t } = useLanguage();
  const { slug } = useParams<{ slug: string }>();

  const index = ALL_ARTICLES.findIndex((a) => a.slug === slug);
  const article = index !== -1 ? ALL_ARTICLES[index] : null;

  if (!article) {
    return <Navigate to={ROUTES.ARTICLES} replace />;
  }

  const prevArticle = index > 0 ? ALL_ARTICLES[index - 1] : null;
  const nextArticle =
    index < ALL_ARTICLES.length - 1 ? ALL_ARTICLES[index + 1] : null;

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

          {showExcerpt && <p className={styles.excerpt}>{article.excerptAm}</p>}

          <div className={styles.divider} />

          <div className={styles.content}>{article.contentAm}</div>

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
