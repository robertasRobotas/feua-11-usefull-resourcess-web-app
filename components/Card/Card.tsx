import React from "react";
import Link from "next/link";
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
    <Link href={`/resource/${_id}`}>
      <div key={_id} className={styles.wrapper}>
        <h3>{title}</h3>
        <h6>{category}</h6>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Card;
