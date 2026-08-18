import { type FC } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Contact.module.css";

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// }

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    labelKey: "contact.info.address.label",
    valueKey: "contact.info.address.value",
    href: null,
  },
  {
    icon: Phone,
    labelKey: "contact.info.phone.label",
    valueKey: "contact.info.phone.value",
    href: "tel:",
  },
  {
    icon: Mail,
    labelKey: "contact.info.email.label",
    valueKey: "contact.info.email.value",
    href: "mailto:",
  },
  {
    icon: Clock,
    labelKey: "contact.info.hours.label",
    valueKey: "contact.info.hours.value",
    href: null,
  },
];

export const Contact: FC = () => {
  const { t } = useLanguage();
  // const [formData, setFormData] = useState<FormData>({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });
  // const [submitted, setSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   await new Promise((resolve) => setTimeout(resolve, 800));
  //   setLoading(false);
  //   setSubmitted(true);
  // };

  return (
    <main>
      {/* Page header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageHeading}>{t("contact.heading")}</h1>
          {/* <p className={styles.pageSubheading}>{t("contact.subheading")}</p> */}
        </div>
      </section>

      {/* Main content */}
      <section className={styles.mainSection}>
        <div className="container">
          <div className={styles.infoCards}>
            {CONTACT_ITEMS.map(({ icon: Icon, labelKey, valueKey, href }) => {
              const value = t(valueKey);
              const fullHref = href ? `${href}${value}` : undefined;
              return (
                <div key={labelKey} className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <Icon size={20} />
                  </div>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>{t(labelKey)}</span>
                    {fullHref ? (
                      <a href={fullHref} className={styles.infoValue}>
                        {value}
                      </a>
                    ) : (
                      <span className={styles.infoValue}>{value}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map placeholder */}
          <div className={styles.mapPlaceholder}>
            <MapPin size={32} className={styles.mapIcon} />
            <p>Yerevan, Armenia</p>
          </div>

          {/* Form */}
          {/* <div className={styles.formCol}>
              {submitted ? (
                <div className={styles.successState}>
                  <CheckCircle2 size={48} className={styles.successIcon} />
                  <h3 className={styles.successHeading}>
                    {t("contact.form.success")}
                  </h3>
                </div>
              ) : (
                <form
                  className={styles.form}
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="name">
                        {t("contact.form.name")}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className={styles.input}
                        placeholder={t("contact.form.name.placeholder")}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="email">
                        {t("contact.form.email")}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className={styles.input}
                        placeholder={t("contact.form.email.placeholder")}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="phone">
                      {t("contact.form.phone")}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={styles.input}
                      placeholder={t("contact.form.phone.placeholder")}
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="message">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={[styles.input, styles.textarea].join(" ")}
                      placeholder={t("contact.form.message.placeholder")}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className={styles.spinner} />
                    ) : (
                      <>
                        <Send size={18} />
                        {t("contact.form.submit")}
                      </>
                    )}
                  </button>
                </form>
              )}
          </div> */}
        </div>
      </section>
    </main>
  );
};
