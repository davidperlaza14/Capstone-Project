import ecommerce from '../../images/ecommerce.jpg'
import talent1 from '../../images/talent01.jpg'
import talent2 from '../../images/talent02.jpg'
import talent3 from '../../images/talent03.jpg'
import { SlideWrapper } from './Jobs.styles'


export const Jobs = () => {
  return (
    <SlideWrapper>
      <div className="job-slide">
        <div className="job-container">

          <img className="job-img" src={ecommerce} alt="ecommerce" />
          <h1>ShopEase E-commerce Platform</h1>
          <p>
            ShopEase is an e-commerce app developed by three students.
            It offers a user-friendly interface and a personalized recommendations
            system powered by AI. Furthermore, ShopEase seamlessly integrates with
            a variety of shipping and delivery providers, making product delivery
            easy for users. In summary, ShopEase is an impressive example of what
            can be achieved when young talents collaborate on an ambitious project.
          </p>
        </div>


      </div>

      <section>
        <div className="talent-container">
          <div className="talents">
            <img src={talent1} className="talent-img" alt="talent1" />
            <h2>Kofi Kaba</h2>
            <p>Kofi is a dynamic African developer who always brings his A-game
              to the table. He has a deep understanding of C, C++, and Python,
              and is highly skilled in the use of HTML, JavaScript, and React.
              With his technical prowess and innovative approach, Kofi
              consistently delivers top-notch results.</p>
          </div>
          <div className="talents">
            <img src={talent2} className="talent-img" alt="talent2" />
            <h2>Ming Nakamura</h2>
            <p>Ming is a highly skilled Asian developer who is well-versed in a wide
              range of programming languages. He excels in C, C++, and Python, and
              has extensive experience with HTML, JavaScript, and React. Ming's
              dedication to his craft and commitment to quality make him a valuable
              contributor to the team.</p>
          </div>

          <div className="talents">
            <img src={talent3} className="talent-img" alt="talent3" />
            <h2>Astrid Jensen</h2>
            <p>Astrid is a brilliant Nordic developer who has a passion for coding.
              She specializes in a variety of programming languages including C,
              C++, and Python. Astrid's expertise in HTML, JavaScript, and React
              has made her a valuable asset to the team.</p>
          </div>

        </div>
      </section>
    </SlideWrapper>
  );
};