import './App.css';
import 'devicon/devicon.min.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { IndexPage } from './pages/Index';
import { ProjectsPage } from './pages/Projects';
import { CvPage } from './pages/Cv';
import { TalentPage } from './pages/Talent';
import { Error404Page } from './pages/Error404';
import { LocalStorageKeys } from './core/constants';
import { Route } from './core/router/Route';
import { Router } from './core/router/Router';
import { ProjectPage } from './pages/Project';

const App = () => {
  const { pathname } = window.location;
  localStorage.setItem(LocalStorageKeys.pathname, pathname);
  const routes = [
    new Route({ path: /^\/{0,1}$/, component: IndexPage }),
    new Route({ path: /^\/cv\/?$/, component: CvPage }),
    new Route({ path: /^\/projects\/{0,1}$/, component: ProjectsPage }),
    new Route({ path: /^\/project\/{0,1}$/, component: ProjectPage }),
    new Route({ path: /^\/talent\/{0,1}$/, component: TalentPage }),
    new Route({ path: /^\/.*/, component: Error404Page }),
  ];

  return (
    <>
      <Header />
      <main style={{ paddingBlockStart: '80px' }}>
        <Router routes={routes} />
      </main>
      <Footer />
    </>
  );
};

export default App;
