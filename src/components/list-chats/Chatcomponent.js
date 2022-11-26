import React, { Component } from 'react';
import './styles-page-5.css';
import logoImg from './images-list-chats/Html5-JS-css-logo.jpg';
import * as Icon from 'react-bootstrap-icons';


export default class Chatcomponent extends Component {
  render() {
    return (
      <div>
        <header>
    <div class="blocks-content">
        <div class="block-logo">
            <img src={logoImg} alt="" />
        </div>
        <div class="block-menu">
            <div class="block-search">
                <Icon.Search class=""></Icon.Search>
                <input type="text" placeholder="Find articles..." />
            </div>
            <div class="block-profile">
                <div class="block-user-icon">
                    <Icon.PersonCircle class="bi bi-person-circle"></Icon.PersonCircle>
                </div>
                <div class="block-user-name">
                    Anette Black
                </div>
                <div class="block-user-menu-button">
                    <Icon.ChevronDown class="bi bi-chevron-down"></Icon.ChevronDown>
                    {/* <Icon.Chevrons /> */}
                </div>
            </div>
        </div>
    </div>
</header>
<main>
    <div class="block-main">
        <div class="block-main-menu">
            <div class="block-main-menu-header">
                <h4>Main Menu</h4>
            </div>
            <div class="block-main-menu-chats">
                <i class="bi bi-chat-square-text"></i>
                Chat
            </div>
            <div class="block-main-menu-line">

            </div>
            <div class="block-main-menu-button">
                <button>
                    <i class="bi bi-box-arrow-right"></i>
                    Logout
                </button>
            </div>
        </div>
        <div class="block-main-chats">
            <div class="block-main-chats-header">
                <div>
                    <h1>Chats</h1>
                </div>
                <div class="block-create-chat">
                    <button>
                        <i class="bi bi-plus-lg"></i>
                        New Chat
                    </button>
                </div>
            </div>
            <div class="block-chats">
                <div class="block-chats-title">
                    <div>
                        Name <i class="bi bi-chevron-down"></i>
                    </div>
                    <div>
                        Last message <i class="bi bi-chevron-down"></i>
                    </div>
                </div>
                <div class="block-list-chats">
                    <div>
                        <ul>
                            <li>
                                <div class="chat-inform">
                                    <div class="chat-logo">
                                        <Icon.PersonCircle class="bi bi-person-circle"></Icon.PersonCircle>
                                    </div>
                                    <div>
                                        <div class="chat-user-name">
                                            Severo Mesia
                                        </div>
                                        <div class="chat-message">
                                            It is message
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-info-date">
                                    Just now
                                </div>
                                <div class="write-message">
                                    Message
                                </div>
                            </li>
                            <li>
                                <div class="chat-inform">
                                    <div class="chat-logo">
                                        <Icon.PersonCircle class="bi bi-person-circle"></Icon.PersonCircle>
                                    </div>
                                    <div>
                                        <div class="chat-user-name">
                                            Severo Mesia
                                        </div>
                                        <div class="chat-message">
                                            It is message
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-info-date">
                                    Just now
                                </div>
                                <div class="write-message">
                                    Message
                                </div>
                            </li>
                            <li>
                                <div class="chat-inform">
                                    <div class="chat-logo">
                                        <Icon.PersonCircle class="bi bi-person-circle"></Icon.PersonCircle>
                                    </div>
                                    <div>
                                        <div class="chat-user-name">
                                            Severo Mesia
                                        </div>
                                        <div class="chat-message">
                                            It is message
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-info-date">
                                    Just now
                                </div>
                                <div class="write-message">
                                    Message
                                </div>
                            </li>
                            <li>
                                <div class="chat-inform">
                                    <div class="chat-logo">
                                        <Icon.PersonCircle class="bi bi-person-circle"></Icon.PersonCircle>
                                    </div>
                                    <div>
                                        <div class="chat-user-name">
                                            Severo Mesia
                                        </div>
                                        <div class="chat-message">
                                            It is message
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-info-date">
                                    Just now
                                </div>
                                <div class="write-message">
                                    Message
                                </div>
                            </li>
                            <li>
                                <div class="chat-inform">
                                    <div class="chat-logo">
                                        <Icon.PersonCircle class="bi bi-person-circle"></Icon.PersonCircle>
                                    </div>
                                    <div>
                                        <div class="chat-user-name">
                                            Severo Mesia
                                        </div>
                                        <div class="chat-message">
                                            It is message
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-info-date">
                                    Just now
                                </div>
                                <div class="write-message">
                                    Message
                                </div>
                            </li>
                            <li>
                                <div class="chat-inform">
                                    <div class="chat-logo">
                                        <Icon.PersonCircle class="bi bi-person-circle"></Icon.PersonCircle>
                                    </div>
                                    <div>
                                        <div class="chat-user-name">
                                            Severo Mesia
                                        </div>
                                        <div class="chat-message">
                                            It is message
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-info-date">
                                    Just now
                                </div>
                                <div class="write-message">
                                    Message
                                </div>
                            </li>
                            <li>
                                <div class="chat-inform">
                                    <div class="chat-logo">
                                        <Icon.PersonCircle class="bi bi-person-circle"></Icon.PersonCircle>
                                    </div>
                                    <div>
                                        <div class="chat-user-name">
                                            Severo Mesia
                                        </div>
                                        <div class="chat-message">
                                            It is message
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-info-date">
                                    Just now
                                </div>
                                <div class="write-message">
                                    Message
                                </div>
                            </li>
                            <li>
                                <div class="chat-inform">
                                    <div class="chat-logo">
                                        <Icon.PersonCircle class="bi bi-person-circle"></Icon.PersonCircle>
                                    </div>
                                    <div>
                                        <div class="chat-user-name">
                                            Severo Mesia
                                        </div>
                                        <div class="chat-message">
                                            It is message
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-info-date">
                                    Just now
                                </div>
                                <div class="write-message">
                                    Message
                                </div>
                            </li>
                            <li>
                                <div class="chat-inform">
                                    <div class="chat-logo">
                                        <Icon.PersonCircle class="bi bi-person-circle"></Icon.PersonCircle>
                                    </div>
                                    <div>
                                        <div class="chat-user-name">
                                            Severo Mesia
                                        </div>
                                        <div class="chat-message">
                                            It is message
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-info-date">
                                    Just now
                                </div>
                                <div class="write-message">
                                    Message
                                </div>
                            </li>
                            <li>
                                <div class="chat-inform">
                                    <div class="chat-logo">
                                        <Icon.PersonCircle class="bi bi-person-circle"></Icon.PersonCircle>
                                    </div>
                                    <div>
                                        <div class="chat-user-name">
                                            Severo Mesia
                                        </div>
                                        <div class="chat-message">
                                            It is message
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-info-date">
                                    Just now
                                </div>
                                <div class="write-message">
                                    Message
                                </div>
                            </li>
                            <li>
                                <div class="chat-inform">
                                    <div class="chat-logo">
                                        <Icon.PersonCircle class="bi bi-person-circle"></Icon.PersonCircle>
                                    </div>
                                    <div>
                                        <div class="chat-user-name">
                                            Severo Mesia
                                        </div>
                                        <div class="chat-message">
                                            It is message
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-info-date">
                                    Just now
                                </div>
                                <div class="write-message">
                                    Message
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
      </div>
    )
  }
}
