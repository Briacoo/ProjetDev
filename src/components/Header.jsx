import '../Styles/HeaderStyle.css'

function Header() {
    return ( 
        <header>
            <nav>
                <div className="nav-main">
                    <div>
                        <a href="#"><img className='logo' src="/logo192.png" alt="" /></a>
                    </div>
                    <div>
                        <ul className="flex nav-middle">
                            <li>Menu 1</li>
                            <li>Menu 2</li>
                            <li>Menu 3</li>
                        </ul>
                    </div>
                    <div className="flex">
                        <a href="#"><img className='img' src="assets/icon/facebook.png" alt="Icon Facebook" /></a>
                        <a href="#"><img className='img' src="assets/icon/instagram.png" alt="Icon d'Instagram" /></a>
                        <a href="#"><img className='img' src="assets/icon/linkedin.png" alt="Icon de Linkedin" /></a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;