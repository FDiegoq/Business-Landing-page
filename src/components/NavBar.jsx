const NavBar = () => {
    return (
        <nav className="flex justify-between text-white items-center py-6">
            <div>
                <div>
                    
                </div>
            </div>
            <div className="flex gap-6">
                <a className="hover:text-green-400 transition-colors" href="#">Contacts</a>
                <a className="hover:text-green-400 transition-colors" href="#">About</a>
                <a className="hover:text-green-400 transition-colors" href="#">Login</a>
            </div>
        </nav>
    );
}

export default NavBar;