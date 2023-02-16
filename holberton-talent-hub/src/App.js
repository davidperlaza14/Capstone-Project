import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { IndexPage } from './pages/Index';
import { ProjectsPage } from './pages/Projects';
import { CvPage } from './pages/Cv';
import { Talent } from './pages/Talent';
import { Error404Page } from './pages/Error404';

const App = () => {
  const { pathname } = window.location;
  localStorage.setItem('pathname', pathname);
  const valor = localStorage.getItem('pathname');

  return (
    <>
      <Header />
      <main style={{ paddingBlockStart: '80px' }}>
        {/^\/{0,1}$/.test(pathname) ? (
          <IndexPage />
        ) : /^\/cv\/*$/.test(pathname) ? (
          <CvPage />
        ) : /^\/projects\/*$/.test(pathname) ? (
          <ProjectsPage />
        ) : /^\/talent\/*$/.test(pathname) ? (
          <Talent />
        ) : (
          <Error404Page />
        )}
      </main>
      <Footer />
    </>
  );
};

export default App;
