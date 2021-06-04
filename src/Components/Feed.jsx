import React from 'react'
import { useState, useEffect } from 'react'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import axios from "../axios"
import "./Feed.css"
import Pusher from "pusher-js"


const pusher = new Pusher('286748485c313925b6d8', {
    cluster: 'eu'
  });



function Feed() {
    const [profilePic, setProfilePic] = useState("")
    const [postsData, setPostsData] = useState([])

   const syncFeed = () => {
       axios.get("/retrieve/posts").then((res) => {
           console.log(res.data)
           setPostsData(res.data)
       })
    }

     // pusher
     useEffect(() => {
        const channel = pusher.subscribe('posts');
        channel.bind('inserted', function(data) {
        syncFeed()
    }, []);

    })
    
    useEffect(() => {
        syncFeed()
    }, [])

   
        // db.collection('posts').onSnapshot(snapshot => (
        //     setPostsData(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        // ))
    
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {
                postsData.map(entry => (
                    <Post
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.user}
                    />

                    
                ))
            }
           
        </div>
    )
}

export default Feed




