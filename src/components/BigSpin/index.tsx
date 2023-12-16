import { FC } from "react";
import { Spin, SpinProps } from "antd";
import styles from "./index.module.css";

const BigSpin: FC<SpinProps> = ({ ...props }) => {
  return (
    <Spin
      {...props}
      indicator={
        <div className="relative w-[100px] h-[100px] m-a">
          <div className={styles.loaderBounce} />
        </div>
      }
      fullscreen
    />
  );
};

export default BigSpin;
