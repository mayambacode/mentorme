import { Link } from 'react-router-dom';
import '../css/Profile.css';

const Profile = () => {
    return(
        <div className="Profile">

            <div className="corner">
                <ul className='nav'>
                 <Link to="/Home"><h4 className='homenav'>Home</h4></Link> 
                 <Link to="/Message"><h4 className='homenav'>Message</h4></Link> 
                 <Link to=""><h4 className='homenav'>About</h4></Link> 
                </ul>
            </div><br/>

            <div className="profileimage"> <br></br>
                <img alt="hello"></img> <br/>
                <h2>Name of Profile</h2> <br/>
                <p>username</p> <br/>
            </div>

            <div className="aboutme"> <br/> <br/><br/><br/>
                <h2>About Me</h2> <br/>
                <ul id="schoolprofile">
                    <p>School:</p>
                    <p>Program:</p>
                    <p>Year</p>
                    <p>Future Goals:</p>
                </ul>
                <h2>Summary</h2>
                <h2>test</h2>
                <p>ksfdj;lasdkjgflkad;jgkl;s</p><br/>
                <p>ksfdj;lasdkjgflkad;jgkl;s</p> <br/>
                <p>ksfdj;lasdkjgflkad;jgkl;s</p> <br/>
                <p>ksfdj;lasdkjgflkad;jgkl;s</p> <br/>
                <p>ksfdj;lasdkjgflkad;jgkl;s</p> <br/>
            </div>

            <div className="">

            </div>
        



        </div>
    );
}

export default Profile;