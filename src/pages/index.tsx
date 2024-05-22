import Page from '@shared/enum/page.enum';
import HomePage from './home';
import ProjectPage from './project';
import AboutMePage from './about-me';
import BlogPage from './blog';
import ContactPage from './contact';
import MySecretPlacePage from './my-secret-place';
import NotFoundPage from './not-found';

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
