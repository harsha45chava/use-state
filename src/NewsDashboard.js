import { useState, useEffect } from "react";
import { newsByCategory } from "./NewsServices";
import "./Header.css";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';



export function NewsDashboard() {
  // console.log(newsByCategory());
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
  
  // console.log(newsList);
  ImgMediaCard(newsList);
  return (
    <div className='image-media-card-container'>
      {/* Check if newsList has items before rendering */}
      {newsList.length > 0 && (
        <ImgMediaCard newsItem={newsList[0]} />
        
      )}
    </div>
  );
}

export function ImgMediaCard({ newsItem }) {
  console.log(newsItem);
  if (!newsItem) {
    return null; // Add a check to handle empty newsItem
  }

  const { title, description, urlToImage } = newsItem;
   console.log(title);
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="isreal people"
        height="140"
        image={urlToImage}
       
      />
      <h4 style={{padding:'5px'}}>{title}</h4>
     
      <CardContent>
      <span style={{fontSize:'12px'}}>{description}</span>
        
      </CardContent>
      <CardActions sx={{display:'flex',justifyContent:'space-between'}}>
        
        <Button size="small"><p style={{textTransform:'capitalize'}}>read more ...</p></Button>
        <Button size="small" variant="outlined" ><BookmarkBorderIcon fontSize="small" /> </Button>
       
       
        
      </CardActions>
    </Card>
  );
}


