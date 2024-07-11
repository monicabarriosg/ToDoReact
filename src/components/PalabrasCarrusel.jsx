// import { useState, useEffect } from 'react';
// import '../css/PalabrasCarrusel.css'; 

// const Carousel = ({ items }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
//     }, 500); 

//     return () => clearInterval(interval); 
//   }, [items.length]);

//   return (
//     <div className="carousel">
//       <button className="left-arrow" onClick={prevSlide}>
//         &#10094;
//       </button>
//       <div className="carousel-content">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className={index === currentIndex ? 'slide active' : 'slide'}
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//       <button className="right-arrow" onClick={nextSlide}>
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default Carousel;
