import React, { useEffect, useState } from 'react';
import './Feed.css';
import Post from './Post';
import InputOption from './InputOption';
// Firebase DB
import { db, getPosts, addPost } from './firebase';
// ICONS
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

function Feed() {

  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Gets latest snapshot of data from DB
    getPosts(db)
      .then(data => setPosts(data));
  }, [posts])

  const sendPost = (e) => {
    e.preventDefault();
    // Adds new city to DB
    addPost(db, input)
      .then(data => {
        setPosts(prevData => [...prevData, data]);
        setInput('');
      });
  }

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button type="submit" onClick={sendPost}>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title='Photo' Icon={ImageIcon} color='70B5F9' />
          <InputOption title='Video' Icon={SubscriptionsIcon} color='E7A33E' />
          <InputOption title='Event' Icon={EventNoteIcon} color='C0CBCD' />
          <InputOption title='Write article' Icon={CalendarViewDayIcon} color='7FC15E' />
        </div>
      </div>

      {/* Posts */}
      {
        posts.map(({ id, description, message, name, photoUrl }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))
      }
    </div>
  )
}

export default Feed