const Home = () => {
    return (
        <div className="Home">
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
            
            <div className="Main-Container">
                <h2 className="Main-Heading">Mentors</h2>
                
                <div className="Cards">

                    <div className="Card">
                        <img className="Card-Img" alt="A smiling mentor"></img>
                        <div className="Card-Content">
                            <h5>Mentor #1</h5>
                            <ul className="Card-List">
                                <li>Major: Computer Science</li>
                                <li>Year: 4</li>
                                <li>Mentor Rating: 4.5/5</li>
                            </ul>
                            <button>Connect</button>
                        </div>
                    </div>
                    
                    <div className="Card"></div>

                    <div className="Card"></div>

                    <div className="Card"></div>

                </div>

                <div className="Calendar"></div>
            </div>
            
            <div className="Current-Container">Current Select</div>
            
        </div>
    );
}

export default Home;