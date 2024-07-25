import React from 'react';

const ClothingItem = ({ src, alt, className, onClick }) => {
  return <img src={src} alt={alt} className={className} onClick={onClick} />;
};

export default ClothingItem;


// import React from 'react';

// const ClothingItem = ({ src, alt, onClick }) => {
//   return <img src={src} alt={alt} onClick={onClick} />;
// };

// export default ClothingItem;
