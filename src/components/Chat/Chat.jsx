import React from 'react';

import { BiSearch } from 'react-icons/bi';

import Profile from '../../assets/profile.png';
import classes from './Chat.module.css';

import ChatList from './ChatList'
import ChatPanel from './ChatPanel'
export default function Chat() {
    return (
        <div className='container' style={{ width: '90%', margin: '0 auto' }}>
            <div className="row">
                <ChatList/>
                <ChatPanel/>
            </div>
        </div>
    )
}
