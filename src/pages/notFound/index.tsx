import type { FC } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { ROUTES } from "../../constants/routes";
import styles from "./NotFound.module.css";

export const NotFound: FC = () => {
  const { t } = useLanguage();

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.number}>404</div>
        <h1 className={styles.heading}>{t("notFound.heading")}</h1>
        <p className={styles.body}>{t("notFound.body")}</p>
        <Link to={ROUTES.HOME} className={styles.btn}>
          <ArrowLeft size={18} />
          {t("common.back")}
        </Link>
      </div>
    </main>
  );
};
