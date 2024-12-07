import React, { useEffect, useState } from 'react';
import face from '../images/face.jpg';
import '../index.css';

 function useScrollToNextSection(thresholdUp, thresholdDown) {
   const [isAnimatedUp, setIsAnimatedUp] = useState(true);
   const [isAnimatedDown, setIsAnimatedDown] = useState(false);

   useEffect(() => {
     let timeout;
     const handleScroll = () => {
       const scrollY = window.scrollY;
       const scrollTo = window.scroll;
       

     
       if (scrollY > thresholdDown && !isAnimatedDown) {
         console.log('scrollY > thresholdDown');
         setIsAnimatedDown(true);
         setIsAnimatedUp(false); 
         clearTimeout(timeout);  
         timeout = setTimeout(() => setIsAnimatedDown(false), 1); 
          scrollTo({
            left:0,
            top: 1000,
            behavior:'smooth'
          });
        }

       if (scrollY < thresholdUp && !isAnimatedUp) {
         console.log('scrollY < thresholdUp');
         setIsAnimatedUp(true);
         setIsAnimatedDown(false);  
         clearTimeout(timeout);  
         timeout = setTimeout(() => setIsAnimatedUp(false), 1);  
       }
     };

     window.addEventListener('scroll', handleScroll);
     return () => {
       window.removeEventListener('scroll', handleScroll);
       clearTimeout(timeout);  
     };
   }, [isAnimatedUp, isAnimatedDown, thresholdUp, thresholdDown]);

   return { isAnimatedUp, isAnimatedDown };
 }

 function Visible(threshold) {
   const [isAnimated, setIsAnimated] = useState(false);

 useEffect(() => {
   const handleScroll = () => {
    const ScrollX = window.scrollX;

     if (ScrollX <= threshold && !isAnimated) {
       setIsAnimated(true);
     }
   };

   window.addEventListener('scroll', handleScroll);
   return () => {
     window.removeEventListener('scroll', handleScroll);
   };
 }, [isAnimated, threshold]);
 return isAnimated;
 }
 
 function CV() {

  function handleScroll(event) {
    const container = document.getElementById('scrollContainer');
    const scrollBottom = container.scrollHeight - container.scrollTop - container.clientHeight;
    const isAtBottom = scrollBottom <= 0;
    const isAtLeftEdge = container.scrollLeft <= 0;
    const isWithinHorizontalThreshold = container.scrollLeft >= -800;

  
    if (isAtBottom && event.deltaY > 0) {
      container.scrollBy(100,0); 
    } else if (isWithinHorizontalThreshold && !isAtLeftEdge && event.deltaY < 0) {
      
      event.preventDefault();
      container.scrollBy(-100, 0); 
    } else if (isAtLeftEdge && event.deltaY < 0) {
      container.scrollBy(0, -1000); 
    }
  }
  
  useEffect(() => {
    
    window.addEventListener('wheel', handleScroll, { passive: false });
  
    return () => {
    
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);
  
  const thresholdR =100;
  const threshold = 50;
  const threshold1 = 0;
  const threshold2 = 100;
  const threshold3 = 400;
  const threshold4 = 500;
  const threshold5 = 600;
  const threshold6 = 700;

  const { isAnimatedDown:isAnimated8Down, isAnimatedUp: isAnimated8Up } = useScrollToNextSection(thresholdR, threshold);
  // const isAnimated1 = useScrollToNextSection(threshold1);
  const isAnimated2 = Visible(threshold1);
  const isAnimated3 = Visible(threshold2);
  const isAnimated4 = Visible(threshold3);
  const isAnimated5 = Visible(threshold4);
  const isAnimated6 = Visible(threshold5);
  const isAnimated7 = Visible(threshold6);

  return (
    <div id="CV">
      <div id="yläosa" className={`${isAnimated8Down ? 'animate7' : ''} ${isAnimated8Up ? 'animate8' : ''}`}>
        <img src={face} alt="face" id="photo" />
        <h1 id="otsikkocv">
          Arttu Lankinen
          <br />
          Ansioluettelo
          <p className="tiedot">Synt.04.09.2002</p>
          <p className="tiedot">70110 Kuopio</p>
          <p className="tiedot">arttu.lankinen@edu.savonia.fi</p>
          <br/>
        </h1>
      </div>
            <div id="scrollContainer" onWheel={handleScroll}>
        <div id="Koulut" className={isAnimated2 ? 'animate1' : ''}>
          <div id='txt' className='content'>
            <h2>Koulutus</h2>
            <p>Savonia-ammattikorkeakoulu, tietotekniikan insinörikoulutus, 2022 - 2026</p>
            <p>Savon ammattiopisto, Sähkö- ja automaatioalan perustutkinto, valmistunut 5/2021</p>
          </div>
        </div>
        <div id="Kortit" className={isAnimated3 ? 'animate2' : ''}>
          <div id='txt' className='content'>
            <h2>korttikoulutukset:</h2>
            <ul>
              <li>Tulityö (1/2024 saakka)</li>
              <li>Työturvallisuus (11/2023 saakka)</li>
              <li>Sähkötyöturvallisuus SFS6002 (5/2024 saakka)</li>
            </ul>
          </div>
        </div>
        <div id="Intti" className={isAnimated4 ? 'animate3' : ''}>
          <div id='txt' className='content'>
            <h2>Varusmiespalvelus</h2>
            <p>Suoritettu KAIPR, viestikomppania, telemies, kotiutuminen 6/2022</p>
          </div>
        </div>
        <div id="Työ" className={isAnimated5 ? 'animate4' : ''}>
          <div id='txt' className='content'>
            <h2>Työkokemus</h2>
            <p>Are Oy, kesä 15.5.2023-01.09.2023. Sähköasennusta urakkatyömaalla.</p>
            <p>Barona Rakennus rakennusapumies, muutamia työpäiviä kesä-heinäkuu 2022</p>
            <p>Osuma Henkilöstöpalvelut, sähköasentaja 12.7.2022-1.9.2022</p>
            <p>Työssäoppimisharjoittelu Are Oy, ajalla 18.1. – 14.5.2021</p>
            <p>Työssäoppimisharjoittelu Finteco LVIS Oy, ajalla 8.11. - 4.1.2021</p>
            <p>Työssäoppimisharjoittelu POK Group Oy, ajalla 27.4. – 29.5.2020</p>
            <p>Työssäoppimisharjoittelu Norelco Oy, ajalla 19.8. – 15.11.2019</p>
          </div>
        </div>
        <div id="Kielet" className={isAnimated6 ? 'animate5' : ''}>
          <div id='txt' className='content'>
            <h2>Kielitaito</h2>
            <p>Suomi – Äidinkieli</p>
            <p>Englanti – Sujuva</p>
          </div>
        </div>
        <div id="Harrastukset" className={isAnimated7 ? 'animate6' : ''}>
          <div id='txt' className='content'>
            <h2>Harrastukset</h2>
            <p>Kuntosali, skeittaaminen, koodaaminen.</p>
          </div>
        </div>
      </div>
      </div>
   );
 }


export { CV };


