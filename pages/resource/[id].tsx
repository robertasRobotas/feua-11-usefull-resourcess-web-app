import React, { useEffect } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import axios from "axios";

const Resource = () => {
  const router = useRouter();

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

    console.log(response);
  };

  useEffect(() => {
    router.query.id && fetchResource();
  }, [router.query.id]);

  return <div>re</div>;
};

export default Resource;
