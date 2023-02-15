/* eslint-disable jsx-a11y/alt-text */
import { SlideWrapper } from './Jobs.styles';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { images, usersTalent } from './Jobs.data';
import { UserCard } from '../user-card/UserCard';

export const Jobs = () => {
  return (
    <SlideWrapper>
      <div className="job-slide">
        <div className="job-container">
          <div className="carrusel1">
            <ImageGallery items={images} />
          </div>
          <h1>App BuyEasy</h1>
          <p>
            Buy easy, live easy with BuyEasy. Discover our innovative app that takes you to a world of products and services designed for
            young people like you. From clothing and accessories to cutting-edge technology, at BuyEasy you will find everything you need to
            enjoy your life to the fullest. Are you ready to buy easy and live easy? Download BuyEasy now and join our community of young
            people passionate about life.
          </p>
        </div>
      </div>

      <section className="talent-container">
        {usersTalent.map((user, key) => (
          <UserCard key={key} {...user} />
        ))}
      </section>
    </SlideWrapper>
  );
};
