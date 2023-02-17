import classnames from "classnames";

import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
  type?: "primary" | "secondary";
  handleClick?: () => void;
};

export const Button = ({
  label,
  type = "primary",

  handleClick,
}: ButtonProps) => {
  return (
    <button
      className={classnames(styles.wrapper, styles[type])}
      onClick={handleClick}>
      {label}
    </button>
  );
};
