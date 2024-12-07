import React, { useEffect, useState } from 'react'
import code from '../images/business.jpg';
import '../index.css';
import mongo from '../images/mongoimg.png';
import node from '../images/nodeimg.png';
import reactimg from '../images/reactimg.png';
import img from '../images/näyttö.png';

function useScrollToNextSection(thresholdShow, thresholdHide) {
  const [isAnimatedVisible, setIsAnimatedVisible] = useState(false);
  const [isAnimatedInvisible, setIsAnimatedInvisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
  
      if (scrollY >= thresholdShow && !isAnimatedInvisible) {
        setIsAnimatedInvisible(true);
        setIsAnimatedVisible(false);
       }

      else if (scrollY <= thresholdHide && isAnimatedInvisible) {
        setIsAnimatedVisible(true);
        setIsAnimatedInvisible(false);  
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
 
    };
  }, [isAnimatedVisible, isAnimatedInvisible, thresholdHide, thresholdShow]);

  return { isAnimatedVisible, isAnimatedInvisible };
}

function Koti() {
    const [isClicked, setIsClicked] = useState(false);
    const [reverseClick, setReverseClick] = useState(false);
    const thresholdHide = 340;
    const thresholdShow = 350;
    const {isAnimatedInvisible:isAnimated1Invisible, isAnimatedVisible: isAnimated1Visible } = useScrollToNextSection(thresholdShow, thresholdHide);


    const handleClick = () => {
        setIsClicked(true);
    };
   
    const handleReverseClick = () => {
        setReverseClick(true);
    };

    useEffect(() => {
        if(reverseClick && isClicked){
            setTimeout(() =>{
                setIsClicked(false)
                setReverseClick(false)
            },1000)     
        }
    },[isClicked, reverseClick])

    return (
        <div id='koti'>
            <div id="ekaosio">
                <img id='näyttö' src={img} alt='näyttö'/>
                <p id="teksti1" onClick={handleClick} className={`${isClicked ? 'slide' : ''} ${reverseClick ? 'slideback' : ''}`}>
                    Tervetuloa <br/>
                    Nimeni on Arttu Lankinen ja olen 22-vuotias tietotekniikka
                    insinööri opiskelija Kuopiosta.<br/> 
                    <span id='teksti1span'>NEXT/CLICK</span>
                </p>
                <p id='teksti2' style={{ opacity: 0}} onClick={handleReverseClick} className={`${isClicked ? 'slide2' : ''} ${reverseClick ? 'slideback2' : ''}`}>
                    Oikealla yläkulmassa voit navigoida minun CV:seen tai projektit sivulle. <br/> Voit myös rekisteröityä(vaikka dummy emaililla) 
                    ja lähettää sitten minulle sähköpostin sivuni kautta!<br/>
                    Alhaalla on kerrottu lisää sivusta <br/>
                    <span>GO BACK</span>
                </p>
            </div>
            <div className="curve">
                <div class="curves">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <div id='tokaosio'>
            <div id='card' style={{opacity:0}}  className={`${isAnimated1Invisible ? 'fadein' : ''} ${isAnimated1Visible ? 'fadeout' : ''}`}>
                <div id='vasen-content'>
                <p id='teksti3'>
                    Tämä sivu on toteutettu käyttäen Reactia, MongoDB:tä sekä Node.js:sää<br/>
                    Sivun tarkoituksena on antaa ymmärrystä koodaus taidoistani 
                    ja kertoa Työnantajille itestäni.</p>
                <div className='vasenimg'>
                    <img id='node' src={node} alt='node'/>  
                    <img id='react' src={reactimg} alt='react'/>  
                    <img id='mongo' src={mongo} alt='mongo'/>    
                </div>
                </div>     
                <div id='oikea-content'>
                 <img id='code' src={code} alt='code'/>    
                </div> 
            </div>   
            </div>
        </div>
    );
}

export { Koti }