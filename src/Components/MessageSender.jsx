import { Avatar, Button, Input } from '@material-ui/core'
import {  Forum, InsertEmoticon, PhotoLibrary, SettingsInputAntenna, Videocam } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import "./MessageSender.css"
import axios from '../axios'
import { useStateValue } from '../StateProvider'
import FormData from "form-data"
import Picker from 'emoji-picker-react';
import { useEffect } from 'react'
import Emojis from './Emojis'
import { createRef } from 'react'
import Chat from "./Chat"



function MessageSender() {
    const [input, setInput] = useState("")
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState('')
    const [{ user }, dispatch] = useStateValue()
   
    // const [showEmojis, setShowEmojis] = useState();
    // const inputRef = createRef()
    // const [cursorPosition, setCursorPosition] = useState()
    // const [message, setMessage] = useState("");


    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
            // setMessage(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (image) {
            const imgForm = new FormData()
            imgForm.append('file', image, image.name)

            axios.post('/upload/image', imgForm, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${imgForm._boundary}`,
                }
            }).then((res) => {
                console.log(res.data)

                const postData = {
                    text: input,
                    imgName: res.data.filename,
                    user: user.displayName,
                    avatar: user.photoURL,
                    timestamp: Date.now()
                }

                console.log(postData)
                savePost(postData)
            })
        } else {
            const postData = {
                text: input,
                user: user.displayName,
                avatar: user.photoURL,
                timestamp: Date.now()
            }

            console.log(postData)
            savePost(postData)
    }

    
    setImageUrl('')
    setInput('')
    setImage(null)
}

const savePost = async (postData) => {
    await axios.post('/upload/post', postData)
        .then((resp) => {
            console.log(resp)
        })
    setImage(null)
}



// const pickEmoji = (e, { emoji }) => {
//     const ref = inputRef.current;
//     ref.focus()
//     const start = message.substring(0, ref.selectionStart)
//     const end = message.substring(ref.selectionStart)
//     const msg = start + emoji+ end;
//     setMessage(msg)
//     inputRef.current.selectionEnd = start.length+emoji.length;
//     setCursorPosition(start.length+emoji.length)
// }



// const handleShowEmojis = () => {
//     inputRef.current.focus();
//     setShowEmojis(!showEmojis);
// }

// useEffect(() => {
//     inputRef.current.selectionEnd = cursorPosition;

// }, [cursorPosition]);





    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src=""/>
                <form>
                    <input type="text" className="messageSender__input"
                    placeholder="Whats on your mind?"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                    <input type="file" className="messageSender__fileSelector"
                    onChange={handleChange}  />
                    <button onClick={handleSubmit} type="submit">Submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <Videocam style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibrary style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    {/* {
                        <div className={`emoji-list ${!showEmojis && "hidden"}`}>
                            <Emojis pickEmoji={pickEmoji} />
                        </div>
                    } */}
                    <InsertEmoticon style={{ color: "orange" }}  />
                    <h3>Feeling/Activity</h3>
                    
                </div>
            </div>
          
        </div>
    )
}

export default MessageSender
