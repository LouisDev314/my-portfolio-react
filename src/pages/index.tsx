import Page from '@shared/enum/page.enum';
import AboutMePage from './about-me';
import BlogPage from './blog';
import ContactPage from './contact';
import HomePage from './home';
import MySecretPlacePage from './my-secret-place';
import NotFoundPage from './not-found';
import ProjectPage from './project';

// const HomePage = lazy(() => import('./home'));
// const ProjectPage = lazy(() => import('./project'));
// const AboutMePage = lazy(() => import('./about-me'));
// const BlogPage = lazy(() => import('./blog'));
// const ContactPage = lazy(() => import('./contact'));
// const MySecretPlacePage = lazy(() => import('./my-secret-place'));
// const NotFoundPage = lazy(() => import('./not-found'));

interface IIndexPage {
  page: Page;
}

const IndexPage = (props: IIndexPage) => {
  const renderSwitch = () => {
    switch (props.page) {
      case Page.Home:
        return <HomePage />;
      case Page.Project:
        return <ProjectPage />;
      case Page.AboutMe:
        return <AboutMePage />;
      case Page.Blog:
        return <BlogPage />;
      case Page.Contact:
        return <ContactPage />;
      case Page.MySecretPlace:
        return <MySecretPlacePage />;
      default:
        return <NotFoundPage />;
    }
  };

  return <>{renderSwitch()}</>;
};

export default IndexPage;
