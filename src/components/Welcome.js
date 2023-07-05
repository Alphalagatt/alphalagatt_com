import Nav from "./navigation/nav";
import '../index.css';
function Welcome(){
    return(
        <div>
            {<Nav/>}
            <p>Hi, my name is</p>
            <h1>Alpha Lagatt.</h1>
            <h1>I build applications for the web.</h1>
            <p>I'm a software developer specialised in building brilliant web applications.
                I am passionate about cutting age, beautiful interfaces and intuitively implemented applications.
            </p>
        </div>
    )
}

export default Welcome;