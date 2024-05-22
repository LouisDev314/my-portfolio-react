import NavBar from '@shared/components/nav-bar';
import IndexPage from './pages';
import Page from '@shared/enum/page.enum';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <header className="absolute">Louis Chan</header>
      <NavBar />
      <main className="bg-white h-full">
        <Routes>
          <Route path="/" element={<IndexPage page={Page.Home} />} />
          <Route path="/projects" element={<IndexPage page={Page.Project} />} />
          <Route path="/about-me" element={<IndexPage page={Page.AboutMe} />} />
          <Route path="/blog" element={<IndexPage page={Page.Blog} />} />
          <Route path="/contact" element={<IndexPage page={Page.Contact} />} />
          <Route
            path="/my-secret-place"
            element={<IndexPage page={Page.MySecretPlace} />}
          />
          <Route path="*" element={<IndexPage page={Page.NotFound} />} />
        </Routes>
      </main>
      <footer className="bottom-0">This is footer</footer>
    </>
  );
}

export default App;
