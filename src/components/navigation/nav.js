import '../../index.css';

function Nav(){
    return(
        <div>
            <nav className="nav">
                <h1 className="nav-logo">Alpha Lagatt</h1>
                <ul className='nav-links-cont'>
                    <li className='nav-links'> <span className='markers'>#</span>About</li>
                    <li className='nav-links'> <span className='markers'>#</span>Expirience</li>
                    <li className='nav-links'> <span className='markers'>#</span>Work</li>
                    <li className='nav-links'> <span className='markers'>#</span>Contact</li>
                    <li className='nav-links'>Resume</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;