import React, { useState } from 'react';
import Navbar, { BottomNavbar } from './Navbar';
import ClothingItem from './ClothingItem';
import voteImage from '../images/vote.png';
import modelImage from '../images/body.png';
import topImage from '../images/top.png';
import jeansImage from '../images/jeans.png';
import dressImage from '../images/dress.png';
import pantsImage from '../images/pants.png';
import tshirtImage from '../images/tshirt.png';

const clothingStyles = {
  top: 'model-image top',
  jeans: 'model-image jeans',
  dress: 'model-image dress',
  pants: 'model-image pants',
  tshirt: 'model-image tshirt',
};

const VoteAndWin = () => {
  const [clothing, setClothing] = useState({ src: tshirtImage, style: clothingStyles.tshirt });

  const changeClothing = (src, style) => {
    setClothing({ src, style });
  };

  return (
    <div className="container" >
      <Navbar />
      <div className="container2">
        <div className="vote-image">
          <img src={voteImage} alt="Vote" />
        </div>
        <div className="content">
          <div className="sidebar">
            <ClothingItem src={topImage} alt="Top" className="sidebar-image" onClick={() => changeClothing(topImage, clothingStyles.top)} />
            <ClothingItem src={jeansImage} alt="Jeans" className="sidebar-image" onClick={() => changeClothing(jeansImage, clothingStyles.jeans)} />
            <ClothingItem src={dressImage} alt="Dress" className="sidebar-image" onClick={() => changeClothing(dressImage, clothingStyles.dress)} />
            <ClothingItem src={pantsImage} alt="Pants" className="sidebar-image" onClick={() => changeClothing(pantsImage, clothingStyles.pants)} />
            <ClothingItem src={tshirtImage} alt="Tshirt" className="sidebar-image" onClick={() => changeClothing(tshirtImage, clothingStyles.tshirt)} />
          </div>
          <div className="model">
            <img id="model-image" src={modelImage} alt="Model" />
            <img id="clothing-item" className={clothing.style} src={clothing.src} alt="Clothing" />
          </div>
        </div>
        <button
          style={{
            backgroundColor: '#fd8fd1',
            border: 'none',
            borderRadius: '7px',
            fontWeight: '500',
            color: 'white',
            padding: '10px',
            width: '150px',
            marginTop: '20px',
            marginBottom: '20px',
            fontStyle: 'italic',
          }}
        >
          Start Playing
        </button>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default VoteAndWin;
