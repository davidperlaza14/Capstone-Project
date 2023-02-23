import { TalentOverview } from '../components/holbies/TalentOverview';
import { SearchBar } from '../components/search-bar/SearchBar';

export const TalentPage = () => {
  /* const indexLoad = JSON.parse(localStorage.getItem('coderise-talent:index-load'));*/
  return (
    <>
      <section id="inicio" className="inicio">
        <div className="contenido-banner">
          <SearchBar />
          <TalentOverview></TalentOverview>
        </div>
      </section>
    </>
  );
};
