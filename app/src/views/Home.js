const Home = () => {
    return (
        <div className="Home">
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

                <h2>Mentor List</h2>

                <div className="Header-Container">
                    <input type="text"></input>
                    <div className="Icons"><i class="material-icons">search</i></div>
                </div>

                <div className="Profile2">
                    <img className="profileimage" src='./images/jungkook.jpg' alt="jung kook"></img>
                    <div>
                        <h4>Jung Kook</h4>
                        <p>BTSJK@email.com</p>
                    </div>
                </div>

            </div>
            
            <div className="Main-Container">
                <h2 className="Main-Heading">Mentors</h2>
                
                <div className="Cards">

                    <div className="Card">
                        <img className="profileimage2" src='./images/jungkook.jpg' alt="jung kook"></img>
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