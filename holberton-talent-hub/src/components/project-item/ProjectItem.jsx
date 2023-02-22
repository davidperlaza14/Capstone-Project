/* eslint-disable jsx-a11y/alt-text */
import { ProjectItemWrapper } from './ProjectItem.styles';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { images, usersTalent } from './ProjectItem.data';
import { UserCard } from '../user-card/UserCard';
import { linkTo } from '../../core/router/linkTo';

export const ProjectItem = ({ projectId }) => {
  return (
    <ProjectItemWrapper onClick={() => linkTo({ pathname: '/project', projectId })}>
      <figure>
        <ImageGallery
          items={images}
          showNav={false}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
        />
      </figure>
      <header>
        <h1>App BuyEasy</h1>
      </header>
      <main>
        <section className="description">
          <p>
            Buy easy, live easy with BuyEasy. Discover our innovative app that takes you to a world of products and services designed for
            young people like you. From clothing and accessories to cutting-edge technology, at BuyEasy you will find everything you need to
            enjoy your life to the fullest. Are you ready to buy easy and live easy? Download BuyEasy now and join our community of young
            people passionate about life.
          </p>
        </section>
        <section className="talent-container">
          {usersTalent.map(({ img, name }, key) => (
            <UserCard key={key} {...{ img, name }} />
          ))}
        </section>
      </main>
    </ProjectItemWrapper>
  );
};
