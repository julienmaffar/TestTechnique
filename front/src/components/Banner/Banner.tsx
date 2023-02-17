import styles from "./Banner.module.css";

type BannerProps = {
  title: string;
};

export const Banner = ({ title }: BannerProps) => {
  return <div className={styles.wrapper}>{title}</div>;
};
