
//eslint-disable-next-line
import React from 'react'
import './Home.css'
import logo from "./sully.png"
import sun from "./sunflower.jpg";
import ocean from "./oceans.jpg";
import { useEffect, useRef } from "react";

function Home() {
  const cardRef = useRef([]);
  
  const batman ="client\public\logo512.png"
const boys ="https://ih1.redbubble.net/image.3704419270.8579/st,small,507x507-pad,600x600,f8f8f8.jpg"
const michael = "https://img.buzzfeed.com/buzzfeed-static/static/2023-01/23/15/campaign_images/e470a0b884c3/83-times-michael-scott-from-the-office-made-us-bu-2-536-1674489171-13_dblbig.jpg";
const ross="https://image.spreadshirtmedia.com/image-server/v1/products/T1459A839PA3861PT28D1040031197W8333H10000/views/1,width=378,height=378,appearanceId=839,backgroundColor=F2F2F2/im-fine-friends-tv-show.jpg"
 
const mania="https://i.pinimg.com/originals/5f/fe/23/5ffe2345bb736d402576fe526bae1466.png"
const jake ="https://img-15.stickers.cloud/packs/e73fa553-97fe-46b3-b99c-cc104fcfeb85/webp/a496e360-791a-4f93-96f7-01f71281da28.webp";



  // function isElementInViewport(el) {
  //   if (!el) return false;
  //   const rect = el.getBoundingClientRect();
  //   return (
 
  //     rect.left >= 0 &&
      
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // }

 
  // useEffect(() => {
  //   function isCardVisible() {
  //     const cards = cardRef.current;
  //     cards.forEach((cards) => {
  //     isElementInViewport(cards)
  //       ? cards.classList.add("isVisible")
  //       : cards.classList.remove("isVisible");
  //     });
  //   }
  
  //   isCardVisible();
  //   window.addEventListener("scroll", isCardVisible);
  //   window.addEventListener("resize", isCardVisible);
  //   return () => {
  //     window.removeEventListener("scroll", isCardVisible);
  //     window.removeEventListener("resize", isCardVisible);
  //   };
  // }, []);
 


// function Home() {

  function isElementInViewport(el, wrapper) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();
    return (
      rect.left >= wrapperRect.left &&
      rect.right <= wrapperRect.right
    );
  }
  const wrapperRef = React.useRef();

  const cardRefs = Array.from({ length: 6 }, () => React.createRef());
  useEffect(() => {
    function isCardVisible() {
      const cards = cardRefs.map((ref) => ref.current);
      const wrapper = wrapperRef.current;
      cards.forEach((card) => {
        isElementInViewport(card, wrapper)
          ? card.classList.add("isVisible")
          : card.classList.remove("isVisible");
      });
    }

    isCardVisible();
    const wrapper = wrapperRef.current;
    wrapper.addEventListener("scroll", isCardVisible);
    return () => {
      wrapper.removeEventListener("scroll", isCardVisible);
    };
  }, []);

  return (
    <div className="wrapper" ref={wrapperRef}>
      <div className="card" ref={cardRefs[0]}>
        <img src={logo} alt="Batman" />
        <h2 className="card-title">Batman</h2> 
      </div>
      <div className="card" ref={cardRefs[1]}>
        <img src={sun} alt="The sunflower" />
        <h2 className="card-title">sunflower</h2>
      </div>
      <div className="card" ref={cardRefs[2]}>
        <img src={ocean} alt="ocean" />
        <h2 className="card-title">Ross</h2>
      </div>
      <div className="card" ref={cardRefs[3]}>
        <img src={mania} alt="Maniac" />
        <h2 className="card-title">Maniac</h2>
      </div>
      <div className="card" ref={cardRefs[4]}>
        <img src={jake} alt="Jake Peralta from Brooklyn Nine-Nine" />
        <h2 className="card-title">Jake Peralta</h2>
      </div>
      <div className="card" ref={cardRefs[5]}>
        <img className='mick' src={michael} alt="Michael Scott from The Office" />
        <h2 className="card-title">Michael Scott</h2>
      </div>
    </div>
  );
}

export default Home;
