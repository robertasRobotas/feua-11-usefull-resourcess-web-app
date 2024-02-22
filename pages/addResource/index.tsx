import React, { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import styles from "./styles.module.css";
import PageTemplate from "@/components/PageTemplate/PageTemplate";

const AddResource = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [contentLink, setContentLink] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string>("");

  const addResource = async () => {
    if (!title || !description || !category || !contentLink) {
      setErrorMessage("Please fill all the inputs");
      return;
    }

    const headers = {
      authorization: cookie.get("jwt_token"),
    };

    const resource = {
      title: title,
      description: description,
      category: category,
      content_link: contentLink,
    };

    try {
      const response = await axios.post(
        "https://feua11-back-usefull-resourcess.onrender.com/resources",
        resource,
        {
          headers: headers,
        }
      );

      console.log(response);
    } catch (err) {
      setErrorMessage("Something went wrong");
      console.log(err);
    }
  };

  return (
    <PageTemplate>
      <div className={styles.form}>
        <input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          placeholder="content link"
          value={contentLink}
          onChange={(e) => setContentLink(e.target.value)}
        />

        <button onClick={addResource}>Add resource</button>

        <h4>{errorMessage}</h4>
      </div>
    </PageTemplate>
  );
};

export default AddResource;
