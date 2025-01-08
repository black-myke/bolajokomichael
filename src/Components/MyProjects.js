import TXT from "../assets/Images/TXT.png";
import Digiplus from "../assets/Images/Digiplus.png";
import Tour from "../assets/Images/Tour.png";
import Calc from "../assets/Images/Calculator.png";
import GenioConsult from "../assets/Images/Genio_Consult.png"
import I2I from "../assets/Images/I2I.png"

const viatour = "https://responsive-page-group-7.vercel.app/";
const digi = "https://group-7-product-page.vercel.app/";
const academy = "https://txt-academy.vercel.app/";
const innovatetoimpact = "https://innovatetoimpact.org/";
const genioconsult = "https://genioconsults.xyz/";


const projects = [

    {
        id: 1,
        webImg: I2I,
        name: "Innovate to Impact",
        tools: "HTML, CSS, Boostrap, Javascript",
        info: "Official website of Innovate-to-Impact tech community",
        link: innovatetoimpact,
    },

    {
        id: 2,
        webImg: GenioConsult,
        name: "Genio Consults",
        tools: "React JS, Tailwind CSS",
        info: "Official website of Genio Consults - a management consulting and accounting firm.",
        link: genioconsult,
    },

    {
        id: 3,
        webImg: TXT,
        name: "TXT Academy",
        tools: "HTML, CSS, Javascript, Bootstrap",
        info: "A static landing page for Forex Academy. It serves as a platform for students to enroll into the academy. Responsive across all device screen sizes.",
        link: academy,
    },

    {
        id: 4,
        webImg: Digiplus,
        name: "DigiPlus Project Page",
        tools: "HTML, Javascript, Bootstrap",
        info: "E-commerce frontend to showcase different product offered by Digiplus. Responsive across all device screen sizes",
        link: digi,
    },

    {
        id: 5,
        webImg: Tour,
        name: "Viatours",
        tools: "HTML, CSS, Javascript, Bootstrap",
        info: "A landing page serving as a tour guide for tourist, showing different destinations for tourist.",
        link: viatour,
    },

    

    

]

export default projects;