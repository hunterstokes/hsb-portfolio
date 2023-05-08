import React from "react";
import TxtType from "NextTS/components/txttype";


export const LandingPage = () => {



  return (
    
      <div id='landing' className="landing__page-content">
        <div className="landing__background">
          <h1 className="landing__heading">
            HUNTER BROWN
          </h1>
              <hr className="landing__line"></hr>
              <p className="landing__text">
         
          <TxtType
          toRotate={["Web Developer", "Lifelong Learner", "Chef", "World Traveler", "Manager"]}
          period={700}
          />
          </p>
          
          <button className="down-arrow" >
            <a >
            &#x21e9;
            </a>
          </button>
          </div>
          
          </div>
    );
  }
  // This is in case I want to use the Hacker effect.
  // <h1 ref={headingRef} data-value="HUNTER BROWN" className="landing__heading"></h1>
  // const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // const headingRef = useRef(null);

  // const [elements, setElements] = useState([]);
  // const [txt, setTxt] = useState("");
  // const [loopNum, setLoopNum] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);

  // useEffect(() => {
  //   const heading = headingRef.current;
  //   let interval = null;

  //   const handleMouseOver = (event) => {
  //     let iteration = 0;

  //     clearInterval(interval);

  //     interval = setInterval(() => {
  //       event.target.innerText = event.target.dataset.value
  //         .split("")
  //         .map((letter, index) => {
  //           if (index < iteration) {
  //             return event.target.dataset.value[index];
  //           }

  //           return letters[Math.floor(Math.random() * 26)];
  //         })
  //         .join("");

  //       if (iteration >= event.target.dataset.value.length) {
  //         clearInterval(interval);
  //       }

  //       iteration += 1 / 3;
  //     }, 75);
  //   };

  //   heading.addEventListener("mouseover", handleMouseOver);

  //   return () => {
  //     clearInterval(interval);
  //     heading.removeEventListener("mouseover", handleMouseOver);
  //   };
  // }, [letters]);


