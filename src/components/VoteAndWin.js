import React, { useState } from 'react';
import Navbar, { BottomNavbar } from './Navbar';
import ClothingItem from './ClothingItem';
import voteImage from '../images/vote.png';
import modelImage from '../images/body.png';
import topImage from '../images/top.png';
import dress2Image from '../images/dress2.png';
import dress3Image from '../images/dress3.png';
import dress4Image from '../images/dress4.png';
import dress5Image from '../images/dress5.png';
import { useNavigate } from 'react-router-dom';

const clothingStyles = {
  top: 'model-image top',
  dress2: 'model-image dress2',
  dress3: 'model-image dress3',
  dress4: 'model-image dress4',
  dress5: 'model-image dress5',
};

const VoteAndWin = () => {
  const [clothing, setClothing] = useState({ src: dress2Image, style: clothingStyles.dress2 });

  const navigate = useNavigate();

  const changeClothing = (src, style) => {
    setClothing({ src, style });
  };

  const Play = () => {
    navigate('/MainVote');
  }

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
            <ClothingItem src={dress2Image} alt="Jeans" className="sidebar-image" onClick={() => changeClothing(dress2Image, clothingStyles.dress2)} />
            <ClothingItem src={dress3Image} alt="Dress" className="sidebar-image" onClick={() => changeClothing(dress3Image, clothingStyles.dress3)} />
            <ClothingItem src={dress4Image} alt="Pants" className="sidebar-image" onClick={() => changeClothing(dress4Image, clothingStyles.dress4)} />
            <ClothingItem src={dress5Image} alt="Tshirt" className="sidebar-image" onClick={() => changeClothing(dress5Image, clothingStyles.dress5)} />
          </div>
          <div className="model">
            <img id="model-image" src={modelImage} alt="Model" />
            <img id="clothing-item" className={clothing.style} src={clothing.src} alt="Clothing" />
          </div>
        </div>
        <button
        onClick={Play}
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
