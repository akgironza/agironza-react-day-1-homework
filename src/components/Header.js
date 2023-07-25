// the component function
const Header = (props) => {

    //The Components Returned JSX
    return <div className="Header">
        <h1>Arielle Gironza</h1>
        <ul className="navbar">
            <li className="navbar-links"><a href="https://github.com/akgironza">GitHub</a></li>
            <li className="navbar-links"><a href="https://www.linkedin.com/in/arielle-gironza/">LinkedIn</a></li>
        </ul>
    </div>
}

// export the component
export default Header;