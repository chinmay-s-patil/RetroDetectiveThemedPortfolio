'use client'

import React, { useRef, useState, useEffect } from 'react'

export default function DetectiveLanding() {
  const containerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleLookAround = () => {
    console.log('Navigating to hub environment...')
  }

  return (
    <div className="detective-landing">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

        .detective-landing {
          width: 100vw;
          height: 100vh;
          background: #1a1410;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: "Special Elite", 'Permanent Marker', system-ui, sans-serif;
          color: #1b1b1b;
        }

        .detective-container {
          width: 95vw;
          max-width: 1600px;
          height: 90vh;
          max-height: 900px;
          position: relative;
        }

        .background-layer {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 30%, #3a2b20 0%, #221a12 40%, #0f0d0a 100%);
          z-index: 1;
        }

        .map-background {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.15;
          z-index: 0;
        }

        .cork-board {
          position: relative;
          width: 100%;
          height: 100%;
          background: #c4a574;
          border-radius: 10px;
          padding: clamp(1rem, 3vw, 2.6rem);
          border: clamp(10px, 2vw, 20px) solid #3d2817;
          box-shadow: 0 28px 80px rgba(0,0,0,0.85), inset 0 0 50px rgba(0,0,0,0.2);
          overflow: hidden;
          z-index: 10;
        }

        .vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.4) 100%);
          pointer-events: none;
          z-index: 5;
        }

        .polaroid {
          border: 10px solid #f6efe2;
          box-shadow: 0 14px 40px rgba(0,0,0,0.6), inset 0 0 18px rgba(0,0,0,0.06);
          transition: transform 220ms cubic-bezier(.2,.8,.2,1);
          border-radius: 6px;
          overflow: hidden;
        }

        .tape {
          background: linear-gradient(90deg, rgba(245,238,210,0.85), rgba(230,218,180,0.85));
          box-shadow: 0 4px 8px rgba(0,0,0,0.35);
          border-radius: 2px;
          opacity: 0.95;
          position: absolute;
          z-index: 30;
          filter: saturate(0.95);
        }

        .tape:after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, rgba(0,0,0,0.03), transparent 15%, rgba(255,255,255,0.05) 55%, transparent 85%);
          mix-blend-mode: multiply;
        }

        .sticky {
          box-shadow: 0 10px 30px rgba(0,0,0,0.45);
          border-radius: 6px;
          transform-origin: center;
          transition: transform 200ms;
          padding: clamp(10px, 2vw, 16px);
          font-family: 'Permanent Marker', cursive;
          position: relative;
        }

        /* Perforated top edge for sticky notes */
        .sticky-perforated::before {
          content: '';
          position: absolute;
          top: -4px;
          left: 5%;
          right: 5%;
          height: 6px;
          background: repeating-linear-gradient(
            90deg,
            currentColor 0px,
            currentColor 2px,
            transparent 2px,
            transparent 8px
          );
          opacity: 0.3;
        }

        /* Spiral binding holes on left */
        .sticky-spiral::before {
          content: '';
          position: absolute;
          left: -3px;
          top: 15%;
          bottom: 15%;
          width: 6px;
          background: repeating-linear-gradient(
            180deg,
            currentColor 0px,
            currentColor 3px,
            transparent 3px,
            transparent 12px
          );
          opacity: 0.3;
          border-radius: 3px;
        }

        .push-pin {
          width: clamp(14px, 2.2vw, 18px);
          height: clamp(14px, 2.2vw, 18px);
          background: radial-gradient(circle at 30% 30%, #ff6b6b 0%, #c92a2a 50%, #8b1a1a 100%);
          border-radius: 50%;
          box-shadow: 0 5px 10px rgba(0,0,0,0.7), inset 0 -2px 4px rgba(0,0,0,0.5), inset 1px 2px 3px rgba(255,255,255,0.3);
          position: absolute;
          z-index: 60;
        }

        .push-pin:after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 5px;
          height: 5px;
          background: radial-gradient(circle, #1a1a1a, #000);
          border-radius: 50%;
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.2);
        }

        .look-btn {
          font-family: Special Elite, monospace;
          font-size: clamp(14px, 2vw, 18px);
          background: linear-gradient(180deg, rgba(255,255,255,0.94), rgba(245,240,230,0.92));
          color: #281b12;
          padding: clamp(10px, 2vw, 12px) clamp(20px, 3vw, 26px);
          border-radius: 8px;
          border: 2px solid rgba(139,69,19,0.9);
          box-shadow: 0 10px 28px rgba(0,0,0,0.45);
          transition: transform 160ms, box-shadow 160ms;
          cursor: pointer;
          user-select: none;
        }

        .look-btn:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.5);
        }

        /* Portrait Photo */
        .portrait-container {
          position: absolute;
          left: clamp(5%, 10vw, 12%);
          top: clamp(8%, 10vh, 10%);
          width: clamp(260px, 35vw, 380px);
          height: clamp(190px, 28vw, 280px);
          z-index: 40;
          transform: rotate(-8deg);
        }

        /* Google Map */
        .map-container {
          position: absolute;
          left: 52%;
          top: 42%;
          width: clamp(400px, 45vw, 620px);
          height: clamp(260px, 32vw, 420px);
          transform: translate(-50%, -50%) rotate(-2deg);
          z-index: 35;
        }

        /* Field Notes - with torn edges */
        .field-notes {
          position: absolute;
          left: clamp(5%, 8vw, 10%);
          bottom: clamp(8%, 12vh, 15%);
          width: clamp(220px, 32vw, 320px);
          padding: clamp(14px, 2vw, 20px);
          background: linear-gradient(135deg, #fbf7ef 0%, #efe1c7 100%);
          transform: rotate(-3deg);
          font-family: 'Special Elite', monospace;
          font-size: clamp(11px, 1.5vw, 13px);
          line-height: 1.7;
          color: #2a2a2a;
          box-shadow: 0 12px 36px rgba(0,0,0,0.55);
          z-index: 42;
          clip-path: polygon(
            0% 2%, 1% 0%, 2% 1.5%, 3% 0.5%, 4% 2%, 5% 0%, 6% 1%, 7% 0.5%, 8% 1.5%, 9% 0%, 
            10% 2%, 11% 0.5%, 12% 1%, 13% 0%, 14% 1.5%, 15% 0.5%, 16% 2%, 17% 0%, 18% 1%, 
            19% 0.5%, 20% 1.5%, 21% 0%, 22% 2%, 23% 0.5%, 24% 1%, 25% 0%, 26% 1.5%, 27% 0.5%, 
            28% 2%, 29% 0%, 30% 1%, 31% 0.5%, 32% 1.5%, 33% 0%, 34% 2%, 35% 0.5%, 36% 1%, 
            37% 0%, 38% 1.5%, 39% 0.5%, 40% 2%, 41% 0%, 42% 1%, 43% 0.5%, 44% 1.5%, 45% 0%, 
            46% 2%, 47% 0.5%, 48% 1%, 49% 0%, 50% 1.5%, 51% 0.5%, 52% 2%, 53% 0%, 54% 1%, 
            55% 0.5%, 56% 1.5%, 57% 0%, 58% 2%, 59% 0.5%, 60% 1%, 61% 0%, 62% 1.5%, 63% 0.5%, 
            64% 2%, 65% 0%, 66% 1%, 67% 0.5%, 68% 1.5%, 69% 0%, 70% 2%, 71% 0.5%, 72% 1%, 
            73% 0%, 74% 1.5%, 75% 0.5%, 76% 2%, 77% 0%, 78% 1%, 79% 0.5%, 80% 1.5%, 81% 0%, 
            82% 2%, 83% 0.5%, 84% 1%, 85% 0%, 86% 1.5%, 87% 0.5%, 88% 2%, 89% 0%, 90% 1%, 
            91% 0.5%, 92% 1.5%, 93% 0%, 94% 2%, 95% 0.5%, 96% 1%, 97% 0%, 98% 1.5%, 99% 0.5%, 100% 2%,
            100% 98%, 99% 100%, 98% 98.5%, 97% 99.5%, 96% 98%, 95% 100%, 94% 99%, 93% 99.5%, 92% 98.5%, 91% 100%, 
            90% 98%, 89% 99.5%, 88% 99%, 87% 100%, 86% 98.5%, 85% 99.5%, 84% 98%, 83% 100%, 82% 99%, 
            81% 99.5%, 80% 98.5%, 79% 100%, 78% 98%, 77% 99.5%, 76% 99%, 75% 100%, 74% 98.5%, 73% 99.5%, 
            72% 98%, 71% 100%, 70% 99%, 69% 99.5%, 68% 98.5%, 67% 100%, 66% 98%, 65% 99.5%, 64% 99%, 
            63% 100%, 62% 98.5%, 61% 99.5%, 60% 98%, 59% 100%, 58% 99%, 57% 99.5%, 56% 98.5%, 55% 100%, 
            54% 98%, 53% 99.5%, 52% 99%, 51% 100%, 50% 98.5%, 49% 99.5%, 48% 98%, 47% 100%, 46% 99%, 
            45% 99.5%, 44% 98.5%, 43% 100%, 42% 98%, 41% 99.5%, 40% 99%, 39% 100%, 38% 98.5%, 37% 99.5%, 
            36% 98%, 35% 100%, 34% 99%, 33% 99.5%, 32% 98.5%, 31% 100%, 30% 98%, 29% 99.5%, 28% 99%, 
            27% 100%, 26% 98.5%, 25% 99.5%, 24% 98%, 23% 100%, 22% 99%, 21% 99.5%, 20% 98.5%, 19% 100%, 
            18% 98%, 17% 99.5%, 16% 99%, 15% 100%, 14% 98.5%, 13% 99.5%, 12% 98%, 11% 100%, 10% 99%, 
            9% 99.5%, 8% 98.5%, 7% 100%, 6% 98%, 5% 99.5%, 4% 99%, 3% 100%, 2% 98.5%, 1% 99.5%, 0% 98%
          );
        }

        /* Panoramic Photo */
        .panoramic-container {
          position: absolute;
          right: clamp(8%, 12vw, 15%);
          top: clamp(18%, 22vh, 24%);
          width: clamp(280px, 38vw, 420px);
          height: clamp(90px, 13vw, 140px);
          transform: rotate(4deg);
          z-index: 45;
        }

        /* Handprint */
        .handprint-container {
          position: absolute;
          right: clamp(5%, 8vw, 12%);
          bottom: clamp(15%, 20vh, 22%);
          width: clamp(140px, 22vw, 200px);
          height: clamp(140px, 22vw, 200px);
          transform: rotate(-15deg);
          opacity: 0.35;
          z-index: 33;
          filter: sepia(0.4) contrast(1.2);
        }

        .sticky-contact {
          position: absolute;
          right: clamp(5%, 10vw, 12%);
          bottom: clamp(8%, 12vh, 15%);
          width: clamp(180px, 28vw, 250px);
          height: clamp(60px, 10vw, 75px);
          background: linear-gradient(135deg, #cfefff 0%, #7fc7ff 100%);
          transform: rotate(3deg);
          font-size: clamp(11px, 1.5vw, 13px);
          color: #111111;
          z-index: 48;
        }

        .sticky-tools {
          position: absolute;
          left: clamp(8%, 12vw, 16%);
          top: clamp(48%, 52vh, 54%);
          width: clamp(110px, 19vw, 150px);
          height: clamp(110px, 19vw, 150px);
          background: linear-gradient(135deg, #ffcdd2 0%, #ef9a9a 100%);
          transform: rotate(-8deg);
          font-size: clamp(10px, 1.4vw, 12px);
          color: #1a1a1a;
          z-index: 48;
        }

        .sticky-interests {
          position: absolute;
          right: clamp(8%, 12vw, 14%);
          top: clamp(6%, 10vh, 12%);
          width: clamp(120px, 20vw, 160px);
          height: clamp(120px, 20vw, 160px);
          background: linear-gradient(135deg, #c8e6c9 0%, #81c784 100%);
          transform: rotate(7deg);
          font-size: clamp(10px, 1.4vw, 12px);
          color: #1a1a1a;
          z-index: 48;
        }

        .sticky-education {
          position: absolute;
          left: clamp(38%, 44vw, 46%);
          top: clamp(6%, 10vh, 12%);
          width: clamp(130px, 22vw, 170px);
          height: clamp(100px, 16vw, 130px);
          background: linear-gradient(135deg, #f8bbd0 0%, #f48fb1 100%);
          transform: rotate(-5deg);
          font-size: clamp(10px, 1.4vw, 12px);
          color: #1a1a1a;
          z-index: 48;
        }

        .sticky-status {
          position: absolute;
          right: clamp(32%, 38vw, 42%);
          bottom: clamp(10%, 14vh, 16%);
          width: clamp(110px, 18vw, 140px);
          height: clamp(95px, 15vw, 120px);
          background: linear-gradient(135deg, #ffe0b2 0%, #ffcc80 100%);
          transform: rotate(6deg);
          font-size: clamp(9px, 1.3vw, 11px);
          color: #1a1a1a;
          z-index: 48;
        }

        .button-container {
          position: absolute;
          bottom: clamp(10px, 3vh, 20px);
          right: clamp(50%, 5vw, 60px);
          z-index: 160;
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
          .detective-container {
            width: 98vw;
            height: 95vh;
          }

          .cork-board {
            padding: 1rem;
          }

          .portrait-container {
            width: 160px;
            height: 120px;
            left: 5%;
            top: 5%;
          }

          .map-container {
            width: 240px;
            height: 160px;
            left: 50%;
            top: 45%;
          }

          .field-notes {
            width: 180px;
            left: 5%;
            bottom: 10%;
            font-size: 10px;
            padding: 12px;
          }

          .panoramic-container {
            width: 200px;
            height: 70px;
            right: 5%;
            top: 20%;
          }

          .handprint-container {
            width: 100px;
            height: 100px;
            right: 5%;
            bottom: 18%;
          }

          .sticky-contact {
            width: 140px;
            height: 55px;
            right: 5%;
            bottom: 12%;
          }

          .sticky-tools {
            width: 85px;
            height: 85px;
            left: 8%;
            top: 50%;
          }

          .sticky-interests {
            width: 95px;
            height: 95px;
            right: 5%;
            top: 8%;
          }

          .sticky-education {
            width: 110px;
            height: 85px;
            left: 42%;
            top: 8%;
          }

          .sticky-status {
            width: 90px;
            height: 75px;
            right: 35%;
            bottom: 12%;
          }

          .button-container {
            bottom: 15px;
            right: 15px;
          }
        }

        @media (max-width: 480px) {
          .field-notes ul {
            font-size: 9px;
          }

          .sticky div:first-child {
            font-size: 11px !important;
          }

          .sticky div:last-child {
            font-size: 9px !important;
          }
        }
      `}} />

      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <pattern id="corkTexture" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="#c4a574"/>
            <circle cx="10" cy="15" r="1.5" fill="#a68a5a" opacity="0.6"/>
            <circle cx="45" cy="8" r="1" fill="#8b7355" opacity="0.4"/>
            <circle cx="78" cy="25" r="1.2" fill="#a68a5a" opacity="0.5"/>
            <circle cx="23" cy="42" r="0.8" fill="#8b7355" opacity="0.6"/>
            <circle cx="67" cy="55" r="1.3" fill="#a68a5a" opacity="0.4"/>
            <circle cx="35" cy="72" r="1" fill="#8b7355" opacity="0.5"/>
            <circle cx="82" cy="68" r="1.1" fill="#a68a5a" opacity="0.6"/>
            <circle cx="15" cy="88" r="0.9" fill="#8b7355" opacity="0.4"/>
            <circle cx="58" cy="91" r="1.4" fill="#a68a5a" opacity="0.5"/>
            <circle cx="92" cy="45" r="1" fill="#8b7355" opacity="0.6"/>
          </pattern>
        </defs>
      </svg>

      <div className="detective-container">
        <div className="background-layer" />

        <svg className="map-background">
          <defs>
            <pattern id="mapGrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="80" y2="0" stroke="#8b7355" strokeWidth="0.5" opacity="0.3"/>
              <line x1="0" y1="0" x2="0" y2="80" stroke="#8b7355" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mapGrid)"/>
        </svg>

        <div className="cork-board">
          <div className="vignette" />

          {/* Google Map */}
          <div className="map-container">
            <div className="tape" style={{ top: -8, left: -8, transform: 'rotate(-45deg)', width: 50, height: 18 }} />
            <div className="tape" style={{ top: -8, right: -8, transform: 'rotate(45deg)', width: 50, height: 18 }} />
            <div className="tape" style={{ bottom: -8, left: -8, transform: 'rotate(45deg)', width: 50, height: 18 }} />
            <div className="tape" style={{ bottom: -8, right: -8, transform: 'rotate(-45deg)', width: 50, height: 18 }} />
            
            <div style={{ width: '100%', height: '100%', border: '3px solid #e0e0e0', boxShadow: '0 8px 24px rgba(0,0,0,0.5)', overflow: 'hidden', position: 'relative' }}>
              <img src="/Assets/GMap.png" alt="Munich Map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                <circle cx="55%" cy="18%" r="6" fill="#d32f2f" stroke="#fff" strokeWidth="2"/>
                <circle cx="48%" cy="52%" r="6" fill="#d32f2f" stroke="#fff" strokeWidth="2"/>
                <circle cx="65%" cy="72%" r="6" fill="#d32f2f" stroke="#fff" strokeWidth="2"/>
                <circle cx="72%" cy="55%" r="6" fill="#d32f2f" stroke="#fff" strokeWidth="2"/>
                <circle cx="32%" cy="65%" r="6" fill="#d32f2f" stroke="#fff" strokeWidth="2"/>
                <circle cx="72%" cy="85%" r="6" fill="#d32f2f" stroke="#fff" strokeWidth="2"/>
              </svg>
            </div>
          </div>

          {/* Portrait Photo */}
          <div className="portrait-container">
            <div className="tape" style={{ top: -10, left: 36, transform: 'rotate(-6deg)', width: 70, height: 20 }} />
            <div className="tape" style={{ top: -14, right: 36, transform: 'rotate(8deg)', width: 70, height: 20 }} />
            <div className="polaroid" style={{ width: '100%', height: '100%' }}>
              <img src="/portrait.jpg" alt="Portrait" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.22) contrast(1.08)' }} />
            </div>
          </div>

          {/* Handprint */}
          <div className="handprint-container">
            <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>
              <path d="M100,180 Q95,175 90,165 L85,145 Q83,135 85,125 L90,105 Q92,95 95,90 L100,80 Q105,75 110,75 L115,80 Q118,85 118,95 L115,110 Q113,120 115,130 L120,145 Q125,155 125,165 Q120,175 115,180 Q110,182 105,180 Q102,178 100,180 Z" fill="#8b4513" opacity="0.6"/>
              <ellipse cx="95" cy="70" rx="8" ry="25" transform="rotate(-15 95 70)" fill="#8b4513" opacity="0.6"/>
              <ellipse cx="110" cy="65" rx="8" ry="28" transform="rotate(-5 110 65)" fill="#8b4513" opacity="0.6"/>
              <ellipse cx="125" cy="70" rx="8" ry="26" transform="rotate(10 125 70)" fill="#8b4513" opacity="0.6"/>
              <ellipse cx="138" cy="80" rx="7" ry="22" transform="rotate(20 138 80)" fill="#8b4513" opacity="0.6"/>
              <ellipse cx="100" cy="120" rx="18" ry="35" transform="rotate(-10 100 120)" fill="#8b4513" opacity="0.5"/>
            </svg>
          </div>

          {/* Field Notes - Torn edges */}
          <div className="field-notes">
            <div style={{ borderBottom: '2px solid #8b4513', marginBottom: 10, paddingBottom: 8, fontFamily: 'Permanent Marker, cursive', fontSize: 18 }}>
              FIELD NOTES
            </div>
            <div style={{ fontWeight: 700 }}>Subject:</div> Chinmay Patil<br />
            <div style={{ fontWeight: 700, marginTop: 8 }}>Previous Known Location:</div> Munich<br />
            <div style={{ fontWeight: 700, marginTop: 8 }}>Specialty:</div> CFD / Aeroacoustics / Visual tools
            <div style={{ marginTop: 10, color: '#b71c1c', fontWeight: 700 }}>Key Skills:</div>
            <ul style={{ marginTop: 6 }}>
              <li>OpenFOAM & CFD pipelines</li>
              <li>Python tooling / automation</li>
              <li>Aeroacoustics analysis</li>
            </ul>
            <div className="push-pin" style={{ left: '50%', top: -10, transform: 'translateX(-50%)' }} />
          </div>

          {/* Panoramic Photo */}
          <div className="panoramic-container">
            <div className="tape" style={{ top: -12, left: 60, transform: 'rotate(-2deg)', width: 70, height: 20 }} />
            <div className="tape" style={{ top: -8, right: 50, transform: 'rotate(6deg)', width: 70, height: 20 }} />
            <div className="polaroid" style={{ width: '100%', height: '100%' }}>
              <img src="/Me2-3x8.jpg" alt="Panoramic" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.15) contrast(1.04)' }} />
            </div>
          </div>

          {/* Sticky Note - Contact (perforated top) */}
          <div className="sticky sticky-contact sticky-perforated">
            <div style={{ fontSize: 15, marginBottom: 8, textDecoration: 'underline' }}>CONTACT</div>
            <div style={{ fontSize: 12, lineHeight: 1.5 }}>
              patil.chinmay3031@gmail.com
            </div>
            <div className="push-pin" style={{ left: '50%', top: -9, transform: 'translateX(-50%)' }} />
          </div>

          {/* Sticky Note - Tools (spiral binding) */}
          <div className="sticky sticky-tools sticky-spiral">
            <div style={{ fontSize: 14, marginBottom: 6, textDecoration: 'underline' }}>TOOLS</div>
            <div style={{ fontSize: 11, lineHeight: 1.5 }}>
              • OpenFOAM<br />
              • ParaView<br />
              • Python<br />
              • Git
            </div>
            <div className="push-pin" style={{ left: '50%', top: -9, transform: 'translateX(-50%)' }} />
          </div>

          {/* Sticky Note - Interests (perforated top) */}
          <div className="sticky sticky-interests sticky-perforated">
            <div style={{ fontSize: 14, marginBottom: 6, textDecoration: 'underline' }}>INTERESTS</div>
            <div style={{ fontSize: 11, lineHeight: 1.5 }}>
              • Flow visualization<br />
              • Automation<br />
              • Web dev<br />
              • Interactive tools
            </div>
            <div className="push-pin" style={{ left: '50%', top: -9, transform: 'translateX(-50%)' }} />
          </div>

          {/* Sticky Note - Education (spiral binding) */}
          <div className="sticky sticky-education sticky-spiral">
            <div style={{ fontSize: 14, marginBottom: 6, textDecoration: 'underline' }}>EDUCATION</div>
            <div style={{ fontSize: 11, lineHeight: 1.5 }}>
              M.Sc. Aerospace<br />
              Engineering<br />
              TU Munich
            </div>
            <div className="push-pin" style={{ left: '50%', top: -9, transform: 'translateX(-50%)' }} />
          </div>

          {/* Sticky Note - Status (perforated top) */}
          <div className="sticky sticky-status sticky-perforated">
            <div style={{ fontSize: 13, marginBottom: 6, textDecoration: 'underline' }}>STATUS</div>  
            <div style={{ fontSize: 10, lineHeight: 1.4 }}>
              Currently seeking<br />
              opportunities in<br />
              CFD & simulation
            </div>
            <div className="push-pin" style={{ left: '50%', top: -9, transform: 'translateX(-50%)' }} />
          </div>
        </div>

        {/* Look Around Button */}
        <div className="button-container">
          <button onClick={handleLookAround} className="look-btn" aria-label="Look around">
            LOOK AROUND
          </button>
        </div>
      </div>
    </div>
  )
}