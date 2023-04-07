import logo from '../../../public/icon.png'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-dark mb-4 px-4 navBarPers" >

            <span className="navbar-brand">
                <img
                    width="40" height="40"
                    src={ logo }
                />
            </span>
            
        </nav>
    )
}
