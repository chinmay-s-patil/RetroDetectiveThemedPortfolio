'use client'

import React, { useRef } from 'react'

export default function DetectiveLanding() {
  const containerRef = useRef(null)
  const portraitRef = useRef(null)
  const panoramicRef = useRef(null)
  const notesRef = useRef(null)
  const evidenceRef = useRef(null)

  const handleLookAround = () => {
    console.log('Navigating to hub environment...')
  }

  return (
    <div
      ref={containerRef}
      style={{
        width: '100vw',
        height: '100vh',
        background:
          'radial-gradient(circle at 20% 15%, #3a2b20 0%, #221a12 30%, #0f0d0a 100%)',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "Special Elite, 'Permanent Marker', system-ui, sans-serif",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#1b1b1b'
      }}
    >
      {/* Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

        /* subtle paper texture using gradients */
        .board {
          background:
            linear-gradient(180deg, rgba(250,244,232,0.98), rgba(238,224,200,0.96)),
            repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0 1px, transparent 1px 8px);
          background-blend-mode: multiply;
        }

        /* Polaroid style frames */
        .polaroid {
          border: 10px solid #f6efe2;
          box-shadow: 0 14px 40px rgba(0,0,0,0.6), inset 0 0 18px rgba(0,0,0,0.06);
          transition: transform 220ms cubic-bezier(.2,.8,.2,1);
        }

        /* tape piece with grain */
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

        /* sticky notes */
        .sticky {
          box-shadow: 0 10px 30px rgba(0,0,0,0.45);
          border-radius: 6px;
          transform-origin: center;
          transition: transform 200ms;
        }

        /* thumbtack/pin */
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

        /* look-around button */
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
      `}} />

      {/* Main board */}
      <div
        className="board"
        style={{
          position: 'relative',
          width: '86vw',
          height: '80vh',
          borderRadius: 10,
          padding: '2.6rem',
          border: '10px solid rgba(20,14,10,0.9)',
          boxShadow: '0 28px 80px rgba(0,0,0,0.85), inset 0 0 30px rgba(0,0,0,0.35)',
          overflow: 'hidden'
        }}
      >
        {/* Portrait photo with pins */}
        <div
          ref={portraitRef}
          style={{
            position: 'absolute',
            left: '12%',
            top: '10%',
            width: 260,
            height: 190,
            zIndex: 40,
            transform: 'rotate(-8deg)'
          }}
          aria-label="Portrait photo"
        >
          {/* tape */}
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
          {/* Thumbtacks on portrait */}
          <div className="pin" style={{ left: -8, top: -8 }} />
          <div className="pin" style={{ right: -8, top: -8 }} />
        </div>

        {/* Field Notes (document) with pins */}
        <div
          ref={notesRef}
          style={{
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
          }}
        >
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
          <div style={{ fontWeight: 700, marginTop: 8 }}>Location:</div> Previous Known Location<br />
          <div style={{ fontWeight: 700, marginTop: 8 }}>Specialty:</div> CFD / Aeroacoustics / Visual tools
          <div style={{ marginTop: 10, color: '#b71c1c', fontWeight: 700 }}>Key Skills:</div>
          <ul style={{ marginTop: 6 }}>
            <li>OpenFOAM & CFD pipelines</li>
            <li>Python tooling / automation</li>
            <li>Aeroacoustics analysis</li>
          </ul>
          {/* Thumbtack on notes */}
          <div className="pin" style={{ left: '50%', top: -12, transform: 'translateX(-50%)' }} />
        </div>

        {/* Panoramic with pins */}
        <div
          ref={panoramicRef}
          style={{
            position: 'absolute',
            left: '34%',
            top: '46%',
            width: 460,
            height: 150,
            transform: 'rotate(3deg)',
            zIndex: 45
          }}
        >
          <div className="tape" style={{ top: -12, left: 96, transform: 'rotate(-2deg)' }} />
          <div className="tape" style={{ top: -8, right: 84, transform: 'rotate(6deg)' }} />
          <div className="polaroid" style={{ width: '100%', height: '100%', borderRadius: 6, overflow: 'hidden' }}>
            <img
              src="/Me2-3x8.jpg"
              alt="Panoramic"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.15) contrast(1.04)' }}
            />
          </div>
          {/* Thumbtacks on panoramic */}
          <div className="pin" style={{ left: -8, top: '50%', transform: 'translateY(-50%)' }} />
          <div className="pin" style={{ right: -8, top: '50%', transform: 'translateY(-50%)' }} />
        </div>

        {/* Evidence tag with pin */}
        <div
          ref={evidenceRef}
          style={{
            position: 'absolute',
            left: '26%',
            top: '70%',
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
          }}
        >
          EVIDENCE #047
          <div style={{ fontSize: 11, marginTop: 6, fontWeight: 400 }}>STATUS: ACTIVE INVESTIGATION</div>
          <div className="pin" style={{ left: '50%', top: -10, transform: 'translateX(-50%)' }} />
        </div>

        {/* Sticky notes with pins */}
        <div
          style={{
            position: 'absolute',
            left: '10%',
            top: '56%',
            width: 160,
            height: 160,
            background: 'linear-gradient(135deg, #fff7b9 0%, #ffdf6b 100%)',
            padding: 16,
            transform: 'rotate(-13deg)',
            boxShadow: '0 14px 40px rgba(0,0,0,0.45)',
            fontFamily: 'Permanent Marker, cursive',
            fontSize: 14,
            color: '#211a14',
            zIndex: 48,
            borderRadius: 6
          }}
        >
          <div style={{ fontSize: 16, marginBottom: 8, textDecoration: 'underline' }}>AEROSPACE</div>
          <div style={{ fontSize: 12, lineHeight: 1.6 }}>
            ✓ CFD simulations<br />
            ✓ Turbulence modeling<br />
            ✓ Propeller dynamics<br />
            ✓ Thermal & systems
          </div>
          <div className="pin" style={{ left: '50%', top: -8, transform: 'translateX(-50%)' }} />
        </div>

        <div
          style={{
            position: 'absolute',
            right: '12%',
            top: '60%',
            width: 150,
            height: 150,
            background: 'linear-gradient(135deg, #cfefff 0%, #7fc7ff 100%)',
            padding: 14,
            transform: 'rotate(6deg)',
            boxShadow: '0 14px 40px rgba(0,0,0,0.45)',
            fontFamily: 'Permanent Marker, cursive',
            fontSize: 13,
            color: '#111111',
            zIndex: 48,
            borderRadius: 6
          }}
        >
          <div style={{ fontSize: 15, marginBottom: 8, textDecoration: 'underline' }}>CONTACT</div>
          <div style={{ fontSize: 12, lineHeight: 1.5 }}>
            chinmaypatil2412<br />
            @gmail.com<br />
            <br />
            Munich, Germany
          </div>
          <div className="pin" style={{ left: '50%', top: -8, transform: 'translateX(-50%)' }} />
        </div>

        {/* Decorative props */}
        <img
          src="/Assets/Magnifying Glass.png"
          alt="Magnifying glass"
          style={{
            position: 'absolute',
            right: '7%',
            bottom: '14%',
            width: 220,
            height: 220,
            filter: 'drop-shadow(0 8px 28px rgba(0,0,0,0.6))',
            zIndex: 30,
            pointerEvents: 'none',
            transform: 'rotate(-8deg)'
          }}
        />
        <img
          src="/Assets/Compass.png"
          alt="Compass"
          style={{
            position: 'absolute',
            left: '6%',
            bottom: '6%',
            width: 150,
            height: 150,
            transform: 'rotate(-12deg)',
            filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.7))',
            zIndex: 30,
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Look Around Button */}
      <div style={{ position: 'absolute', bottom: 60, right: 78, zIndex: 160 }}>
        <button
          onClick={handleLookAround}
          className="look-btn"
          aria-label="Look around"
        >
          LOOK AROUND
        </button>
      </div>
    </div>
  )
}