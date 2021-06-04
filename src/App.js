import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widget from './Components/Widget';
import Login from "./Login"
import { useStateValue } from "./StateProvider"
import Chat from "./Components/Chat"
import { Forum } from '@material-ui/icons';
import { useState } from 'react';


function App() {
  const [{ user }, dispatch] = useStateValue();
  const [showChat, setShowChat] = useState(false)
  return (
    <>
    {!user ? (
        <Login />
      ):(
    <div className="app">
      <Header />
        <div className="app_body">
         <Sidebar />
         <Feed />
         <Widget />  
         <div className="chatSpace">
            {showChat && <Chat />}
                <Forum  onClick={() => setShowChat(!showChat)}
                className="chatButton" 
                variant="outlined">{showChat ? "Hide" : "Search Dates"} </Forum>
            </div>
        </div>
      </div>
       ) }
    </>
  );
}

export default App;
