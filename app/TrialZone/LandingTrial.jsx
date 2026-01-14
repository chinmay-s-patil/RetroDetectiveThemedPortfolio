'use client'

import React, { useState } from 'react'

export default function DetectiveLanding() {
  const [hoveredItem, setHoveredItem] = useState(null)

  const handleLookAround = () => {
    console.log('Navigating to hub environment...')
    // In actual implementation: router.push('/hub')
  }

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'radial-gradient(circle at 40% 40%, #2a2318 0%, #12100c 60%, #000000 100%)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

        .tattered-paper {
          filter: drop-shadow(0 8px 16px rgba(0,0,0,0.6));
          clip-path: polygon(
            2% 1%, 8% 0%, 15% 2%, 22% 0%, 30% 1%, 38% 0%, 
            45% 2%, 52% 0%, 60% 1%, 68% 0%, 75% 2%, 82% 1%, 
            90% 0%, 95% 1%, 98% 3%, 99% 8%, 100% 15%, 99% 22%,
            100% 30%, 99% 38%, 100% 45%, 99% 52%, 100% 60%, 
            99% 68%, 100% 75%, 98% 82%, 100% 88%, 99% 93%, 
            97% 97%, 92% 99%, 85% 98%, 78% 100%, 70% 99%, 
            62% 100%, 55% 98%, 48% 99%, 40% 100%, 32% 98%, 
            25% 99%, 18% 100%, 10% 98%, 5% 96%, 2% 92%, 
            0% 85%, 1% 78%, 0% 70%, 2% 62%, 0% 55%, 1% 48%, 
            0% 40%, 2% 32%, 0% 25%, 1% 18%, 0% 10%, 2% 5%
          );
        }

        .burnt-edge {
          position: relative;
        }

        .burnt-edge::before {
          content: '';
          position: absolute;
          inset: -5px;
          background: linear-gradient(135deg, 
            transparent 30%, 
            rgba(40, 20, 0, 0.3) 40%, 
            rgba(60, 30, 0, 0.5) 50%, 
            rgba(30, 15, 0, 0.4) 60%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 1;
        }

        .red-string {
          position: absolute;
          height: 2px;
          background: #d32f2f;
          transform-origin: left center;
          box-shadow: 0 0 4px rgba(211, 47, 47, 0.6);
        }

        .pin {
          width: 12px;
          height: 12px;
          background: radial-gradient(circle, #c41e1e 40%, #8b0000 100%);
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.8), inset 0 -1px 2px rgba(0,0,0,0.5);
          position: absolute;
          z-index: 20;
        }

        .photo-item {
          transition: transform 0.2s ease, filter 0.2s ease;
          cursor: pointer;
        }

        .photo-item:hover {
          transform: scale(1.05) !important;
          filter: brightness(1.1);
          z-index: 15 !important;
        }

        @keyframes glow-pulse {
          0%, 100% {
            text-shadow: 
              0 0 10px rgba(255, 255, 255, 0.8),
              0 0 20px rgba(255, 255, 255, 0.6),
              0 0 30px rgba(255, 59, 59, 0.8),
              0 0 40px rgba(255, 59, 59, 0.6);
            transform: translateY(0);
          }
          50% {
            text-shadow: 
              0 0 15px rgba(255, 255, 255, 1),
              0 0 30px rgba(255, 255, 255, 0.8),
              0 0 45px rgba(255, 59, 59, 1),
              0 0 60px rgba(255, 59, 59, 0.8);
            transform: translateY(-3px);
          }
        }

        .look-around-button {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        @keyframes arrow-bounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.7; }
        }

        .arrow-down {
          animation: arrow-bounce 1.5s ease-in-out infinite;
        }
      `}</style>

      {/* Investigation Board */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem'
      }}>
        
        {/* Red String Connections */}
        <div className="red-string" style={{
          left: '28%',
          top: '25%',
          width: '220px',
          transform: 'rotate(25deg)'
        }} />
        <div className="red-string" style={{
          left: '45%',
          top: '30%',
          width: '180px',
          transform: 'rotate(-15deg)'
        }} />
        <div className="red-string" style={{
          left: '35%',
          top: '55%',
          width: '250px',
          transform: 'rotate(45deg)'
        }} />
        <div className="red-string" style={{
          left: '60%',
          top: '40%',
          width: '160px',
          transform: 'rotate(70deg)'
        }} />
        <div className="red-string" style={{
          left: '52%',
          top: '65%',
          width: '200px',
          transform: 'rotate(-30deg)'
        }} />

        {/* Pins scattered across */}
        <div className="pin" style={{ left: '28%', top: '25%' }} />
        <div className="pin" style={{ left: '48%', top: '28%' }} />
        <div className="pin" style={{ left: '62%', top: '35%' }} />
        <div className="pin" style={{ left: '38%', top: '52%' }} />
        <div className="pin" style={{ left: '65%', top: '58%' }} />
        <div className="pin" style={{ left: '72%', top: '68%' }} />

        {/* Portrait Photo 1 - Top Left */}
        <div 
          className="photo-item tattered-paper burnt-edge"
          onMouseEnter={() => setHoveredItem('photo1')}
          onMouseLeave={() => setHoveredItem(null)}
          style={{
            position: 'absolute',
            left: '15%',
            top: '12%',
            width: '240px',
            height: '180px',
            transform: 'rotate(-8deg)',
            zIndex: hoveredItem === 'photo1' ? 15 : 5
          }}
        >
          <img 
            src="/portrait.jpg" 
            alt="Portrait" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              border: '8px solid #f5f0e8',
              boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
              filter: 'sepia(0.2) contrast(1.1)'
            }}
          />
        </div>

        {/* Wide Panoramic Photo - Center */}
        <div 
          className="photo-item tattered-paper burnt-edge"
          onMouseEnter={() => setHoveredItem('photo2')}
          onMouseLeave={() => setHoveredItem(null)}
          style={{
            position: 'absolute',
            left: '35%',
            top: '45%',
            width: '420px',
            height: '140px',
            transform: 'rotate(3deg)',
            zIndex: hoveredItem === 'photo2' ? 15 : 6
          }}
        >
          <img 
            src="/Me2-3x8.jpg" 
            alt="Panoramic view" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              border: '8px solid #f5f0e8',
              boxShadow: '0 6px 16px rgba(0,0,0,0.7)',
              filter: 'sepia(0.15) contrast(1.05)'
            }}
          />
        </div>

        {/* Document 1 - "Field Notes" */}
        <div 
          className="photo-item tattered-paper burnt-edge"
          onMouseEnter={() => setHoveredItem('doc1')}
          onMouseLeave={() => setHoveredItem(null)}
          style={{
            position: 'absolute',
            left: '58%',
            top: '18%',
            width: '280px',
            padding: '20px',
            background: 'linear-gradient(135deg, #faf8f0 0%, #f0e8d8 100%)',
            transform: 'rotate(5deg)',
            fontFamily: 'Special Elite, monospace',
            fontSize: '13px',
            lineHeight: '1.8',
            color: '#2a2a2a',
            boxShadow: '0 8px 20px rgba(0,0,0,0.6)',
            zIndex: hoveredItem === 'doc1' ? 15 : 7
          }}
        >
          <div style={{ 
            borderBottom: '2px solid #8b4513', 
            marginBottom: '12px',
            paddingBottom: '8px',
            fontFamily: 'Permanent Marker, cursive',
            fontSize: '16px'
          }}>
            FIELD NOTES
          </div>
          Subject: Chinmay Patil<br/>
          Location: Munich Lab<br/>
          Specialty: CFD Engineering<br/>
          <br/>
          <span style={{ color: '#d32f2f' }}>Key Skills:</span><br/>
          • OpenFOAM<br/>
          • Python pipelines<br/>
          • Aeroacoustics<br/>
          • Visual tools
        </div>

        {/* Sticky Note 1 */}
        <div 
          className="photo-item"
          onMouseEnter={() => setHoveredItem('note1')}
          onMouseLeave={() => setHoveredItem(null)}
          style={{
            position: 'absolute',
            left: '12%',
            top: '58%',
            width: '160px',
            height: '160px',
            background: 'linear-gradient(135deg, #fff9b1 0%, #ffe066 100%)',
            padding: '16px',
            transform: 'rotate(-12deg)',
            boxShadow: '0 6px 16px rgba(0,0,0,0.5)',
            fontFamily: 'Permanent Marker, cursive',
            fontSize: '14px',
            color: '#2a2a2a',
            zIndex: hoveredItem === 'note1' ? 15 : 8
          }}
        >
          <div style={{ 
            fontSize: '16px', 
            marginBottom: '8px',
            textDecoration: 'underline'
          }}>
            AEROSPACE
          </div>
          <div style={{ fontSize: '12px', lineHeight: '1.6' }}>
            ✓ CFD simulations<br/>
            ✓ Turbulence<br/>
            ✓ Propeller dynamics<br/>
            ✓ Thermal systems
          </div>
        </div>

        {/* Sticky Note 2 */}
        <div 
          className="photo-item"
          onMouseEnter={() => setHoveredItem('note2')}
          onMouseLeave={() => setHoveredItem(null)}
          style={{
            position: 'absolute',
            left: '72%',
            top: '62%',
            width: '150px',
            height: '150px',
            background: 'linear-gradient(135deg, #b8e6ff 0%, #6dc5ff 100%)',
            padding: '16px',
            transform: 'rotate(8deg)',
            boxShadow: '0 6px 16px rgba(0,0,0,0.5)',
            fontFamily: 'Permanent Marker, cursive',
            fontSize: '13px',
            color: '#1a1a1a',
            zIndex: hoveredItem === 'note2' ? 15 : 9
          }}
        >
          <div style={{ 
            fontSize: '15px', 
            marginBottom: '8px',
            textDecoration: 'underline'
          }}>
            CONTACT
          </div>
          <div style={{ fontSize: '11px', lineHeight: '1.5' }}>
            chinmaypatil2412<br/>
            @gmail.com<br/>
            <br/>
            Munich, Germany
          </div>
        </div>

        {/* Evidence Tag */}
        <div 
          className="photo-item burnt-edge"
          style={{
            position: 'absolute',
            left: '28%',
            top: '72%',
            padding: '12px 20px',
            background: '#f5deb3',
            border: '2px solid #8b4513',
            transform: 'rotate(-5deg)',
            fontFamily: 'Special Elite, monospace',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#2a2a2a',
            boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
            zIndex: 10
          }}
        >
          EVIDENCE #047
          <div style={{ fontSize: '10px', marginTop: '4px', fontWeight: 'normal' }}>
            STATUS: ACTIVE INVESTIGATION
          </div>
        </div>

        {/* Magnifying Glass overlay effect */}
        <div style={{
          position: 'absolute',
          right: '8%',
          bottom: '25%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '6px solid #8b6914',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.6), inset 0 2px 8px rgba(255,255,255,0.3)',
          transform: 'rotate(25deg)',
          zIndex: 12,
          pointerEvents: 'none'
        }}>
          <div style={{
            position: 'absolute',
            bottom: '-60px',
            left: '45%',
            width: '12px',
            height: '70px',
            background: 'linear-gradient(180deg, #6b5010 0%, #4a3508 100%)',
            transform: 'rotate(45deg)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.8)'
          }} />
        </div>
      </div>

      {/* Look Around Button - Bottom of page, outside map */}
      <div style={{
        position: 'fixed',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        zIndex: 50,
        cursor: 'pointer'
      }}
      onClick={handleLookAround}>
        <div 
          className="look-around-button"
          style={{
            fontFamily: 'Permanent Marker, cursive',
            fontSize: '32px',
            color: '#ff3b3b',
            fontWeight: 'bold',
            letterSpacing: '2px',
            userSelect: 'none'
          }}
        >
          Look Around
        </div>
        <div 
          className="arrow-down"
          style={{
            fontSize: '40px',
            color: '#ff3b3b',
            textShadow: '0 0 15px rgba(255, 59, 59, 0.8)'
          }}
        >
          ↓
        </div>
      </div>
    </div>
  )
}