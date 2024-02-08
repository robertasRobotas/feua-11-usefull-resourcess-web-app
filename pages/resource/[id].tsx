import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import axios from "axios";
import styles from "./styles.module.css";

type ResourceType = {
  title: string;
  description: string;
  category: string;
  content_link: string;
};

const Resource = () => {
  const router = useRouter();

  const [resource, setResource] = useState<ResourceType | null>(null);

  const fetchResource = async () => {
    const headers = {
      authorization: cookie.get("jwt_token"),
    };
    const response = await axios.get(
      `http://localhost:3001/resources/${router.query.id}`,
      {
        headers: headers,
      }
    );

    console.log(response.data.resource);
    setResource(response.data.resource);
  };

  useEffect(() => {
    router.query.id && fetchResource();
  }, [router.query.id]);

  return (
    <div className={styles.wrapper}>
      {resource && (
        <a href={resource.content_link} target="_blank">
          <div>{resource.title}</div>
          <div>{resource.description}</div>
          <div>{resource.category}</div>
        </a>
      )}
    </div>
  );
};

export default Resource;
