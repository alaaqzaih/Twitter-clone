import React from 'react'
import { Avatar } from "@material-ui/core";
import img from './me.jpg';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import './Post.css'
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {

  return (
    <div className='post'>
        <div className="post__avatar">
        <Avatar src={img} />
        </div>
        <div className="post__body">
        <div className="post__header">
            <div className="post__headerText">
            <h3>
                Alaa Qzaih{" "}
                <span className="post__headerSpecial">
                  <VerifiedUserIcon className="post__badge" /> @AlaaQzaih
                  
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>hiiiiiiiiiii</p>
            </div>
    
        </div>
        <img src={img} alt="" />
        <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
      </div>
    </div>
  )
}

export default Post
