import React, { useState, useEffect } from "react";
import Navbar, { BottomNavbar } from "./Navbar";
import voteImage from "../images/vote.png";
import modelImage from "../images/body.png";
import topImage from "../images/top.png";
import dress2Image from "../images/dress2.png";
import dress3Image from "../images/dress3.png";
import dress4Image from "../images/dress4.png";
import dress5Image from "../images/dress5.png";
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import { db } from "./firebase"; // Ensure db is imported correctly


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

const WIN_THRESHOLD = 30; 
const MainVote = () => {
  const [outfits, setOutfits] = useState(getRandomOutfits());
  const [votesLeft, setVotesLeft] = useState(0);
  const [votesRight, setVotesRight] = useState(0);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    setOutfits(getRandomOutfits());

    const votesCollection = collection(db, "votes");
    const q = query(votesCollection);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      let leftVotes = 0;
      let rightVotes = 0;

      snapshot.forEach((doc) => {
        if (doc.data().vote === "left") {
          leftVotes += 1;
        } else if (doc.data().vote === "right") {
          rightVotes += 1;
        }
      });

      setVotesLeft(leftVotes);
      setVotesRight(rightVotes);

      if (leftVotes >= WIN_THRESHOLD) {
        setWinner("left");
      } else if (rightVotes >= WIN_THRESHOLD) {
        setWinner("right");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleVote = async (vote) => {
    try {
      await addDoc(collection(db, "votes"), {
        vote,
        timestamp: new Date(),
      });
    } catch (e) {
      console.error("Error adding vote: ", e);
    }
  };

  return (
    <div className="container">
      <Navbar />
      <div className={`container2 ${winner ? "winner faded" : ""}`}>
        <div className="vote-image">
          <img src={voteImage} alt="Vote" />
        </div>
        <div className={`content `}>
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
        {winner && (
          <div className="congratulations-message" style={{ position: "absolute", top: "60%", left: "47%", transform: "translate(-50%, -50%)", backgroundColor: "#ffffffd9", padding: "20px",  borderRadius: "10px", textAlign: "center", zIndex: 1 }}>
            <h1 style={{ color: "#7E5B17", margin: 0 , fontSize:'1.5rem',fontWeight:'bold' }}>Congratulations!!</h1>
            <p style={{ color: "#7E5B17", margin: 0 ,fontSize:'1.5rem',fontWeight:'bold'}}>You won 5 coins</p>
          </div>
        )}
        <div className={`buttons ${winner ? "winner" : ""}`}>
          <button
            onClick={() => handleVote("left")}
            style={{
              border: "5px solid #E27CBF",
              borderRadius: "7px",
              fontWeight: "500",
              color: "#E27CBF",
              padding: "10px",
              width: "130px",
              marginTop: "20px",
              marginBottom: "20px",
              marginRight: "35px",
              fontSize: "1.3rem",
            }}
          >
            {votesLeft}
          </button>
          <button
            onClick={() => handleVote("right")}
            style={{
              border: "5px solid #E27CBF",
              borderRadius: "7px",
              fontWeight: "500",
              color: "#E27CBF",
              padding: "10px",
              width: "130px",
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "1.3rem",
            }}
          >
            {votesRight}
          </button>
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default MainVote;
