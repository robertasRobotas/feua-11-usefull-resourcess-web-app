import { useEffect, useState } from "react";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import Card from "@/components/Card/Card";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

type ResourceType = {
  _id: string;
  category: string;
  content_link: string;
  description: string;
  title: string;
};

const Home = () => {
  const router = useRouter();

  const [resources, setResources] = useState<ResourceType[]>([]);

  const checkUserToken = () => {
    const token = cookie.get("jwt_token");

    if (!token) {
      router.push("/login");
    }
  };

  const fetchResources = async () => {
    const headers = {
      authorization: cookie.get("jwt_token"),
    };

    try {
      const response = await axios.get("http://localhost:3001/resources", {
        headers: headers,
      });
      setResources(response.data.resources);
    } catch (err) {
      console.log(err);
      router.push("/login");
    }
  };

  useEffect(() => {
    checkUserToken();
    fetchResources();
  }, []);

  return (
    <>
      <Header />

      <Link href="/addResource">
        <h4 className={styles.addTutorial}>Add tutorial</h4>
      </Link>

      <div className={styles.cards}>
        {resources.map((resource) => {
          return (
            <Card
              key={resource._id}
              _id={resource._id}
              category={resource.category}
              content_link={resource.content_link}
              description={resource.description}
              title={resource.title}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Home;
