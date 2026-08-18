import React, { type FC } from "react";
import styles from "./PageWrapper.module.css";

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
