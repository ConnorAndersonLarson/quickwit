import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

  return (
    <header className="heading">
      <Link exact to='/' className="title">QuickWit</Link>
    </header>
  )
}

export default Header;
