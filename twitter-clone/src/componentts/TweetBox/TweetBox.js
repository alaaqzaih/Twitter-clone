import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from "@material-ui/core";
import img from './me.jpg';
import db from "../../utils/firebase";

function TweetBox() {
  const[tweetInput , setTweetInput] = useState('');
  const[tweetImg , setTweetImg] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Alaa",
      username: "AlaaQzaih",
      verified: true,
      text: tweetInput,
      image: tweetImg,
      avatar:
        "https://pbs.twimg.com/profile_images/1567177728260030472/wQwVYGd3_400x400.jpg",
    });

    setTweetInput("");
    setTweetImg("");
  };


  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__input">
            <Avatar src={img} />
          <input
            onChange={(e) => setTweetInput(e.target.value)}
             value={tweetInput}
            placeholder="What's happening?"
            type="text"
          />
            
            </div>
            <input
          value={tweetImg}
          onChange={(e) => setTweetImg(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
            <Button   onClick={sendTweet}
          type="submit" className='tweetBox__tweetButton'>Tweet</Button>
        </form>
      
    </div>
  )
}

export default TweetBox
