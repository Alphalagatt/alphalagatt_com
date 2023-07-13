import Nav from "./navigation/nav";
import '../index.css';
function Welcome(){
    return(
        <div className="main-cont">
            {<Nav/>}
            
            <div className="container">
                <div className="profile-container">
                    <div className="profile">
                        <img src={require('../resources/profile_img.jpeg')} alt="profile img" />
                    </div>
                    <div className="profile-overlay"></div>
                    <div className="profile-outline"></div>
                    <div className="bubbles">
                        languanges go here.
                    </div>
                    <div className="profile-text">
                        <h1>Hello everyone, my name is Alpha Lagatt.</h1><h3>I am a full stack software engineer with a passion for creating innovative and efficient digital solutions, proficient in both front-end and back-end development.</h3>
                    </div>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Welcome;