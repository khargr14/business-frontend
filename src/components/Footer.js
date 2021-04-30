import {Link} from 'react-router-dom';

const Footer = () => (
    <div>
        <Link to='/'>Home</Link> - 
        <Link to='/businesses'>Businesses</Link> - 
        <Link to='/businesses/new'>New Business</Link>
    </div>
)

export default Footer;