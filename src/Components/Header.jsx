import { Avatar, Icon, IconButton } from '@material-ui/core'
import { Add, ExpandMore, Flag, Forum, Home, NotificationsActive, Search, StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from '@material-ui/icons'
import React from 'react'
import "./Header.css"
import { useStateValue } from '../StateProvider'
function Header() {
    const [{ user }, dispatch] = useStateValue()
    return (
        <div className="header">
            <div className="header__left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"  alt="Facebook logo"  /> 
            </div>
            <div className="header__input">
                <Search />
                <input placeholder="Search Facebook" type="text" />
            </div>
            <div className="header__center">
                <div className="header__option header_option--active">
                    <Home fontSize="large"/>
                </div>
                <div className="header__option">
                    <Flag  fontSize="large"/>
                </div>
                <div className="header__option">
                    <SubscriptionsOutlined  fontSize="large"/>
                </div>
                <div className="header__option">
                    <StorefrontOutlined  fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircle  fontSize="large"/>
                </div>

            </div>
            <div className="header__right">
                    <div className="header__info">
                        <Avatar src={user?.photoURL} />
                        <h4>{user.displayName}</h4>
                    </div>
                    <IconButton>
                       <Add />
                    </IconButton>
                    <IconButton>
                       <Forum />
                    </IconButton>
                    <IconButton>
                      <NotificationsActive />
                    </IconButton>
                    <IconButton>
                      <ExpandMore />
                    </IconButton>
                    
                </div>
        </div>
    )
}

export default Header
