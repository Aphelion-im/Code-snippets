import { NavLink } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({isActive}) => isActive ===true ? 'active-link' : 'default-link'}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/faq" className={({isActive}) => isActive ===true ? 'active-link' : 'default-link'}>FAQ</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
