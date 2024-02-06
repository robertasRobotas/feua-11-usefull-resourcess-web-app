import React from "react";
import styles from "./styles.module.css";

type CardType = {
  _id: string;
  category: string;
  content_link: string;
  description: string;
  title: string;
};

const Card: React.FC<CardType> = ({
  category,
  content_link,
  description,
  title,
  _id,
}) => {
  return (
    <div key={_id} className={styles.wrapper}>
      <a href={content_link} target="_blank">
        <h3>{title}</h3>
        <h6>{category}</h6>
        <p>{description}</p>
      </a>
    </div>
  );
};

export default Card;
