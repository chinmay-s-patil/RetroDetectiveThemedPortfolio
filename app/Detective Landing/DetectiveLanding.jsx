'use client'

import React, { useState } from 'react'

export default function DetectiveLanding() {
  const [hoveredHotspot, setHoveredHotspot] = useState(null)

  const hotspots = [
    { id: 'projects', x: 48, y: 28, icon: '📁', label: 'Projects' },
    { id: 'cad', x: 28, y: 56, icon: '🖥️', label: 'CAD' },
    { id: 'openfoam', x: 68, y: 62, icon: '📚', label: 'OpenFOAM' }
  ]

  const handleLookAround = () => {
    // Navigate to hub - for now just log
    console.log('Navigating to hub environment...')
    // In actual implementation: router.push('/hub')
  }

  const handleHotspotClick = (id) => {
    console.log(`Clicked: ${id}`)
    // Future: Open drawer/modal for this category
  }

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(180deg, #e6d7c7 0%, #d7c0a6 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&display=swap');

        .paper {
          background: linear-gradient(180deg, #fbf7ef 0%, #f6efe1 100%);
          box-shadow: 0 24px 50px rgba(6, 10, 15, 0.45);
          border-radius: 10px;
          border: 1px solid rgba(10, 10, 10, 0.05);
        }

        .tape {
          width: 110px;
          height: 28px;
          background: linear-gradient(90deg, #fff3b0 0%, #ffe27a 100%);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
          transform: rotate(-6deg);
          border-radius: 3px;
          opacity: 0.95;
        }

        .tape2 {
          transform: rotate(8deg);
        }

        .sticky-note {
          background: linear-gradient(180deg, #fff6b8 0%, #fff09d 100%);
          width: 140px;
          height: 120px;
          padding: 12px;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
          border-radius: 6px;
          font-family: 'Kalam', cursive;
        }

        .hotspot {
          width: 64px;
          height: 64px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid rgba(255, 255, 255, 0.9);
          display: grid;
          place-items: center;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          cursor: pointer;
        }

        .hotspot:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
          border-color: white;
        }

        .map-photo {
          width: 260px;
          height: 170px;
          object-fit: cover;
          border-radius: 6px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .look-around-btn {
          padding: 16px 48px;
          background: linear-gradient(135deg, #2c2c2c, #1a1a1a);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.2s ease;
          font-family: 'Manrope', sans-serif;
          letter-spacing: 0.5px;
        }

        .look-around-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
          background: linear-gradient(135deg, #3a3a3a, #242424);
        }

        .arrow-down {
          display: inline-block;
          margin-left: 12px;
          font-size: 20px;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-6px);
          }
          60% {
            transform: translateY(-3px);
          }
        }
      `}</style>

      <div className="paper" style={{
        width: '1200px',
        maxWidth: '95vw',
        height: '760px',
        maxHeight: '90vh',
        padding: '2.5rem',
        display: 'flex',
        gap: '2rem',
        position: 'relative'
      }}>
        
        {/* Main Map Area - Left/Center */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          {/* Map Canvas */}
          <div style={{
            position: 'relative',
            background: 'url("/images/blank-map-texture.jpg") center/cover',
            borderRadius: '8px',
            flex: 1,
            padding: '1.5rem',
            overflow: 'hidden',
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 40px, rgba(0,0,0,0.03) 41px), repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, transparent 1px, transparent 40px, rgba(0,0,0,0.03) 41px)',
            backgroundColor: '#f5f0e8'
          }}>
            
            {/* Taped Photo - Top Left */}
            <div style={{
              position: 'absolute',
              left: '2.5rem',
              top: '2rem'
            }}>
              <div style={{ position: 'relative' }}>
                <img 
                  src="/portrait.jpg" 
                  alt="Field photo" 
                  className="map-photo"
                  style={{ transform: 'rotate(-2deg)' }}
                />
                <div className="tape" style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '20px'
                }} />
                <div className="tape tape2" style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '20px'
                }} />
              </div>
              <div style={{
                marginTop: '0.75rem',
                fontSize: '14px',
                color: '#2c2c2c',
                fontFamily: 'Kalam, cursive',
                fontWeight: 600
              }}>
                "field notes" — Munich lab
              </div>
            </div>

            {/* Interactive Hotspots */}
            {hotspots.map(spot => (
              <button
                key={spot.id}
                className="hotspot"
                onClick={() => handleHotspotClick(spot.id)}
                onMouseEnter={() => setHoveredHotspot(spot.id)}
                onMouseLeave={() => setHoveredHotspot(null)}
                style={{
                  position: 'absolute',
                  left: `${spot.x}%`,
                  top: `${spot.y}%`,
                  fontSize: '28px',
                  borderColor: hoveredHotspot === spot.id ? 'white' : 'rgba(255,255,255,0.9)'
                }}
                aria-label={`Open ${spot.label}`}
                title={spot.label}
              >
                {spot.icon}
              </button>
            ))}

            {/* Map Legend - Bottom Right */}
            <div style={{
              position: 'absolute',
              right: '2rem',
              bottom: '2rem',
              width: '280px',
              fontSize: '13px',
              color: '#3a3a3a',
              fontFamily: 'Manrope, sans-serif',
              lineHeight: '1.6'
            }}>
              <div style={{ 
                fontWeight: 800, 
                fontSize: '16px',
                marginBottom: '8px',
                letterSpacing: '0.5px'
              }}>
                Key
              </div>
              <div>
                • Projects (file drawer)<br />
                • CAD (cartridge console)<br />
                • OpenFOAM (bookshelf)
              </div>
            </div>
          </div>

          {/* Sticky Notes Row - Bottom */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '1.5rem'
          }}>
            <div className="sticky-note" style={{ transform: 'rotate(-3deg)' }}>
              <div style={{ fontSize: '14px', color: '#2c2c2c', fontWeight: 700 }}>
                Aerospace · CFD
              </div>
              <div style={{ fontSize: '12px', marginTop: '10px', color: '#4a4a4a' }}>
                - OpenFOAM case studies<br />
                - Aeroacoustics
              </div>
            </div>

            <div className="sticky-note" style={{ transform: 'rotate(-4deg)' }}>
              <div style={{ fontSize: '14px', color: '#2c2c2c', fontWeight: 700 }}>
                Tools
              </div>
              <div style={{ fontSize: '12px', marginTop: '10px', color: '#4a4a4a' }}>
                - Python, ParaView<br />
                - Blender, FEA
              </div>
            </div>

            <div className="sticky-note" style={{ transform: 'rotate(6deg)' }}>
              <div style={{ fontSize: '14px', color: '#2c2c2c', fontWeight: 700 }}>
                Contact
              </div>
              <div style={{ fontSize: '12px', marginTop: '10px', color: '#4a4a4a' }}>
                chinmaypatil2412@<br />gmail.com
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Case Summary */}
        <div style={{
          width: '340px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          {/* Detective File Header */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.06)',
            padding: '1.25rem',
            borderRadius: '10px'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 800,
              marginBottom: '0.75rem',
              fontFamily: 'Manrope, sans-serif',
              letterSpacing: '0.5px'
            }}>
              Detective file — Chinmay
            </h3>
            <p style={{
              fontSize: '14px',
              lineHeight: '1.7',
              color: '#3a3a3a',
              fontFamily: 'Manrope, sans-serif'
            }}>
              CFD student who builds simulation pipelines, visual tools, and interactive models. 
              Explore the archive — click anything with a white border.
            </p>
          </div>

          {/* Quick Info Cards */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.04)',
            padding: '1rem',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'rgba(0, 0, 0, 0.08)',
              borderRadius: '8px',
              display: 'grid',
              placeItems: 'center',
              fontSize: '24px'
            }}>
              🎓
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, fontFamily: 'Manrope, sans-serif' }}>
                Education
              </div>
              <div style={{ fontSize: '12px', color: '#5a5a5a', fontFamily: 'Manrope, sans-serif' }}>
                BTech, Aerospace Engineering
              </div>
            </div>
          </div>

          <div style={{
            background: 'rgba(0, 0, 0, 0.04)',
            padding: '1rem',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'rgba(0, 0, 0, 0.08)',
              borderRadius: '8px',
              display: 'grid',
              placeItems: 'center',
              fontSize: '24px'
            }}>
              🛠️
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, fontFamily: 'Manrope, sans-serif' }}>
                Core
              </div>
              <div style={{ fontSize: '12px', color: '#5a5a5a', fontFamily: 'Manrope, sans-serif' }}>
                CFD · Python · OpenFOAM
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{
            marginTop: 'auto',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <button 
              className="look-around-btn"
              onClick={handleLookAround}
            >
              Look around
              <span className="arrow-down">↓</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}