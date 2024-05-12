import { IoMenu } from "react-icons/io5";
import fanta from "./assets/fanta.png";
import orangeSlice from "./assets/orange2.png";
import orange from "./assets/orange.webp";
import leaf from "./assets/leaf.webp";
import leaf2 from "./assets/leaf2.png";
import coconutLeaf from "./assets/coconoutleaf.png";
import lemon from "./assets/lemon.webp";
import cocacola from "./assets/cocacola.png";
import pepsi from "./assets/pepsi.png";
import "./App.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const container = useRef();
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".two",
          start: "0% 95%",
          end: "70% 50%",
          scrub: true,
          // markers: true,
        },
      });

      tl.to(
        "#fanta",
        {
          top: "150%",
          left: "20%",
        },
        "animation1"
      );

      tl.to(
        "#orange-slice",
        {
          top: "180%",
          left: "30%",
        },
        "animation1"
      );

      tl.to(
        "#leaf",
        {
          top: "110%",
          left: "80%",
          rotate: '200deg'
        },
        "animation1"
      );

      tl.to(
        "#leaf2",
        {
          top: "120%",
          left: "10%",
          rotate: '180deg'
        },
        "animation1"
      );

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".three",
          start: "0% 95%",
          end: "70% 50%",
          scrub: true,
          // markers: true,
        },
      });

      tl2.to(
        "#fanta",
        {
          top: "242%",
          left: "51%",
          width: "35%",
        },
        "animation2"
      );

      tl2.to(
        "#orange-slice",
        {
          top: "225%",
          left: "51%",
          width: "18%",
        },
        "animation2"
      );
    },
    { scope: container }
  );

  return (
    <div className="main" ref={container}>
      <nav>
        <h2>Fanta</h2>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <IoMenu size={26} />
      </nav>

      <div className="one">
        <h1>FANTA</h1>
        <img id="fanta" src={fanta} />
        <img id="orange-slice" src={orangeSlice} />
        <img id="orange" src={orange} />
        <img id="leaf" src={leaf} />
        <img id="leaf2" src={leaf2} />
        <img id="coconut-leaf" src={coconutLeaf} />
      </div>

      <div className="two">
        <div className="left">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#e04428"
              d="M41.5,-59.5C49.8,-51.1,49.7,-33.6,50.7,-19.2C51.7,-4.7,53.8,6.7,52.4,18.9C51.1,31.1,46.3,44.1,36.9,52.9C27.6,61.8,13.8,66.5,-2.5,70C-18.8,73.4,-37.7,75.6,-52.5,68.5C-67.3,61.5,-78.2,45.2,-84.5,27.1C-90.9,9,-92.7,-10.8,-80.5,-19.3C-68.3,-27.8,-42.1,-24.8,-26.3,-30.8C-10.6,-36.8,-5.3,-51.7,5.7,-59.5C16.6,-67.3,33.2,-68,41.5,-59.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="right">
          <h1>Flavour Updated</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            excepturi sed, itaque placeat id natus soluta veniam obcaecati qui a
            laborum laboriosam dolorem illum labore sit, voluptates commodi
            neque dolores tempore temporibus deleniti? Nobis, ratione hic error
            quis cum neque nulla laudantium nostrum sit nihil dolorum quisquam
            enim quaerat, eaque ex sequi, harum totam quia non! Labore, neque!
            Amet voluptatem illo similique recusandae! Ex quaerat quibusdam
            asperiores, ducimus tempore magni labore. Tenetur voluptas, quos ex
            repellendus provident mollitia laboriosam adipisci alias a impedit,
            cum accusamus rerum delectus eaque facilis veniam quia laborum
            incidunt ea assumenda! Eos magni aspernatur quod distinctio.
          </p>
        </div>
      </div>
      <div className="three">
        <div className="card">
          <img className="lemon lemon1" src={lemon} alt="" />
          <img id="cocacola" src={cocacola} alt="" />
          <h1>CocaCola</h1>
          <button>Buy Now</button>
        </div>
        <div className="card">
          <h1>Fanta</h1>
          <button>Buy Now</button>
        </div>
        <div className="card">
          <img className="lemon lemon2" src={lemon} alt="" />
          <img id="pepsi" src={pepsi} alt="" />
          <h1>Pepsi</h1>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
