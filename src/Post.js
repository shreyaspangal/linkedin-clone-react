import React from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';
import InputOption from './InputOption';
// Icons
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post({ name, description, message, photoUrl }) {
    return (
        <div className='post'>
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like"/>
                <InputOption Icon={MessageOutlinedIcon} title="Comment"/>
                <InputOption Icon={ShareOutlinedIcon} title="Share"/>
                <InputOption Icon={SendOutlinedIcon} title="Send"/>
            </div>
        </div>
    )
}

export default Post