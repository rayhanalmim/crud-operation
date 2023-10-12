import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <br />
            <Link to='/user'>User</Link>
        </div>
    );
};

export default Header;