import Nav from "./navigation/nav";
import resume from "../resources/Alpha_Lagatt_-_Software_Engineer-2.pdf"
import '../index.css';


function Welcome(){
    return(
        <div className="main-cont">
            
            {<Nav cv={resume}/>}
             
            <div className="container">
                
                <div className="profile-container">
                
                    <div id="a" className="panel">Fixed Panel</div>
                    <div id="b" className="panel">
                        <h1>Hello everyone, my name is Alpha Lagatt.</h1><h3>I am a full stack software engineer with a passion for creating innovative and efficient digital solutions, proficient in both front-end and back-end development.</h3>
                    </div>
                    <div id="c" className="panel">Scrolling panel 2</div>
                    <div id="d" className="panel">Scrolling panel 3</div>

                </div>
                
                
            </div>
            
        </div>
    )
}

export default Welcome;