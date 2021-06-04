import React, { useState, useEffect } from "react";
import "./Chat.css";
// import Button from "@material-ui/core/Button";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import ChatMessage from "./ChatMessage";
import { db } from "../firebase";
import firebase from "firebase"; //pulling from module
import Flipmove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
// import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

function Chat() {
  const [input, setInput] = useState("");
  // const [messages, setMessages] = useState(["hello", "hi"]);
  const [messages, setMessages] = useState([
    // { username: "kay", message: "hey guys" },
    // { username: "TeeA", message: "whats up" },
  ]);
  const [username, setUsername] = useState("");

  //useState = variable in REACT
  //useEffect = run code on a condition in REACT

  useEffect(() => {
    //run once when the app component loads
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

//   useEffect(() => {
//     //const username = prompt("Please enter your name");
//     setUsername(prompt("Please enter your name"));
//   }, []);

  const sendMessage = (event) => {
    // all the logic to send a message goes here
    event.preventDefault(); //stops the form from refreshing when the messages are being entered

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      // add texts written in the input to store in database
      //and give users a timestamp for every message they send relating to their
      //timezone.
    });
    // setMessages([...messages, { username: username, text: input }]); //appends identity of username to text input
    setInput("");
    // pushing sent messages to console and also acting as a push function in array
  };
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>Hello</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>Enter a message</InputLabel>
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app__iconbutton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>

        {/* enable text to be written and visible in input box */}
        {/* right now the submit type added is making the button behave as a form which refreshes when submitted with enter key we have to stop it from refreshing */}
      </form>

      <Flipmove>
        {messages.map(({ id, message }) => (
          <ChatMessage key={id} username={username} message={message} />
        ))}
        {/* the map function loops through all inputed messages and displays it as a message on the */}
      </Flipmove>
    </div>
  );
}

export default Chat;
