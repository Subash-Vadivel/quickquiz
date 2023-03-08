import React from "react";
import styles from "./BadgeCard.module.css";
import HexagonBadge from "./Badge";

const BadgeCard = ({ courses }) => {
  return (
    <div
      className={styles.badge_card_container}
      style={{ position: "relative", width: "100%" }}
    >
      {courses.map((course) => (
        <div className={styles.badge_card_badge} key={course.id}>
          <HexagonBadge
            courseName={course.name}
            completedModules={course.completedModules}
            totalModules={course.totalModules}
          />
        </div>
      ))}
    </div>
  );
};

export default BadgeCard;
