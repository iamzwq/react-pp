import { Spin } from "antd";
import styles from "./index.module.css";

const BigSpin = () => {
  return (
    <Spin
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
