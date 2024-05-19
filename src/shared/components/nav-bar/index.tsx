import { lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('@pages/home'));
const ProjectPage = lazy(() => import('@pages/project'));
const AboutMePage = lazy(() => import('@pages/about-me'));
const BlogPage = lazy(() => import('@pages/blog'));
const ContactPage = lazy(() => import('@pages/contact'));
const MySecretPlacePage = lazy(() => import('@pages/my-secret-place'));

const NavBar = () => {
  return (
    <>
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/my-secret-place" element={<MySecretPlacePage />} />
      </Routes>
    </>
  );
};

export default NavBar;
