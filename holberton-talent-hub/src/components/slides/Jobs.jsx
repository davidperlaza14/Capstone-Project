import pro from "../../images/pro.jpg";
import pro1 from "../../images/pro1.jpg";
import pro2 from "../../images/pro2.jpg";
import talent1 from "../../images/talent01.jpg";
import talent2 from "../../images/talent02.jpg";
import talent3 from "../../images/talent03.jpg";
import { SlideWrapper } from "./Jobs.styles";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

export const Jobs = () => {
  const images = [
    {
      original: pro,
      thumbnail: pro,
      originalHeight: "500px",
      originalWidth: "300px",
    },
    {
      original: pro1,
      thumbnail: pro1,
      originalHeight: "500px",
      originalWidth: "300px",
    },
    {
      original: pro2,
      thumbnail: pro2,
      originalHeight: "500px",
      originalWidth: "300px",
    },
  ];

  return (
    <SlideWrapper>
      <div className="job-slide">
        <div className="job-container">
          <div className="carrusel1">
            <ImageGallery items={images} />
          </div>
          <h1>App BuyEasy</h1>
          <p>
            Buy easy, live easy with BuyEasy. Discover our innovative app that
            takes you to a world of products and services designed for young
            people like you. From clothing and accessories to cutting-edge
            technology, at BuyEasy you will find everything you need to enjoy
            your life to the fullest. Are you ready to buy easy and live easy?
            Download BuyEasy now and join our community of young people
            passionate about life.
          </p>
        </div>
      </div>

      <section>
        <div className="talent-container">
          <div className="talents">
            <img src={talent1} className="talent-img" alt="talent1" />
            <h2>Kofi Kaba</h2>
            <p>
              Kofi is a dynamic African developer who always brings his A-game
              to the table. He has a deep understanding of C, C++, and Python,
              and is highly skilled in the use of HTML, JavaScript, and React.
              With his technical prowess and innovative approach, Kofi
              consistently delivers top-notch results.
            </p>
          </div>
          <div className="talents">
            <img src={talent2} className="talent-img" alt="talent2" />
            <h2>Ming Nakamura</h2>
            <p>
              Ming is a highly skilled Asian developer who is well-versed in a
              wide range of programming languages. He excels in C, C++, and
              Python, and has extensive experience with HTML, JavaScript, and
              React. Ming's dedication to his craft and commitment to quality
              make him a valuable contributor to the team.
            </p>
          </div>

          <div className="talents">
            <img src={talent3} className="talent-img" alt="talent3" />
            <h2>Astrid Jensen</h2>
            <p>
              Astrid is a brilliant Nordic developer who has a passion for
              coding. She specializes in a variety of programming languages
              including C, C++, and Python. Astrid's expertise in HTML,
              JavaScript, and React has made her a valuable asset to the team.
            </p>
          </div>
        </div>
      </section>
    </SlideWrapper>
  );
};
