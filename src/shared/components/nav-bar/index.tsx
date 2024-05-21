import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-x-10 justify-end">
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
