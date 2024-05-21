import NavBar from '@shared/components/nav-bar';
import MainPage from './pages';
import Page from '@shared/enum/page.enum';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <header className="absolute">Louis Chan</header>
      <NavBar />
      <main className="bg-white">
        <Routes>
          <Route path="/" element={<MainPage page={Page.Home} />} />
          <Route path="/projects" element={<MainPage page={Page.Project} />} />
          <Route path="/about-me" element={<MainPage page={Page.AboutMe} />} />
          <Route path="/blog" element={<MainPage page={Page.Blog} />} />
          <Route path="/contact" element={<MainPage page={Page.Contact} />} />
          <Route
            path="/my-secret-place"
            element={<MainPage page={Page.MySecretPlace} />}
          />
          <Route path="*" element={<MainPage page={Page.NotFound} />} />
        </Routes>
      </main>
      <footer>This is footer</footer>
    </>
  );
}

export default App;
