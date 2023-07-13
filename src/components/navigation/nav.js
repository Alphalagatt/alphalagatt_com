import '../../index.css';


function Nav(){
    return(
        <div>
            <nav className="nav">
                <img className='nav-logo' src={require('../../resources/alphalagatt-high-resolution-logo-color-on-transparent-background.png')} alt='Alpha Lagatt'/>
                <ul className='nav-links-cont'>
                    <li className='nav-links'> <span className='markers'>#</span><span className='nav-links-text'>About</span></li>
                    <li className='nav-links'> <span className='markers'>#</span><span className='nav-links-text'>Expirience</span></li>
                    <li className='nav-links'> <span className='markers'>#</span><span className='nav-links-text'>Work</span></li>
                    <li className='nav-links'> <span className='markers'>#</span><span className='nav-links-text'>Contact</span></li>
                    <li className='nav-links-button'><span className='nav-links-button-text'>Resume</span></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;