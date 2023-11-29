import { useState, useEffect } from "react";
import { newsByCategory } from "./NewsServices";
import "./Header.css";
import catImage from "./catImage.jpg";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

export function NewsDashboard() {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    newsByCategory()
      .then((res) => {
        setNewsList(res.articles);
      })
      .catch((error) => {
        console.log("News By Category failed ", error.message);
      });
  }, []);

  ImgMediaCard(newsList);

  return (
    <div className="image-media-card-container">
      {newsList.map((newsItem, index) => (
        <ImgMediaCard key={newsItem.id} newsItem={newsItem} />
      ))}
    </div>
  );
}

export function ImgMediaCard({ newsItem }) {
  console.log(newsItem);
  if (!newsItem) {
    return null;
  }

  let { title, description, urlToImage } = newsItem;
  if (title === "[Removed]" || !title) {
    title = "Sleepy cat";
  }
  if (description === "[Removed]" || !description) {
    description = "cute little cat is sleeping under a bedsheet";
  }
  if (urlToImage === "[Removed]" || !urlToImage) {
    urlToImage = catImage;
  }

  return (
    <div style={{ marginTop: "10px" }}>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          alt="isreal people"
          height="140"
          image={urlToImage}
        />
        <h4 style={{ padding: "5px" }}>{title}</h4>

        <CardContent>
          <span style={{ fontSize: "12px" }}>{description}</span>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button size="small">
            <p style={{ textTransform: "capitalize" }}>read more ...</p>
          </Button>
          <Button size="small" variant="outlined">
            <BookmarkBorderIcon fontSize="small" />{" "}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
