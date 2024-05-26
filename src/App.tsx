import NavBar from '@shared/components/nav-bar';
import IndexPage from './pages';
import Page from '@shared/enum/page.enum';
import { Route, Routes } from 'react-router-dom';
import Logo from '@shared/components/logo';
import { useState } from 'react';
import SplashScreen from '@pages/splash-screen';

function App() {
  const [toShowSplashScreen, setToShowSplashScreen] = useState(true);

  return (
    <>
      {toShowSplashScreen ? (
        <SplashScreen
          setToShowSplashScreen={setToShowSplashScreen}
        ></SplashScreen>
      ) : (
        <>
          <header>
            <Logo class="mt-8 ml-20 text-3xl absolute" />
            <NavBar class="absolute right-0" />
          </header>
          <main className="bg-white h-full">
            <Routes>
              <Route path="/" element={<IndexPage page={Page.Home} />} />
              <Route
                path="/projects"
                element={<IndexPage page={Page.Project} />}
              />
              <Route
                path="/about-me"
                element={<IndexPage page={Page.AboutMe} />}
              />
              <Route path="/blog" element={<IndexPage page={Page.Blog} />} />
              <Route
                path="/contact"
                element={<IndexPage page={Page.Contact} />}
              />
              <Route
                path="/my-secret-place"
                element={<IndexPage page={Page.MySecretPlace} />}
              />
              <Route path="*" element={<IndexPage page={Page.NotFound} />} />
            </Routes>
          </main>
          <footer className="bottom-0">This is footer</footer>
        </>
      )}
    </>
  );
}

export default App;
