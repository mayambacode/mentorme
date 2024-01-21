import React, { useEffect, useState, useRef } from 'react';
import MessageDiv from './MessageDiv.js';
import Messager from './Messager.js';

const messages = [
    {
      name: 'John',
      time: '2024-01-21 10:00 AM',
      text: 'Hello, how are you?',
    },
    {
      name: 'Alice',
      time: '2024-01-21 10:15 AM',
      text: 'Im doing well, thank you!',
    },
    {
      name: 'Bob',
      time: '2024-01-21 10:30 AM',
      text: 'What are you up to today?',
    },
    {
      name: 'Eva',
      time: '2024-01-21 11:00 AM',
      text: 'Just working on some projects. How about you?',
    },
    {
      name: 'Charlie',
      time: '2024-01-21 11:30 AM',
      text: 'Im taking a break and relaxing.',
    },
    {
        name: 'Charlie',
        time: '2024-01-21 11:30 AM',
        text: 'I\'m taking a break and relaxing.',
      },
      {
        name: 'Sophie',
        time: '2024-01-21 12:00 PM',
        text: 'Hi everyone! What\'s the topic today?',
      },
      {
        name: 'Daniel',
        time: '2024-01-21 12:30 PM',
        text: 'Im excited about the new project we are starting!',
      },
      {
        name: 'Olivia',
        time: '2024-01-21 1:00 PM',
        text: 'Has anyone tried the new coffee shop downtown?',
      },
      {
        name: 'James',
        time: '2024-01-21 1:30 PM',
        text: 'Im looking for recommendations for a good book to read. Any suggestions?',
      },
      {
        name: 'Mia',
        time: '2024-01-21 2:00 PM',
        text: 'I just finished a great workout! Feeling energized.',
      },
      {
        name: 'Liam',
        time: '2024-01-21 2:30 PM',
        text: 'Hello everyone! What did I miss?',
      }
  ];



const Message = () => {
    const [selected, setSelected] = useState(false);
    const messageContainer = useRef(null);

    const createMessage = (event, userID) => {
        event.preventDefault();
    
        const messageInfo = {
            userID: userID,
            content: event.target.parentElement.firstChild.valuem
        };
        console.log(messageInfo)
        event.target.parentElement.firstChild.value = '';
    
        //Call the api to send the message
    }

    useEffect(() => {
        const lastMessage = messageContainer.current.lastElementChild;
        if (lastMessage) {
          lastMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, [selected]);

    return (
        <div className="Message">
            <div className="Sidebar-Container">
                <h1>Mentor Me</h1>

                <nav>
                    <ul className="Sidebar-List">
                        <li>Notifications/Feed</li>
                        <li>Messages</li>
                        <li>Connections</li>
                        <li>Discover Mentors</li>
                        <li>Events</li>
                    </ul>
                </nav>
                


                <ul className="Settings-Help">
                    <li>Settings</li>
                    <li>Help</li>
                </ul>

            </div>

            <div className="Header-Container">

                <h2>Messages</h2>

                <div className="Header-Container">
                    <input type="text"></input>
                    <div className="Icons">Icons go here</div>
                </div>

                <div className="Profile2">
                    <img className="profileimage" src='./images/jungkook.jpg' alt="jung kook"></img>
                    <div>
                        <h4>Jung Kook</h4>
                        <p>BTSJK@email.com</p>
                    </div>
                </div>

            </div>

            <div className="Conversation-Container" ref={messageContainer}>

                {messages.map((message) => {
                    return (
                    <MessageDiv time={message.time} name={message.name} text={message.text}/>
                    )
                })}
                
                <div className="User-Message Their-Message">
                    <img alt="Profile Pic"></img>
                    <div className="Message-Formatter">
                        <div className="Name-Time">
                            <h5>Senior_Student</h5>
                            <p>timestamp</p>
                        </div>
                        <p>Hello!</p>
                    </div>
                    
                </div>

                <div className="User-Message Their-Message">
                    <img alt="Profile Pic"></img>
                    <div className="Message-Formatter">
                        <div className="Name-Time">
                            <h5>Senior_Student</h5>
                            <p>timestamp</p>
                        </div>
                        <p>How Are you!</p>
                    </div>
                    
                </div>

                <div className="User-Message My-Message">
                    <img alt="Profile Pic"></img>
                    <div className="Message-Formatter">
                        <div className="Name-Time">
                            <h5>Junior_Student</h5>
                            <p>timestamp</p>
                        </div>
                        <p>gOOD</p>
                    </div>
                    
                </div>

                <div className="User-Message Their-Message">
                    <img alt="Profile Pic"></img>
                    <div className="Message-Formatter">
                        <div className="Name-Time">
                            <h5>Senior_Student</h5>
                            <p>timestamp</p>
                        </div>
                        <p>thanks</p>
                    </div>
                </div>

                <div className="User-Message My-Message">
                    <img alt="Profile Pic"></img>
                    <div className="Message-Formatter">
                        <div className="Name-Time">
                            <h5>Junior_Student</h5>
                            <p>timestamp</p>
                        </div>
                        <p>ok have a nice day. it was really nice speaking to you.</p>
                    </div>
                    
                </div>

                <div className="Send-Message">
                    <form>
                        <input type="text" placeholder="Enter a message"></input>
                        <input type="submit" onClick={createMessage} value="Send"></input>
                    </form>
                    
                </div>
                
            </div>
            
            <div className="Current-Container">

                <div className='Active-Conversations'>

                    {messages.map((message) => {
                        return (
                        <Messager name={message.name} text={message.text}/>
                        )
                    })}

                    <div className="Messager">
                        <img alt="Profile Pic"></img>
                        <div>
                            <h5>Senior_Student</h5>
                            <p>ok have a nice day. it was really nice speaking to you.</p>
                        </div>
                    </div>

                    <div className="Messager">
                        <img alt="Profile Pic"></img>
                        <div>
                            <h5>Professor</h5>
                            <p>Hi, how are you?</p>
                        </div>
                    </div>

                    <div className="Messager">
                        <img alt="Profile Pic"></img>
                        <div>
                            <h5>Campus Leader</h5>
                            <p>Thanks for the advice!</p>
                        </div>
                    </div>
                </div>

                <div className='New-Conversation'>
                    <p>New Conversation</p>
                    <button className='New-Conversation-Button'>+</button>
                </div>

            </div>



        </div>
    )
}

export default Message;