import sendMessage from '../controllers/messageController.js'

const Message = () => {
    return (
        <div className="Message">
            <div className="Sidebar-Container">

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

                <h1>Mentor List</h1>

                <div className="Header-Container">
                    <input type="text"></input>
                    <div className="Icons">Icons go here</div>
                </div>

                <div className="Profile">
                    <img className="Profile-Pic" alt="profile pic"></img>
                    <div>
                        <h4>John Doe</h4>
                        <p>johndoe@email.com</p>
                    </div>
                </div>

            </div>

            <div className="Conversation-Container">
                
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
                        <input type="submit" onClick={sendMessage} value="Send"></input>
                    </form>
                    
                </div>
                
            </div>
            
            <div className="Current-Container">
                Current Select
            </div>



        </div>
    )
}

export default Message;