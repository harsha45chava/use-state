import { useState, useEffect } from "react";

import "./Header.css";

export default function NewsDashboard() {
  // console.log(newsByCategory());
  const [newsList, setNewsList] = useState("");
  useEffect(() => {
    newsByCategory()
      .then((res) => {
        setNewsList(res.articles);
      })
      .catch((error) => {
        console.log("News By Category failed ", error.message);
      });
  }, []);
  console.log(newsList);
  return <div></div>;
}
