/* eslint-disable jsx-a11y/alt-text */
import pro from "../../images/pro.jpg";
import pro1 from "../../images/pro1.jpg";
import pro2 from "../../images/pro2.jpg";
import talent1 from "../../images/talent01.jpg";
import talent2 from "../../images/talent02.jpg";
import talent3 from "../../images/talent03.jpg";
import talent4 from "../../images/talent04.jpg";
import talent5 from "../../images/talent05.jpg";
import talent6 from "../../images/talent06.jpg";
import { Tecnology, UserTalet } from "./TalentOverview.types";

export const imagesRaw = [pro, pro1, pro2];
/* export const images = imagesRaw.map(
  (img) => new GaleryItemImage({ img, thumbnail: img })
); */

/* Creating a new array of objects. */

export const usersTalent = [
  new UserTalet({
    img: { src: talent1, alt: "Kofi Kaba" },
    name: "Kofi Kaba",
    description:
      "Kofi Kaba, a dynamic African developer who always brings his A-game to the table. He has a deep understanding of C, C++, and Python, and is highly skilled in the use of HTML, JavaScript, and React. With his technical prowess and innovative approach, Kofi consistently delivers top-notch results.",
    tecnologies: [
      new Tecnology({
        icon: "c",
        name: "C",
      }),
      new Tecnology({
        icon: "cplusplus",
        name: "C++",
      }),
      new Tecnology({
        icon: "python",
        name: "Python",
      }),
      new Tecnology({
        icon: "html5",
        name: "HTML",
      }),
      new Tecnology({
        icon: "javascript",
        name: "Javascript",
      }),
      new Tecnology({
        icon: "react",
        name: "React",
      }),
    ],
  }),
  new UserTalet({
    img: { src: talent2, alt: "Ming Nakamura" },
    name: "Ming Nakamura",
    description:
      "Ming is a highly skilled Asian developer who is well-versed in a wide range of programming languages. He excels in C, C++, and Python, and has extensive experience with HTML, JavaScript, and React. Ming's dedication to his craft and commitment to quality make him a valuable contributor to the team.",
    tecnologies: [
      new Tecnology({
        icon: "c",
        name: "C",
      }),
      new Tecnology({
        icon: "cplusplus",
        name: "C++",
      }),
      new Tecnology({
        icon: "python",
        name: "Python",
      }),
      new Tecnology({
        icon: "html5",
        name: "HTML",
      }),
      new Tecnology({
        icon: "javascript",
        name: "Javascript",
      }),
      new Tecnology({
        icon: "react",
        name: "React",
      }),
    ],
  }),
  new UserTalet({
    img: { src: talent3, alt: "Astrid Jensen" },
    name: "Astrid Jensen",
    description:
      "Astrid is a brilliant Nordic developer who has a passion for coding. She specializes in a variety of programming languages including C, C++, and Java. Astrid's expertise in HTML, JavaScript, and Angular has made her a valuable asset to the team.",
    tecnologies: [
      new Tecnology({
        icon: "c",
        name: "C",
      }),
      new Tecnology({
        icon: "cplusplus",
        name: "C++",
      }),
      new Tecnology({
        icon: "java",
        name: "Java",
      }),
      new Tecnology({
        icon: "javascript",
        name: "Javascript",
      }),
      new Tecnology({
        icon: "angularjs",
        name: "Angular",
      }),
    ],
  }),
  new UserTalet({
    img: { src: talent4, alt: "Carlos Andres Perez" },
    name: "Carlos Andres Perez",
    description:
      "Carlos Andrés Pérez, a passionate programmer with experience in different programming languages, including C, Python, javascript, Angular and react Also, he is a big fan of video games, which has sparked his interest in game creation and has developed skills in that field, Currently, I am studying Ruby",
    tecnologies: [
      new Tecnology({
        icon: "c",
        name: "C",
      }),
      new Tecnology({
        icon: "angularjs",
        name: "Angular",
      }),
      new Tecnology({
        icon: "python",
        name: "Python",
      }),
      new Tecnology({
        icon: "html5",
        name: "HTML",
      }),
      new Tecnology({
        icon: "javascript",
        name: "Javascript",
      }),
      new Tecnology({
        icon: "react",
        name: "React",
      }),
      new Tecnology({
        icon: "ruby",
        name: "Ruby",
      }),
    ],
  }),
  new UserTalet({
    img: { src: talent5, alt: "Karla Velez" },
    name: "Karla Velez",
    description:
      "Karla Velez, is a passionate programmer with extensive experience in various programming languages. I am an expert in C, C++, Python, HTML, and CSS, and have worked on several challenging projects that have allowed her to develop her skills and knowledge.",
    tecnologies: [
      new Tecnology({
        icon: "c",
        name: "C",
      }),
      new Tecnology({
        icon: "cplusplus",
        name: "C++",
      }),
      new Tecnology({
        icon: "python",
        name: "Python",
      }),
      new Tecnology({
        icon: "html5",
        name: "HTML",
      }),
      new Tecnology({
        icon: "css3",
        name: "CSS",
      }),
    ],
  }),
  new UserTalet({
    img: { src: talent6, alt: "Lucia Castro" },
    name: "Lucia Castro",
    description:
      "Lucía Castro, a passionate programmer and talented Holberton student originally from Colombia. Lucía has extensive experience in various programming languages, including C, C++, Python, Java, JavaScript and Angular, which makes her a versatile programmer capable of tackling various technical challenges.",
    tecnologies: [
      new Tecnology({
        icon: "c",
        name: "C",
      }),
      new Tecnology({
        icon: "cplusplus",
        name: "C++",
      }),
      new Tecnology({
        icon: "java",
        name: "Java",
      }),
      new Tecnology({
        icon: "javascript",
        name: "Javascript",
      }),
      new Tecnology({
        icon: "angularjs",
        name: "Angular",
      }),
      new Tecnology({
        icon: "python",
        name: "Python",
      }),
    ],
  }),
];
