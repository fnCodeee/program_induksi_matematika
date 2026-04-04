import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const IntroLoader = ({ onComplete }) => {
  const comp = useRef(null);
  const leftText = useRef(null);
  const rightText = useRef(null);
  const underline = useRef(null);
  const curtain = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });

      // 1. Reset posisi awal
      gsap.set([leftText.current, rightText.current], { opacity: 0 });
      gsap.set(underline.current, { scaleX: 0 });

      // 2. Animasi Kata Datang Menyamping (Bersebrangan)
      tl.fromTo(leftText.current, 
        { x: -100, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
      )
      .fromTo(rightText.current, 
        { x: 100, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
        "<" // Dimulai bersamaan dengan animasi sebelumnya
      )
      
      // 3. Muncul Garis Bawah (Scale dari tengah)
      .to(underline.current, {
        scaleX: 1,
        duration: 0.8,
        ease: "power2.inOut"
      })

      // 4. Tirai Putih Naik (Ease In Out)
      .to(curtain.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
        delay: 0.5 // Jeda sebentar sebelum tirai naik
      });

    }, comp);

    return () => ctx.revert();
  }, [onComplete]);

  // Styling Inline sederhana (Bisa dipindah ke CSS)
  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'white',
    zIndex: 999,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  };

  return (
    <div ref={curtain} style={containerStyle}>
      <div style={{ display: 'flex', gap: '15px', overflow: 'hidden', paddingBottom: '10px', position: 'relative' }}>
        <h1 ref={leftText} style={{ fontSize: '3rem', margin: 0, fontWeight: 'bold' }}>MATHEMATICS</h1>
        <h1 ref={rightText} style={{ fontSize: '3rem', margin: 0, fontWeight: 'bold' }}>INDECTION</h1>
        
        {/* Underline Element */}
        <div 
          ref={underline} 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '4px',
            backgroundColor: 'black',
            transformOrigin: 'center'
          }} 
        />
      </div>
    </div>
  );
};

export default IntroLoader;