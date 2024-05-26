import { IBaseComponent } from '@interfaces/base-component.interface';
import { Link } from 'react-router-dom';

interface INavBar extends IBaseComponent {}

const NavBar = (props: INavBar) => {
  return (
    <nav className={props.class}>
      <ul className="flex gap-x-8 right-0 mr-10 mt-8">
        <Link to={'/'} className="font-bold">
          Home
        </Link>
        <Link to={'/projects'}>Projects</Link>
        <Link to={'/about-me'}>About Me</Link>
        <Link to={'/blog'}>Blog</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/my-secret-place'}>My Secret Place</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
