import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const IntroLoader = ({ onComplete }) => {
  const comp = useRef(null);
  const leftText = useRef(null);
  const rightText = useRef(null);
  const underline = useRef(null);
  const curtain = useRef(null);
  
  // State untuk deteksi mobile agar responsive tanpa CSS external
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });

      // 1. Reset awal
      gsap.set([leftText.current, rightText.current], { opacity: 0 });
      gsap.set(underline.current, { scaleX: 0 });

      // 2. Animasi Kata Datang (Bersebrangan)
      tl.fromTo(leftText.current, 
        { x: isMobile ? -50 : -150, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.inOut" }
      )
      .fromTo(rightText.current, 
        { x: isMobile ? 50 : 150, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.inOut" },
        "<" 
      )
      
      // 3. Garis Bawah
      .to(underline.current, {
        scaleX: 1,
        duration: 0.8,
        ease: "power2.inOut"
      })

      // 4. Tirai Naik
      .to(curtain.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "expo.inOut",
        delay: 0.5 
      });

    }, comp);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, [onComplete, isMobile]);

  // --- STYLING OBJECTS (Isolated) ---
  
  const curtainStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'white',
    zIndex: 99999, // Sangat tinggi agar tidak tertutup apapun
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    pointerEvents: 'all'
  };

  const textContainerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isMobile ? '0px' : '20px',
    position: 'relative',
    paddingBottom: '15px'
  };

  const baseTextStyle = {
    fontSize: isMobile ? '2.2rem' : '4rem',
    margin: 0,
    fontWeight: '800',
    color: '#1a1a1a',
    fontFamily: 'sans-serif', // Mengunci font agar tidak ikut dashboard
    lineHeight: '1',
    whiteSpace: 'nowrap'
  };

  const leftSpecific = {
    alignSelf: isMobile ? 'flex-start' : 'center',
    transform: isMobile ? 'translateX(-15px)' : 'none'
  };

  const rightSpecific = {
    alignSelf: isMobile ? 'flex-end' : 'center',
    transform: isMobile ? 'translateX(15px)' : 'none',
    marginTop: isMobile ? '-10px' : '0px'
  };

  const underlineStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: isMobile ? '4px' : '6px',
    backgroundColor: 'black',
    transformOrigin: 'center'
  };

  return (
    <div ref={curtain} style={curtainStyle}>
      <div ref={comp} style={textContainerStyle}>
        <span ref={leftText} style={{ ...baseTextStyle, ...leftSpecific }}>
          MATHEMATICS
        </span>
        <span ref={rightText} style={{ ...baseTextStyle, ...rightSpecific }}>
          INDUCTION
        </span>
        
        <div ref={underline} style={underlineStyle} />
      </div>
    </div>
  );
};

export default IntroLoader;