'use client'

import React, { useRef, useState, useEffect } from 'react'

export default function DetectiveLanding() {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(1)
  const BASE_WIDTH = 1920
  const BASE_HEIGHT = 1080

  useEffect(() => {
    const calculateScale = () => {
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const widthScale = viewportWidth / BASE_WIDTH
      const heightScale = viewportHeight / BASE_HEIGHT
      setScale(Math.min(widthScale, heightScale))
    }
    calculateScale()
    window.addEventListener('resize', calculateScale)
    return () => window.removeEventListener('resize', calculateScale)
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
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#1a1410',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <div
        ref={containerRef}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          width: BASE_WIDTH,
          height: BASE_HEIGHT,
          position: 'relative',
          fontFamily: "Special Elite, 'Permanent Marker', system-ui, sans-serif",
          color: '#1b1b1b',
          margin: '0 auto'
        }}
      >
        {/* EVERYTHING BELOW THIS POINT STAYS EXACTLY THE SAME */}
        {/* SVG Background Pattern */}
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
              <ellipse cx="30" cy="20" rx="8" ry="3" fill="#b39968" opacity="0.15"/>
              <ellipse cx="70" cy="40" rx="6" ry="4" fill="#9d8560" opacity="0.12"/>
              <ellipse cx="50" cy="65" rx="7" ry="3" fill="#b39968" opacity="0.1"/>
              <ellipse cx="85" cy="80" rx="5" ry="2" fill="#9d8560" opacity="0.13"/>
            </pattern>
            
            <pattern id="woodGrain" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect width="60" height="60" fill="#3d2817"/>
              <path d="M 0 20 Q 15 18 30 20 Q 45 22 60 20" stroke="#2d1f12" strokeWidth="0.5" fill="none" opacity="0.6"/>
              <path d="M 0 35 Q 15 33 30 35 Q 45 37 60 35" stroke="#2d1f12" strokeWidth="0.4" fill="none" opacity="0.5"/>
              <path d="M 0 48 Q 15 46 30 48 Q 45 50 60 48" stroke="#2d1f12" strokeWidth="0.6" fill="none" opacity="0.7"/>
            </pattern>
            
            <radialGradient id="vignette">
              <stop offset="0%" stopColor="#000000" stopOpacity="0"/>
              <stop offset="70%" stopColor="#000000" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#000000" stopOpacity="0.4"/>
            </radialGradient>
          </defs>
        </svg>

        {/* Map background */}
        <svg style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.15,
          zIndex: 0
        }}>
          <defs>
            <pattern id="mapGrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="80" y2="0" stroke="#8b7355" strokeWidth="0.5" opacity="0.3"/>
              <line x1="0" y1="0" x2="0" y2="80" stroke="#8b7355" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mapGrid)"/>
        </svg>

        {/* Background layer */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 30% 30%, #3a2b20 0%, #221a12 40%, #0f0d0a 100%)',
          zIndex: 1
        }} />

        {/* Fonts */}
        <style dangerouslySetInnerHTML={{__html: `
          @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

          .board {
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="url(%23corkTexture)"/></svg>');
          }

          .polaroid {
            border: 10px solid #f6efe2;
            box-shadow: 0 14px 40px rgba(0,0,0,0.6), inset 0 0 18px rgba(0,0,0,0.06);
            transition: transform 220ms cubic-bezier(.2,.8,.2,1);
          }

          .tape {
            width: 70px;
            height: 20px;
            background: linear-gradient(90deg, rgba(245,238,210,0.85), rgba(230,218,180,0.85));
            box-shadow: 0 4px 8px rgba(0,0,0,0.35);
            border-radius: 2px;
            transform-origin: center;
            opacity: 0.95;
            position: absolute;
            z-index: 30;
            filter: saturate(0.95);
          }
          .tape:after {
            content: '';
            position: absolute;
            inset: 0;
            background-image: linear-gradient( to right, rgba(0,0,0,0.03), transparent 15%, rgba(255,255,255,0.05) 55%, transparent 85% );
            mix-blend-mode: multiply;
          }

          .sticky {
            box-shadow: 0 10px 30px rgba(0,0,0,0.45);
            border-radius: 6px;
            transform-origin: center;
            transition: transform 200ms;
          }
          .sticky:hover { transform: translateY(-6px) rotate(0.5deg); }

          .pin {
            width: 16px;
            height: 16px;
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
            font-size: 18px;
            background: linear-gradient(180deg, rgba(255,255,255,0.94), rgba(245,240,230,0.92));
            color: #281b12;
            padding: 12px 26px;
            border-radius: 8px;
            border: 2px solid rgba(139,69,19,0.9);
            box-shadow: 0 10px 28px rgba(0,0,0,0.45);
            transition: transform 160ms, box-shadow 160ms;
            cursor: pointer;
            user-select: none;
          }
          .look-btn:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(0,0,0,0.5); }
          
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
        `}} />

        {/* Cork board with wood frame */}
        <div
          className="board"
          style={{
            position: 'relative',
            width: '88vw',
            height: '85vh',
            borderRadius: 10,
            padding: '2.6rem',
            border: '20px solid',
            borderImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23woodGrain)\'/%3E%3C/svg%3E") 20',
            boxShadow: '0 28px 80px rgba(0,0,0,0.85), inset 0 0 50px rgba(0,0,0,0.2)',
            overflow: 'hidden',
            zIndex: 10
          }}
        >
          {/* Vignette overlay */}
          <svg style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 5
          }}>
            <rect width="100%" height="100%" fill="url(#vignette)"/>
          </svg>

          {/* Red string connections - BEHIND everything */}
          <svg style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 6
          }}>
            {connections.map((conn, idx) => {
              const from = tacks.find(t => t.id === conn.from)
              const to = tacks.find(t => t.id === conn.to)
              if (!from || !to) return null
              
              const x1 = `${from.x}%`
              const y1 = `${from.y}%`
              const x2 = `${to.x}%`
              const y2 = `${to.y}%`
              
              return (
                <line
                  key={idx}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  className="red-string"
                />
              )
            })}
          </svg>

          {/* All your existing content continues unchanged... */}
          {/* [Keep all the Map image, Polaroids, Field Notes, Evidence tags, Sticky Notes, etc.] */}
          
          {/* Google Map with tape and location markers */}
          <div style={{
            position: 'absolute',
            left: '42%',
            bottom: '10%',
            width: '420px',
            height: '280px',
            transform: 'rotate(-2deg)',
            zIndex: 35
          }}>
            {/* Corner tapes */}
            <div className="tape" style={{ 
              top: -8, 
              left: -8, 
              transform: 'rotate(-45deg)',
              width: 50,
              height: 18
            }} />
            <div className="tape" style={{ 
              top: -8, 
              right: -8, 
              transform: 'rotate(45deg)',
              width: 50,
              height: 18
            }} />
            <div className="tape" style={{ 
              bottom: -8, 
              left: -8, 
              transform: 'rotate(45deg)',
              width: 50,
              height: 18
            }} />
            <div className="tape" style={{ 
              bottom: -8, 
              right: -8, 
              transform: 'rotate(-45deg)',
              width: 50,
              height: 18
            }} />
            
            {/* Map image */}
            <div style={{
              width: '100%',
              height: '100%',
              border: '3px solid #e0e0e0',
              boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img 
                src="/Assets/GMap.png" 
                alt="Munich Map"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              
              {/* Location markers overlay */}
              <svg style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none'
              }}>
                <circle cx="55%" cy="18%" r="6" className="location-marker"/>
                <circle cx="48%" cy="52%" r="6" className="location-marker"/>
                <circle cx="65%" cy="72%" r="6" className="location-marker"/>
                <circle cx="72%" cy="55%" r="6" className="location-marker"/>
                <circle cx="32%" cy="65%" r="6" className="location-marker"/>
                <circle cx="72%" cy="85%" r="6" className="location-marker"/>
              </svg>
            </div>
          </div>

          {/* Portrait photo - TAPE ONLY */}
          <div style={{
            position: 'absolute',
            left: '12%',
            top: '10%',
            width: 260,
            height: 190,
            zIndex: 40,
            transform: 'rotate(-8deg)'
          }}>
            <div className="tape" style={{ top: -10, left: 36, transform: 'rotate(-6deg)' }} />
            <div className="tape" style={{ top: -14, right: 36, transform: 'rotate(8deg)' }} />
            <div className="polaroid" style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: 6 }}>
              <img
                src="/portrait.jpg"
                alt="Portrait"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'sepia(0.22) contrast(1.08)'
                }}
              />
            </div>
          </div>

          {/* Field Notes */}
          <div style={{
            position: 'absolute',
            right: '10%',
            top: '14%',
            width: 300,
            padding: 18,
            background: 'linear-gradient(135deg, #fbf7ef 0%, #efe1c7 100%)',
            transform: 'rotate(4deg)',
            fontFamily: 'Special Elite, monospace',
            fontSize: 13,
            lineHeight: 1.7,
            color: '#2a2a2a',
            boxShadow: '0 12px 36px rgba(0,0,0,0.55)',
            zIndex: 42,
            border: '1px solid rgba(180,120,70,0.35)'
          }}>
            <div style={{
              borderBottom: '2px solid #8b4513',
              marginBottom: 10,
              paddingBottom: 8,
              fontFamily: 'Permanent Marker, cursive',
              fontSize: 18
            }}>
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

          {/* Panoramic - TAPE ONLY */}
          <div style={{
            position: 'absolute',
            left: '34%',
            top: '36%',
            width: 460,
            height: 150,
            transform: 'rotate(3deg)',
            zIndex: 45
          }}>
            <div className="tape" style={{ top: -12, left: 96, transform: 'rotate(-2deg)' }} />
            <div className="tape" style={{ top: -8, right: 84, transform: 'rotate(6deg)' }} />
            <div className="polaroid" style={{ width: '100%', height: '100%', borderRadius: 6, overflow: 'hidden' }}>
              <img
                src="/Me2-3x8.jpg"
                alt="Panoramic"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.15) contrast(1.04)' }}
              />
            </div>
          </div>

          {/* Evidence tag */}
          <div style={{
            position: 'absolute',
            left: '22%',
            top: '80%',
            padding: '14px 22px',
            background: '#f6e4c1',
            border: '2px solid #8b4513',
            transform: 'rotate(-6deg)',
            fontFamily: 'Special Elite, monospace',
            fontSize: 13,
            fontWeight: '700',
            color: '#241b14',
            boxShadow: '0 8px 26px rgba(0,0,0,0.6)',
            zIndex: 50,
            borderRadius: 6
          }}>
            EVIDENCE #047
            <div style={{ fontSize: 11, marginTop: 6, fontWeight: 400 }}>STATUS: ACTIVE INVESTIGATION</div>
            <div className="pin" style={{ left: '50%', top: -10, transform: 'translateX(-50%)' }} />
          </div>

          {/* Sticky Note 1 - Aerospace */}
          <div className="sticky" style={{
            position: 'absolute',
            left: '10%',
            top: '56%',
            width: 160,
            height: 160,
            background: 'linear-gradient(135deg, #fff7b9 0%, #ffdf6b 100%)',
            padding: 16,
            transform: 'rotate(-13deg)',
            fontFamily: 'Permanent Marker, cursive',
            fontSize: 14,
            color: '#211a14',
            zIndex: 48,
            borderRadius: 6
          }}>
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
          <div className="sticky" style={{
            position: 'absolute',
            right: '12%',
            top: '60%',
            width: 250,
            height: 75,
            background: 'linear-gradient(135deg, #cfefff 0%, #7fc7ff 100%)',
            padding: 14,
            transform: 'rotate(6deg)',
            fontFamily: 'Permanent Marker, cursive',
            fontSize: 13,
            color: '#111111',
            zIndex: 48,
            borderRadius: 6
          }}>
            <div style={{ fontSize: 15, marginBottom: 8, textDecoration: 'underline' }}>CONTACT</div>
            <div style={{ fontSize: 12, lineHeight: 1.5 }}>
              patil.chinmay3031@gmail.com<br />
            </div>
            <div className="pin" style={{ left: '50%', top: -8, transform: 'translateX(-50%)' }} />
          </div>

          {/* Sticky Note 3 - Tools */}
          <div className="sticky" style={{
            position: 'absolute',
            left: '8%',
            top: '36%',
            width: 140,
            height: 140,
            background: 'linear-gradient(135deg, #ffcdd2 0%, #ef9a9a 100%)',
            padding: 14,
            transform: 'rotate(8deg)',
            fontFamily: 'Permanent Marker, cursive',
            fontSize: 12,
            color: '#1a1a1a',
            zIndex: 48,
            borderRadius: 6
          }}>
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
          <div className="sticky" style={{
            position: 'absolute',
            right: '30%',
            top: '22%',
            width: 145,
            height: 145,
            background: 'linear-gradient(135deg, #c8e6c9 0%, #81c784 100%)',
            padding: 14,
            transform: 'rotate(-10deg)',
            fontFamily: 'Permanent Marker, cursive',
            fontSize: 12,
            color: '#1a1a1a',
            zIndex: 48,
            borderRadius: 6
          }}>
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
          <div className="sticky" style={{
            position: 'absolute',
            left: '46%',
            top: '8%',
            width: 155,
            height: 120,
            background: 'linear-gradient(135deg, #f8bbd0 0%, #f48fb1 100%)',
            padding: 14,
            transform: 'rotate(3deg)',
            fontFamily: 'Permanent Marker, cursive',
            fontSize: 12,
            color: '#1a1a1a',
            zIndex: 48,
            borderRadius: 6
          }}>
            <div style={{ fontSize: 14, marginBottom: 6, textDecoration: 'underline' }}>EDUCATION</div>
            <div style={{ fontSize: 11, lineHeight: 1.5 }}>
              M.Sc. Aerospace<br />
              Engineering<br />
              TU Munich
            </div>
            <div className="pin" style={{ left: '50%', top: -8, transform: 'translateX(-50%)' }} />
          </div>

          {/* Sticky Note 6 - Status */}
          <div className="sticky" style={{
            position: 'absolute',
            right: '20%',
            bottom: '8%',
            width: 130,
            height: 110,
            background: 'linear-gradient(135deg, #ffe0b2 0%, #ffcc80 100%)',
            padding: 12,
            transform: 'rotate(-7deg)',
            fontFamily: 'Permanent Marker, cursive',
            fontSize: 11,
            color: '#1a1a1a',
            zIndex: 48,
            borderRadius: 6
          }}>
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
        <div style={{ position: 'absolute', bottom: 40, right: 60, zIndex: 160 }}>
          <button
            onClick={handleLookAround}
            className="look-btn"
            aria-label="Look around"
          >
            LOOK AROUND
          </button>
        </div>
      </div>
    </div>
  )
}