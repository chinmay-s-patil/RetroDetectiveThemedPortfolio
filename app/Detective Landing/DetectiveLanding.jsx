'use client'

import React, { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'  // ADD THIS

export default function DetectiveLanding() {
  const containerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()  // ADD THIS

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleLookAround = () => {
    router.push('/hub')  // CHANGE THIS - Navigate to hub page
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

        .portrait-container {
          position: absolute;
          left: clamp(1%, 2vw, 5%);
          top: clamp(8%, 10vh, 10%);
          width: clamp(260px, 35vw, 380px);
          height: clamp(190px, 28vw, 280px);
          z-index: 40;
          transform: rotate(-8deg);
        }

        .map-container {
          position: absolute;
          left: 52%;
          top: 42%;
          width: clamp(400px, 45vw, 820px);
          height: clamp(260px, 32vw, 620px);
          transform: translate(-50%, -50%) rotate(-2deg);
          z-index: 35;
        }

        .field-notes {
          position: absolute;
          left: clamp(4%, 4vw, 11%);
          bottom: clamp(7%, 10vh, 11%);
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
        }

        .panoramic-container {
          position: absolute;
          right: clamp(1%, 1vw, 5%);
          top: clamp(4%, 2vh, 10%);
          width: clamp(380px, 48vw, 580px);
          height: clamp(130px, 18vw, 200px);
          transform: rotate(3deg);
          z-index: 45;
        }

        .handprint-container {
          position: absolute;
          right: clamp(5%, 8vw, 12%);
          bottom: clamp(15%, 20vh, 22%);
          width: clamp(140px, 22vw, 200px);
          height: clamp(140px, 22vw, 200px);
          transform: rotate(-15deg);
          z-index: 33;
        }

        .sticky-contact {
          position: absolute;
          right: clamp(5%, 22vw, 25%);
          bottom: clamp(10%, 5vh, 25%);
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
          right: clamp(4%, 12vw, 8%);
          top: clamp(28%, 42vh, 32%);
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
          top: clamp(28%, 32vh, 35%);
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
          right: clamp(33%, 43vw, 47%);
          bottom: clamp(10%, 7vh, 12%);
          width: clamp(110px, 18vw, 140px);
          height: clamp(95px, 15vw, 120px);
          background: linear-gradient(135deg, #ffe0b2 0%, #ffcc80 100%);
          transform: rotate(6deg);
          font-size: clamp(9px, 1.3vw, 11px);
          color: #1a1a1a;
          z-index: 48;
        }

        .button-container {
          position: fixed;  /* Changed from absolute */
          bottom: 30px;    /* OFF the page - hidden below */
          left: 50%;
          transform: translateX(-50%);
          z-index: 160;
          transition: bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

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
            width: 280px;
            height: 100px;
            right: 5%;
            top: 8%;
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
            top: 30%;
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

          {/* Handprint with frame */}
          <div className="handprint-container">
            <div style={{ 
              width: '100%', 
              height: '100%', 
              border: '8px solid #3d2817',
              borderRadius: '8px',
              padding: '10px',
              background: 'linear-gradient(135deg, #f6efe2 0%, #e8dcc8 100%)',
              boxShadow: '0 12px 36px rgba(0,0,0,0.6), inset 0 0 20px rgba(0,0,0,0.08)',
              position: 'relative'
            }}>
              <img 
                src="./Assets/handPrint.png" 
                alt="Handprint" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain',
                  opacity: 0.7,
                  filter: 'sepia(0.3) contrast(1.1)'
                }} 
              />
            </div>
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

          {/* Panoramic Photo - Bigger and at top */}
          <div className="panoramic-container">
            <div className="tape" style={{ top: -12, left: 80, transform: 'rotate(-2deg)', width: 80, height: 22 }} />
            <div className="tape" style={{ top: -8, right: 70, transform: 'rotate(6deg)', width: 80, height: 22 }} />
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