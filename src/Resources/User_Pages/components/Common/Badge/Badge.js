import React from "react";
import styles from "./HexagonBadge.module.css";

const HexagonBadge = ({ courseName, completedModules, totalModules }) => {
  const completionPercentage = (completedModules / totalModules) * 100;

  return (
    <div className={styles.hexagonBadge}>
      <div className={styles.hexagonBadgeContent}>
        <div className={styles.courseName}>{courseName}</div>
        <div className={styles.completionPercentage}>
          <div
            className={styles.completionCircle}
          >
            <span
              className={styles.completionText}
            >{`${completedModules}/${totalModules}`}</span>
          </div>
        </div>
      </div>
      <div
        className={styles.hexagonBadgeBackground}
        style={{
          clipPath:
            "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
        }}
      ></div>
    </div>
  );
};

export default HexagonBadge;
