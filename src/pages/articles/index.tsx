import type { FC } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Layers } from "lucide-react";
import { ARTICLES, type Article } from "../../constants/articles";
import { useLanguage } from "../../context/LanguageContext";
import { articleDetailPath } from "../../constants/routes";
import {
  FEATURED_ARTICLE_IMAGE,
  ARTICLE_CARD_IMAGES,
} from "../../constants/articleImages";
import cardStyles from "../home/ArticlesSection.module.css";
import styles from "./Articles.module.css";

const [FEATURED_ARTICLE, ...REMAINING_ARTICLES] = ARTICLES;

export const Articles: FC = () => {
  const { t } = useLanguage();

  const renderBadge = (item: Article) => {
    const sectionsCount = "sections" in item ? item.sections?.length : 0;
    if (!sectionsCount) return null;
    return (
      <span className={styles.cardBadge}>
        <Layers size={12} />
        {t("articles.partsCount").replace("{count}", String(sectionsCount))}
      </span>
    );
  };

  return (
    <main>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageHeading}>{t("articles.heading")}</h1>
          <p className={styles.pageSubheading}>
            {t("articles.pageSubheading")}
          </p>
        </div>
      </section>

      <section className={["section", styles.articlesSection].join(" ")}>
        <div className="container">
          <Link
            to={articleDetailPath(FEATURED_ARTICLE.slug)}
            className={cardStyles.featuredCard}
          >
            <img
              src={FEATURED_ARTICLE_IMAGE}
              alt=""
              className={cardStyles.featuredImage}
              aria-hidden="true"
            />
            <div className={cardStyles.featuredGradient} />
            <div className={cardStyles.cardBody}>
              {renderBadge(FEATURED_ARTICLE)}
              <h3 className={cardStyles.featuredTitle}>
                {FEATURED_ARTICLE.titleAm}
              </h3>
              <p className={cardStyles.featuredExcerpt}>
                {FEATURED_ARTICLE.excerptAm}
              </p>
            </div>
            <span className={cardStyles.cardLink}>
              {t("articles.readArticle")}
              <ArrowRight size={15} />
            </span>
          </Link>

          <div className={cardStyles.cardsGrid}>
            {REMAINING_ARTICLES.map((item) => (
              <Link
                key={item.id}
                to={articleDetailPath(item.slug)}
                className={cardStyles.card}
              >
                {ARTICLE_CARD_IMAGES[item.slug] && (
                  <img
                    src={ARTICLE_CARD_IMAGES[item.slug]}
                    alt=""
                    className={cardStyles.cardImage}
                    aria-hidden="true"
                  />
                )}
                <div className={cardStyles.cardContent}>
                  <div className={cardStyles.cardBody}>
                    {renderBadge(item)}
                    <h3 className={cardStyles.cardTitle}>{item.titleAm}</h3>
                    <p className={cardStyles.cardExcerpt}>{item.excerptAm}</p>
                  </div>
                  <span className={cardStyles.cardLink}>
                    {t("articles.readArticle")}
                    <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
