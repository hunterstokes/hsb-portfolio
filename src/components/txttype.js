// import {useRef, useEffect} from 'react';

// const TxtType = ({ text, period }) => {
//   const elementRef = useRef(null);
//   const toRotate = text.split(',');
//   let loopNum = 0;
//   let txt = '';
//   let isDeleting = false;
//   const tick = () => {
//     const i = loopNum % toRotate.length;
//     const fullTxt = toRotate[i];
//     if (isDeleting) {
//       txt = fullTxt.substring(0, txt.length - 1);
//     } else {
//       txt = fullTxt.substring(0, txt.length + 1);
//     }
//     elementRef.current.textContent = txt;
//     let delta = 200;
//     if (isDeleting) {
//       delta /= 2;
//     }
//     if (!isDeleting && txt === fullTxt) {
//       delta = period;
//       isDeleting = true;
//     } else if (isDeleting && txt === '') {
//       isDeleting = false;
//       loopNum++;
//       delta = 500;
//     }
//     setTimeout(tick, delta);
//   };

//   useEffect(() => {
//     tick();
//   }, []);

//   return <span ref={elementRef} />;
// };
// export default TxtType;

import { useEffect, useRef, useState } from "react";

const TxtType = ({ toRotate, period }) => {
  const elRef = useRef(null);
  const loopNumRef = useRef(0);
  const txtRef = useRef("");
  const isDeletingRef = useRef(false);
  const timerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const tick = () => {
      const i = loopNumRef.current % toRotate.length;
      const fullTxt = toRotate[i];

      if (isDeletingRef.current) {
        txtRef.current = fullTxt.substring(0, txtRef.current.length - 1);
      } else {
        txtRef.current = fullTxt.substring(0, txtRef.current.length + 1);
      }

      el.innerText = txtRef.current;

      let delta = 200 - Math.random() * 100;
      if (isDeletingRef.current) {
        delta /= 2;
      }

      if (!isDeletingRef.current && txtRef.current === fullTxt) {
        delta = period;
        isDeletingRef.current = true;
      } else if (isDeletingRef.current && txtRef.current === "") {
        isDeletingRef.current = false;
        loopNumRef.current = loopNumRef.current + 1;
        delta = 500;
      }

      timerRef.current = setTimeout(() => {
        tick();
      }, delta);
    };
    if (isReady) {
    timerRef.current = setTimeout(() => {
      tick();
    }, period);
  }

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [toRotate, period, isReady]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsReady(true);
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <a href="" className="typewrite" ref={elRef}>
      {txtRef.current}
    </a>
  );
};

export default TxtType;

