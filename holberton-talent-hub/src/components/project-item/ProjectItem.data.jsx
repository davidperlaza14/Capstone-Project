/* eslint-disable jsx-a11y/alt-text */
import pro from "../../images/pro.jpg";
import pro1 from "../../images/pro1.jpg";
import pro2 from "../../images/pro2.jpg";
import talent1 from "../../images/talent01.jpg";
import talent2 from "../../images/talent02.jpg";
import talent3 from "../../images/talent03.jpg";
import "react-image-gallery/styles/css/image-gallery.css";
import { GaleryItemImage, Tecnology, UserTalet } from "./ProjectItem.types";

export const imagesRaw = [pro, pro1, pro2];
export const images = imagesRaw.map(
  (img) => new GaleryItemImage({ img, thumbnail: img })
);

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
];
