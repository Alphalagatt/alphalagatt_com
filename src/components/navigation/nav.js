import '../../index.css';


function Nav(props){
    return(
        <div>
            <nav className="nav">
                <img className='nav-logo' src={require('../../resources/alphalagatt-high-resolution-logo-color-on-transparent-background.png')} alt='Alpha Lagatt'/>
                <ul className='nav-links-cont'>
                    <li className='nav-links'> <span className='markers'>#</span><span className='nav-links-text'>About</span></li>
                    <li className='nav-links'> <span className='markers'>#</span><span className='nav-links-text'>Expirience</span></li>
                    <li className='nav-links'> <span className='markers'>#</span><span className='nav-links-text'>Work</span></li>
                    <li className='nav-links'> <span className='markers'>#</span><span className='nav-links-text'>Contact</span></li>
                    <li className='nav-links-button'><a href={props.cv} download="Alpha_Lagatt_resume" className='nav-links-button-text'>Resume</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;