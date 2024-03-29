import { useTranslation } from "react-i18next";
import videoBg from "../../../assets/sea3.mp4";
import videoBgRes from "../../../assets/videoBg.mp4";
import styles from "./OverlayBg.module.css";
import RotatingText from "../RotatingText/RotatingText";

function OverlayBg() {
  const { t } = useTranslation();
  return (
    <div>
      <div className={styles["fullscreen-bg"]}>
        <div className={styles["overlay"]}>
          <RotatingText />
          <br />
          <br />
          <br />
          <div className={styles["overlay-italianno"]}>
            <span className={styles["hotel-yo"]}>
              Hotel <span className={styles["yo"]}>YO</span>
            </span>
          </div>
        </div>
        <video
          loop
          muted
          autoPlay
          className={styles["fullscreen-bg__video-res"]}
          src={videoBgRes}
        />
        <video
          loop
          muted
          autoPlay
          className={styles["fullscreen-bg__video"]}
          src={videoBg}
        />
      </div>
    </div>
  );
}
export default OverlayBg;
