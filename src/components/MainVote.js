import React, { useState, useEffect } from "react";
import Navbar, { BottomNavbar } from "./Navbar";
import voteImage from "../images/vote.png";
import modelImage from "../images/body.png";
import topImage from "../images/top.png";
import dress2Image from "../images/dress2.png";
import dress3Image from "../images/dress3.png";
import dress4Image from "../images/dress4.png";
import dress5Image from "../images/dress5.png";

const clothingStyles = {
  top: "model-image top",
  dress2: "model-image dress2",
  dress3: "model-image dress3",
  dress4: "model-image dress4",
  dress5: "model-image dress5",
};

const clothingItems = [
  { src: topImage, style: clothingStyles.top },
  { src: dress2Image, style: clothingStyles.dress2 },
  { src: dress3Image, style: clothingStyles.dress3 },
  { src: dress4Image, style: clothingStyles.dress4 },
  { src: dress5Image, style: clothingStyles.dress5 },
];

const getRandomOutfits = () => {
  const shuffled = [...clothingItems].sort(() => 0.5 - Math.random());
  return [shuffled[0], shuffled[1]];
};

const MainVote = () => {
  const [outfits, setOutfits] = useState(getRandomOutfits());

  useEffect(() => {
    setOutfits(getRandomOutfits());
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="container2">
        <div className="vote-image">
          <img src={voteImage} alt="Vote" />
        </div>
        <div className="content">
          <div className="model">
            <img id="model-image-left" src={modelImage} alt="Model" />
            <img
              id="clothing-item-left"
              className={outfits[0].style}
              src={outfits[0].src}
              alt="Clothing"
            />
          </div>
          <div className="model">
            <img id="model-image-right" src={modelImage} alt="Model" />
            <img
              id="clothing-item-right"
              className={outfits[1].style}
              src={outfits[1].src}
              alt="Clothing"
            />
          </div>
        </div>
        <div className="buttons">
          <button
            style={{
              border: "5px solid #E27CBF",
              borderRadius: "7px",
              fontWeight: "500",
              color: "#E27CBF",
              padding: "10px",
              width: "130px",
              marginTop: "20px",
              marginBottom: "20px",
              marginRight : "35px",
              fontSize:"1.3rem"
            }}
          >
            56.8K
          </button>
          <button
            style={{
              border: "5px solid #E27CBF",
              borderRadius: "7px",
              fontWeight: "500",
              color: "#E27CBF",
              padding: "10px",
              width: "130px",
              marginTop: "20px",
              marginBottom: "20px",
              fontSize:"1.3rem"
            }}
          >
            32.1K
          </button>
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default MainVote;
