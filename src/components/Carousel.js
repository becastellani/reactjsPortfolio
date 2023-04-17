import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Logo from './img/html5.svg';
import Logo2 from './img/css3.svg';
import Logo3 from './img/javascript.svg';
import Logo4 from  './img/phpicon.svg'
import Logo5 from './img/reacticon.svg'
import Logo6 from './img/mysqlicon.svg'
import Logo7 from './img/csharp.svg'
import Logo8 from './img/cplusplus.svg'

const Carousel = () => {
  const items = [
    <img src={Logo} alt="HTML5" style={{ objectFit: 'contain' }}/>,
    <img src={Logo2} alt="CSS3" style={{ objectFit: 'contain' }}/>,
    <img style={{  objectFit: 'contain' }} src={Logo3} alt="JavaScript" />,
    <img src={Logo5} alt="ReactJs"style={{ objectFit: 'contain' }} />,
    <img src={Logo4} alt="PHP"style={{ objectFit: 'contain' }} />,
    <img src={Logo6} alt="MySql"style={{ objectFit: 'contain' }} />,
    <img src={Logo7} alt="CSharp"style={{ objectFit: 'contain' }} />,
    <img src={Logo8} alt="C++"style={{ objectFit: 'contain' }} />,
  ];
  const responsive = {
    0: {
      items: 2,
      slideWidth: 0.8
    },
    770: {
      items: 3,
      slideWidth: 0.3
    },
    1200: {
      items: 6,
      slideWidth: 0.1
    }
  };
  return (  
    <div className="carousel-parent">
      <div className="carousel-container">
        <div className="skillsH1" id="skillsH1">
          <div class="p-4"></div>
          <h1>Minhas Skills</h1>
          <div class="p-4"></div>
        </div>
        <AliceCarousel
          items={items}
          responsive={responsive}
          autoPlay
          autoPlayInterval={1000}
          disableButtonsControls
          infinite
          mouseTracking
          stagePadding={{ paddingLeft: 0, paddingRight: 0 }}
          buttonsDisabled
        />
      </div>
    </div>
  );
}

export default Carousel;