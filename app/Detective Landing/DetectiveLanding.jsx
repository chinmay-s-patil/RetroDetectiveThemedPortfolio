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

  const tacks = [
    { id: 'notes', x: 67, y: 14 },
    { id: 'education', x: 54, y: 8 },
    { id: 'tools', x: 15, y: 28 },
    { id: 'interests', x: 82, y: 32 },
    { id: 'aerospace', x: 18, y: 56 },
    { id: 'contact', x: 85, y: 60 },
    { id: 'evidence', x: 34, y: 70 },
    { id: 'status', x: 65, y: 88 }
  ]

  const connections = [
    { from: 'notes', to: 'education' },
    { from: 'education', to: 'interests' },
    { from: 'interests', to: 'contact' },
    { from: 'tools', to: 'aerospace' },
    { from: 'aerospace', to: 'evidence' },
    { from: 'evidence', to: 'status' },
    { from: 'notes', to: 'tools' },
    { from: 'contact', to: 'status' }
  ]

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

        .red-string-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 6;
        }

        .red-string {
          stroke: #d32f2f;
          stroke-width: 2.5;
          fill: none;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
        }

        .location-marker {
          fill: #d32f2f;
          stroke: #fff;
          stroke-width: 2;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.6));
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
        }

        .pin {
          width: clamp(12px, 2vw, 16px);
          height: clamp(12px, 2vw, 16px);
          background: radial-gradient(circle at 35% 25%, #ffd700 0%, #c4a000 45%, #8b6914 100%);
          border-radius: 50%;
          box-shadow: 0 4px 8px rgba(0,0,0,0.7), inset 0 -2px 3px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.3);
          position: absolute;
          z-index: 60;
        }

        .pin:after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, #333, #000);
          border-radius: 50%;
          box-shadow: 0 1px 2px rgba(255,255,255,0.4);
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
          width: clamp(180px, 25vw, 260px);
          height: clamp(130px, 20vw, 190px);
          z-index: 40;
          transform: rotate(-8deg);
        }

        /* Google Map */
        .map-container {
          position: absolute;
          left: clamp(30%, 40vw, 42%);
          bottom: clamp(8%, 10vh, 10%);
          width: clamp(280px, 40vw, 420px);
          height: clamp(180px, 28vw, 280px);
          transform: rotate(-2deg);
          z-index: 35;
        }

        /* Field Notes */
        .field-notes {
          position: absolute;
          right: clamp(5%, 10vw, 10%);
          top: clamp(10%, 14vh, 14%);
          width: clamp(200px, 30vw, 300px);
          padding: clamp(12px, 2vw, 18px);
          background: linear-gradient(135deg, #fbf7ef 0%, #efe1c7 100%);
          transform: rotate(4deg);
          font-family: 'Special Elite', monospace;
          font-size: clamp(11px, 1.5vw, 13px);
          line-height: 1.7;
          color: #2a2a2a;
          box-shadow: 0 12px 36px rgba(0,0,0,0.55);
          z-index: 42;
          border: 1px solid rgba(180,120,70,0.35);
        }

        /* Panoramic Photo */
        .panoramic-container {
          position: absolute;
          left: clamp(28%, 34vw, 34%);
          top: clamp(32%, 36vh, 36%);
          width: clamp(320px, 45vw, 460px);
          height: clamp(100px, 15vw, 150px);
          transform: rotate(3deg);
          z-index: 45;
        }

        /* Evidence Tag */
        .evidence-tag {
          position: absolute;
          left: clamp(15%, 22vw, 22%);
          top: clamp(72%, 80vh, 80%);
          padding: clamp(10px, 2vw, 14px) clamp(16px, 3vw, 22px);
          background: #f6e4c1;
          border: 2px solid #8b4513;
          transform: rotate(-6deg);
          font-family: 'Special Elite', monospace;
          font-size: clamp(11px, 1.5vw, 13px);
          font-weight: 700;
          color: #241b14;
          box-shadow: 0 8px 26px rgba(0,0,0,0.6);
          z-index: 50;
          border-radius: 6px;
        }

        /* Sticky Notes */
        .sticky-aerospace {
          position: absolute;
          left: clamp(5%, 10vw, 10%);
          top: clamp(50%, 56vh, 56%);
          width: clamp(120px, 20vw, 160px);
          height: clamp(120px, 20vw, 160px);
          background: linear-gradient(135deg, #fff7b9 0%, #ffdf6b 100%);
          transform: rotate(-13deg);
          font-size: clamp(11px, 1.5vw, 14px);
          color: #211a14;
          z-index: 48;
        }

        .sticky-contact {
          position: absolute;
          right: clamp(5%, 12vw, 12%);
          top: clamp(54%, 60vh, 60%);
          width: clamp(180px, 28vw, 250px);
          height: clamp(60px, 10vw, 75px);
          background: linear-gradient(135deg, #cfefff 0%, #7fc7ff 100%);
          transform: rotate(6deg);
          font-size: clamp(11px, 1.5vw, 13px);
          color: #111111;
          z-index: 48;
        }

        .sticky-tools {
          position: absolute;
          left: clamp(4%, 8vw, 8%);
          top: clamp(32%, 36vh, 36%);
          width: clamp(100px, 18vw, 140px);
          height: clamp(100px, 18vw, 140px);
          background: linear-gradient(135deg, #ffcdd2 0%, #ef9a9a 100%);
          transform: rotate(8deg);
          font-size: clamp(10px, 1.4vw, 12px);
          color: #1a1a1a;
          z-index: 48;
        }

        .sticky-interests {
          position: absolute;
          right: clamp(25%, 30vw, 30%);
          top: clamp(18%, 22vh, 22%);
          width: clamp(110px, 18vw, 145px);
          height: clamp(110px, 18vw, 145px);
          background: linear-gradient(135deg, #c8e6c9 0%, #81c784 100%);
          transform: rotate(-10deg);
          font-size: clamp(10px, 1.4vw, 12px);
          color: #1a1a1a;
          z-index: 48;
        }

        .sticky-education {
          position: absolute;
          left: clamp(40%, 46vw, 46%);
          top: clamp(6%, 8vh, 8%);
          width: clamp(120px, 20vw, 155px);
          height: clamp(90px, 15vw, 120px);
          background: linear-gradient(135deg, #f8bbd0 0%, #f48fb1 100%);
          transform: rotate(3deg);
          font-size: clamp(10px, 1.4vw, 12px);
          color: #1a1a1a;
          z-index: 48;
        }

        .sticky-status {
          position: absolute;
          right: clamp(15%, 20vw, 20%);
          bottom: clamp(6%, 8vh, 8%);
          width: clamp(100px, 16vw, 130px);
          height: clamp(85px, 14vw, 110px);
          background: linear-gradient(135deg, #ffe0b2 0%, #ffcc80 100%);
          transform: rotate(-7deg);
          font-size: clamp(9px, 1.3vw, 11px);
          color: #1a1a1a;
          z-index: 48;
        }

        .button-container {
          position: absolute;
          bottom: clamp(20px, 5vh, 40px);
          right: clamp(30px, 5vw, 60px);
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
            width: 140px;
            height: 100px;
            left: 5%;
            top: 5%;
          }

          .map-container {
            width: 200px;
            height: 130px;
            left: 50%;
            transform: translateX(-50%) rotate(-2deg);
            bottom: 10%;
          }

          .field-notes {
            width: 180px;
            right: 5%;
            top: 8%;
            font-size: 10px;
            padding: 10px;
          }

          .panoramic-container {
            width: 250px;
            height: 80px;
            left: 50%;
            transform: translateX(-50%) rotate(3deg);
            top: 30%;
          }

          .evidence-tag {
            left: 10%;
            top: auto;
            bottom: 25%;
            font-size: 10px;
            padding: 8px 14px;
          }

          /* Stack sticky notes more vertically on mobile */
          .sticky-aerospace {
            width: 100px;
            height: 100px;
            left: 5%;
            top: 48%;
          }

          .sticky-contact {
            width: 140px;
            height: 55px;
            right: 5%;
            top: 52%;
          }

          .sticky-tools {
            width: 85px;
            height: 85px;
            left: 5%;
            top: 32%;
          }

          .sticky-interests {
            width: 95px;
            height: 95px;
            right: 5%;
            top: 18%;
          }

          .sticky-education {
            width: 110px;
            height: 85px;
            left: 50%;
            transform: translateX(-50%) rotate(3deg);
            top: 5%;
          }

          .sticky-status {
            width: 90px;
            height: 75px;
            right: 5%;
            bottom: 12%;
          }

          .button-container {
            bottom: 15px;
            right: 15px;
          }

          /* Hide red strings on mobile for cleaner look */
          .red-string-layer {
            display: none;
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

          {/* Red string connections */}
          <svg className="red-string-layer">
            {connections.map((conn, idx) => {
              const from = tacks.find(t => t.id === conn.from)
              const to = tacks.find(t => t.id === conn.to)
              if (!from || !to) return null
              
              return (
                <line
                  key={idx}
                  x1={`${from.x}%`}
                  y1={`${from.y}%`}
                  x2={`${to.x}%`}
                  y2={`${to.y}%`}
                  className="red-string"
                />
              )
            })}
          </svg>

          {/* Google Map */}
          <div className="map-container">
            <div className="tape" style={{ top: -8, left: -8, transform: 'rotate(-45deg)', width: 50, height: 18 }} />
            <div className="tape" style={{ top: -8, right: -8, transform: 'rotate(45deg)', width: 50, height: 18 }} />
            <div className="tape" style={{ bottom: -8, left: -8, transform: 'rotate(45deg)', width: 50, height: 18 }} />
            <div className="tape" style={{ bottom: -8, right: -8, transform: 'rotate(-45deg)', width: 50, height: 18 }} />
            
            <div style={{ width: '100%', height: '100%', border: '3px solid #e0e0e0', boxShadow: '0 8px 24px rgba(0,0,0,0.5)', overflow: 'hidden', position: 'relative' }}>
              <img src="/Assets/GMap.png" alt="Munich Map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                <circle cx="55%" cy="18%" r="6" className="location-marker"/>
                <circle cx="48%" cy="52%" r="6" className="location-marker"/>
                <circle cx="65%" cy="72%" r="6" className="location-marker"/>
                <circle cx="72%" cy="55%" r="6" className="location-marker"/>
                <circle cx="32%" cy="65%" r="6" className="location-marker"/>
                <circle cx="72%" cy="85%" r="6" className="location-marker"/>
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

          {/* Field Notes */}
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
            <div className="pin" style={{ left: '50%', top: -12, transform: 'translateX(-50%)' }} />
          </div>

          {/* Panoramic Photo */}
          <div className="panoramic-container">
            <div className="tape" style={{ top: -12, left: 96, transform: 'rotate(-2deg)', width: 70, height: 20 }} />
            <div className="tape" style={{ top: -8, right: 84, transform: 'rotate(6deg)', width: 70, height: 20 }} />
            <div className="polaroid" style={{ width: '100%', height: '100%' }}>
              <img src="/Me2-3x8.jpg" alt="Panoramic" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.15) contrast(1.04)' }} />
            </div>
          </div>

          {/* Evidence Tag */}
          <div className="evidence-tag">
            EVIDENCE #047
            <div style={{ fontSize: 11, marginTop: 6, fontWeight: 400 }}>STATUS: ACTIVE INVESTIGATION</div>
            <div className="pin" style={{ left: '50%', top: -10, transform: 'translateX(-50%)' }} />
          </div>

          {/* Sticky Note 1 - Aerospace */}
          <div className="sticky sticky-aerospace">
            <div style={{ fontSize: 16, marginBottom: 8, textDecoration: 'underline' }}>AEROSPACE</div>
            <div style={{ fontSize: 12, lineHeight: 1.6 }}>
              ✓ CFD simulations<br />
              ✓ Turbulence modeling<br />
              ✓ Propeller dynamics<br />
              ✓ Thermal & systems
            </div>
            <div className="pin" style={{ left: '50%', top: -8, transform: 'translateX(-50%)' }} />
          </div>

          {/* Sticky Note 2 - Contact */}
          <div className="sticky sticky-contact">
            <div style={{ fontSize: 15, marginBottom: 8, textDecoration: 'underline' }}>CONTACT</div>
            <div style={{ fontSize: 12, lineHeight: 1.5 }}>
              patil.chinmay3031@gmail.com
            </div>
            <div className="pin" style={{ left: '50%', top: -8, transform: 'translateX(-50%)' }} />
          </div>

          {/* Sticky Note 3 - Tools */}
          <div className="sticky sticky-tools">
            <div style={{ fontSize: 14, marginBottom: 6, textDecoration: 'underline' }}>TOOLS</div>
            <div style={{ fontSize: 11, lineHeight: 1.5 }}>
              • OpenFOAM<br />
              • ParaView<br />
              • Python<br />
              • Git
            </div>
            <div className="pin" style={{ left: '50%', top: -8, transform: 'translateX(-50%)' }} />
          </div>

          {/* Sticky Note 4 - Interests */}
          <div className="sticky sticky-interests">
            <div style={{ fontSize: 14, marginBottom: 6, textDecoration: 'underline' }}>INTERESTS</div>
            <div style={{ fontSize: 11, lineHeight: 1.5 }}>
              • Flow visualization<br />
              • Automation<br />
              • Web dev<br />
              • Interactive tools
            </div>
            <div className="pin" style={{ left: '50%', top: -8, transform: 'translateX(-50%)' }} />
          </div>

          {/* Sticky Note 5 - Education */}
          <div className="sticky sticky-education">
            <div style={{ fontSize: 14, marginBottom: 6, textDecoration: 'underline' }}>EDUCATION</div>
            <div style={{ fontSize: 11, lineHeight: 1.5 }}>
              M.Sc. Aerospace<br />
              Engineering<br />
              TU Munich
            </div>
            <div className="pin" style={{ left: '50%', top: -8, transform: 'translateX(-50%)' }} />
          </div>

          {/* Sticky Note 6 - Status */}
          <div className="sticky sticky-status">
            <div style={{ fontSize: 13, marginBottom: 6, textDecoration: 'underline' }}>STATUS</div>  
            <div style={{ fontSize: 10, lineHeight: 1.4 }}>
              Currently seeking<br />
              opportunities in<br />
              CFD & simulation
            </div>
            <div className="pin" style={{ left: '50%', top: -8, transform: 'translateX(-50%)' }} />
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