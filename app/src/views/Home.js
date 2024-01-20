const Home = () => {
    return (
        <div className="Home">
            <div className="Sidebar-Container">

                <div className="Profile">
                    <img className="Profile-Pic" alt="profile pic"></img>
                    <div>
                        <h4>John Doe</h4>
                        <p>johndoe@email.com</p>
                    </div>
                </div>

                <ul className="Sidebar-List">
                    <li>Notifications</li>
                    <li>Messages</li>
                    <li>Connections</li>
                    <li>Discover</li>
                    <li>Events</li>
                </ul>

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
                

            </div>
            
            <div className="Main-Container">
                <h2 className="Main-Heading">Mentors</h2>
                
                <div className="Cards">

                    <div className="Card"></div>
                    
                    <div className="Card"></div>

                    <div className="Card"></div>

                    <div className="Card"></div>

                </div>

                <div className="Calendar"></div>
            </div>
            
            <div className="Status-Container">Current</div>
            
        </div>
    );
}

export default Home;