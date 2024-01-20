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

            <div className="Header-Container">Header</div>
            
            <div className="Main-Container">Main</div>
            
            <div className="Status-Container">Current</div>
            
        </div>
    );
}

export default Home;