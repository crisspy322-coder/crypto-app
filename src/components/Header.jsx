import {Link} from 'react-router'

const Header =() => {
    return (
        <div className="top-nav">
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            </div>
    );
}

export default Header;