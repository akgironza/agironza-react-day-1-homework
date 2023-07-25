// the component function
const Footer = (props) => {

    //The Components Returned JSX
    return <div className="Footer">
        <div className="name-copyright">
            <h4>Arielle Gironza</h4>
            <p>Copyright © 2023 ArielleGironza, Inc.</p>
        </div>

        <div>
            <ul className="footerMenu">
                <li className="footerMenuLinks"><a className="actualMenuLinks" href="#">Legal Stuff</a></li>
                <li className="footerMenuLinks"><a className="actualMenuLinks" href="#">Privacy Policy</a></li>
                <li className="footerMenuLinks"><a className="actualMenuLinks" href="#">Security Things</a></li>
            </ul>

        </div>

    </div>
}

// export the component
export default Footer;