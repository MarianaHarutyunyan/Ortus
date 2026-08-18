import type { FC } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ARTICLES } from "../../constants/articles";
import { useLanguage } from "../../context/LanguageContext";
import { ROUTES, articleDetailPath } from "../../constants/routes";
import {
  FEATURED_ARTICLE_IMAGE,
  ARTICLE_CARD_IMAGES,
} from "../../constants/articleImages";
import styles from "./ArticlesSection.module.css";

const [FEATURED_ARTICLE, ...REMAINING_ARTICLES] = ARTICLES;
const PREVIEW_ARTICLES = REMAINING_ARTICLES.slice(0, 3);

export const ArticlesSection: FC = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.articlesSection}>
      <div className="container">
        <div className={styles.articlesMeta}>
          <h2 className={styles.articlesHeading}>{t("articles.heading")}</h2>
        </div>

        <Link
          to={articleDetailPath(FEATURED_ARTICLE.slug)}
          className={styles.featuredCard}
        >
          <img
            src={FEATURED_ARTICLE_IMAGE}
            alt=""
            className={styles.featuredImage}
            aria-hidden="true"
          />
          <div className={styles.featuredGradient} />
          <div className={styles.cardBody}>
            <h3 className={styles.featuredTitle}>{FEATURED_ARTICLE.titleAm}</h3>
            <p className={styles.featuredExcerpt}>
              {FEATURED_ARTICLE.excerptAm}
            </p>
          </div>
          <span className={styles.cardLink}>
            {t("articles.readArticle")}
            <ArrowRight size={15} />
          </span>
        </Link>

        <div className={styles.cardsGrid}>
          {PREVIEW_ARTICLES.map((item) => (
            <Link
              key={item.id}
              to={articleDetailPath(item.slug)}
              className={styles.card}
            >
              {ARTICLE_CARD_IMAGES[item.slug] && (
                <img
                  src={ARTICLE_CARD_IMAGES[item.slug]}
                  alt=""
                  className={styles.cardImage}
                  aria-hidden="true"
                />
              )}
              <div className={styles.cardContent}>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.titleAm}</h3>
                  <p className={styles.cardExcerpt}>{item.excerptAm}</p>
                </div>
                <span className={styles.cardLink}>
                  {t("articles.readArticle")}
                  <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.viewAllWrap}>
          <Link to={ROUTES.ARTICLES} className={styles.viewAllBtn}>
            {t("articles.viewAll")}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
