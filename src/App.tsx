import HomePage from '@pages/home';
import NavBar from '@shared/components/nav-bar';

function App() {
  return (
    <>
      <header className="absolute">Louis Chan</header>
      <nav>
        <NavBar />
      </nav>
      <main className="bg-white">
        <HomePage />
      </main>
      <footer>This is footer</footer>
    </>
  );
}

export default App;
