'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Shortened titles for folder tabs
const projectsData = {
  drawers: [
    {
      id: 'cfd-simulation',
      label: 'CFD & SIM',
      color: '#2a5d84',
      folders: [
        { id: 'pyrolysis', tabTitle: 'PYROLYSIS OPT.', fullTitle: 'Optimization of Pyrolysis-Based Plastic Oil Yield' },
        { id: 'battery-cooling', tabTitle: 'BATTERY COOL', fullTitle: 'Hybrid Battery Cooling Mechanism' },
        { id: 'wind-turbine', tabTitle: 'WIND TURB', fullTitle: 'Wind Turbine Simulation in StarCCM+' },
        { id: 'solar-aerodynamics', tabTitle: 'SOLAR AERO', fullTitle: 'Solar Parapet Roof Panel Aerodynamics' },
        { id: 'coffee-heater', tabTitle: 'COFFEE HTR', fullTitle: 'Coffee Heater Multiphase Simulation' },
        { id: 'propeller-aeroacoustics', tabTitle: 'PROP NOISE', fullTitle: 'Propeller Aeroacoustics Study' },
        { id: 'truck-platooning', tabTitle: 'TRUCK PLAT', fullTitle: 'Simulation of Truck Platooning' },
        { id: 'immersion-cooling', tabTitle: 'IMMERSE COOL', fullTitle: 'Immersion Cooling in Battery Thermal Management' },
        { id: 'solar-arrays', tabTitle: 'SOLAR ARRAY', fullTitle: 'Aerodynamics of Ground-Mounted Solar Arrays' }
      ]
    },
    {
      id: 'cad-design',
      label: 'CAD & DESIGN',
      color: '#5d4a2a',
      folders: [
        { id: 's500-drone', tabTitle: 'S500 DRONE', fullTitle: 'Reverse Engineering S500 Drone' },
        { id: 'sve-cad', tabTitle: 'SOLAR VORTEX', fullTitle: 'CAD Model of Solar Vortex Engine' },
        { id: 'wind-tunnel', tabTitle: 'WIND TUNNEL', fullTitle: 'Wind Tunnel Test Section Modeling' },
        { id: 'guitar-design', tabTitle: 'GUITAR PROJ', fullTitle: 'Guitar Design Project' }
      ]
    },
    {
      id: 'fea-ml',
      label: 'FEA & ML',
      color: '#4a2a5d',
      folders: [
        { id: 'bullet-impact', tabTitle: 'BULLET IMP', fullTitle: 'Bullet Impact Simulations' },
        { id: 'inclined-crack', tabTitle: 'CRACK J-INT', fullTitle: 'Computational Correlation of J-Integral for Inclined Crack' },
        { id: 'graphite-rupture', tabTitle: 'GRAPHITE ML', fullTitle: 'Graphite Rupture Strength Prediction' },
        { id: 'language-music', tabTitle: 'MUSIC LANG', fullTitle: 'Language Identification in Music' }
      ]
    },
    {
      id: 'experimental',
      label: 'EXPERIMENTAL',
      color: '#2a4a5d',
      folders: [
        { id: 'aero-lab', tabTitle: 'AERO LAB', fullTitle: 'Aerodynamics Lab Experiments' }
      ]
    }
  ]
};

export default function DetectiveProjects() {
  const [openDrawer, setOpenDrawer] = useState(null);
  const [hoveredFolder, setHoveredFolder] = useState(null);
  const router = useRouter();

  const handleDrawerClick = (drawerId) => {
    setOpenDrawer(openDrawer === drawerId ? null : drawerId);
  };

  const currentDrawer = projectsData.drawers.find(d => d.id === openDrawer);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #1a1410 0%, #0f0d0a 100%)',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: "'Special Elite', monospace"
    }}>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap');

        @keyframes drawerSlide {
          0% { transform: translateY(0); }
          100% { transform: translateY(-80px); }
        }

        @keyframes folderPop {
          0% { transform: translateY(0) translateX(0) rotate(0deg); }
          100% { transform: translateY(-30px) translateX(-10px) rotate(-2deg); }
        }

        @keyframes paperShake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(0.5deg); }
          75% { transform: rotate(-0.5deg); }
        }

        .drawer-open {
          animation: drawerSlide 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .folder-hover {
          animation: folderPop 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .folder-tab {
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .paper-texture {
          background-image: 
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px);
        }

        .stamped::after {
          content: 'CLASSIFIED';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-15deg);
          font-size: 2rem;
          font-weight: 900;
          color: rgba(139, 0, 0, 0.15);
          border: 4px solid rgba(139, 0, 0, 0.15);
          padding: 0.5rem 2rem;
          letter-spacing: 0.3em;
          pointer-events: none;
        }
      `}} />

      {/* Back Button */}
      <button
        onClick={() => router.push('/hub')}
        style={{
          position: 'fixed',
          top: '2rem',
          left: '2rem',
          background: 'rgba(196, 165, 116, 0.2)',
          border: '2px solid #8b7355',
          color: '#f6efe2',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(196, 165, 116, 0.3)';
          e.target.style.transform = 'translateX(-4px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(196, 165, 116, 0.2)';
          e.target.style.transform = 'translateX(0)';
        }}
      >
        ← BACK TO HQ
      </button>

      {/* Main Content */}
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        {/* Title */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: '#f6efe2',
            marginBottom: '0.5rem',
            textShadow: '0 4px 12px rgba(0,0,0,0.8)',
            letterSpacing: '0.05em'
          }}>
            CASE FILES
          </h1>
          <div style={{
            width: '200px',
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #c4a574, transparent)',
            margin: '0 auto 1rem'
          }} />
          <p style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
            color: '#8b7355',
            fontStyle: 'italic',
            letterSpacing: '0.1em'
          }}>
            Select a cabinet drawer to access files
          </p>
        </div>

        {/* Filing Cabinet */}
        <div style={{
          position: 'relative',
          width: 'min(95%, 900px)',
          background: 'linear-gradient(135deg, #3d2817 0%, #2a1810 100%)',
          padding: '2rem',
          borderRadius: '12px 12px 4px 4px',
          boxShadow: `
            0 30px 80px rgba(0,0,0,0.9),
            inset 0 2px 0 rgba(255,255,255,0.05),
            inset 0 -2px 10px rgba(0,0,0,0.5)
          `,
          border: '6px solid #1a1410'
        }}>
          {/* Cabinet Header Plate */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, #c4a574, #8b7355)',
            padding: '0.5rem 2rem',
            borderRadius: '6px',
            border: '2px solid #1a1410',
            boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
            fontWeight: '700',
            fontSize: '0.9rem',
            letterSpacing: '0.2em',
            color: '#1a1410'
          }}>
            ARCHIVES
          </div>

          {/* Drawers */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px'
          }}>
            {projectsData.drawers.map((drawer, index) => (
              <div
                key={drawer.id}
                className={openDrawer === drawer.id ? 'drawer-open' : ''}
                onClick={() => handleDrawerClick(drawer.id)}
                style={{
                  position: 'relative',
                  height: '90px',
                  background: `linear-gradient(180deg, ${drawer.color}dd 0%, ${drawer.color}aa 100%)`,
                  border: '3px solid rgba(0,0,0,0.4)',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: `
                    0 4px 12px rgba(0,0,0,0.5),
                    inset 0 1px 0 rgba(255,255,255,0.1)
                  `,
                  zIndex: openDrawer === drawer.id ? 20 : 10 - index,
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (openDrawer !== drawer.id) {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = `0 8px 20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.15)`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (openDrawer !== drawer.id) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = `0 4px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)`;
                  }
                }}
              >
                {/* Drawer scratches/wear */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `
                    linear-gradient(45deg, transparent 48%, rgba(0,0,0,0.1) 49%, rgba(0,0,0,0.1) 51%, transparent 52%),
                    linear-gradient(-45deg, transparent 48%, rgba(0,0,0,0.05) 49%, rgba(0,0,0,0.05) 51%, transparent 52%)
                  `,
                  backgroundSize: '30px 30px',
                  opacity: 0.3,
                  pointerEvents: 'none'
                }} />

                {/* Metal Handle */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '140px',
                  height: '45px',
                  background: 'linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)',
                  borderRadius: '8px',
                  border: '3px solid rgba(0,0,0,0.6)',
                  boxShadow: `
                    inset 0 2px 4px rgba(255,255,255,0.1),
                    inset 0 -2px 4px rgba(0,0,0,0.5),
                    0 6px 16px rgba(0,0,0,0.6)
                  `,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '90px',
                    height: '8px',
                    background: 'linear-gradient(90deg, #4a4a4a, #2a2a2a, #4a4a4a)',
                    borderRadius: '4px',
                    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5)'
                  }} />
                </div>

                {/* Label Holder */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(246, 239, 226, 0.95)',
                  padding: '8px 24px',
                  borderRadius: '4px',
                  border: '2px solid rgba(0,0,0,0.3)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
                  fontFamily: "'Courier Prime', monospace"
                }}>
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: '#1a1410',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase'
                  }}>
                    {drawer.label}
                  </div>
                </div>

                {/* Case Count Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '8px',
                  right: '12px',
                  background: 'rgba(0,0,0,0.6)',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  color: '#c4a574',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  border: '1px solid rgba(196, 165, 116, 0.3)'
                }}>
                  {drawer.folders.length} FILE{drawer.folders.length > 1 ? 'S' : ''}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* File Folders (when drawer is open) */}
        {openDrawer && currentDrawer && (
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '95%',
            maxWidth: '1200px',
            height: '280px',
            padding: '2rem 2rem 3rem',
            background: 'rgba(26, 20, 16, 0.95)',
            border: '3px solid #8b7355',
            borderBottom: 'none',
            borderRadius: '12px 12px 0 0',
            boxShadow: '0 -12px 40px rgba(0,0,0,0.8)',
            backdropFilter: 'blur(10px)',
            zIndex: 30
          }}>
            {/* Drawer Label */}
            <div style={{
              position: 'absolute',
              top: '-16px',
              left: '2rem',
              background: currentDrawer.color,
              padding: '6px 20px',
              borderRadius: '6px 6px 0 0',
              border: '2px solid #1a1410',
              borderBottom: 'none',
              fontSize: '0.85rem',
              fontWeight: '700',
              color: '#f6efe2',
              letterSpacing: '0.15em',
              boxShadow: '0 -4px 12px rgba(0,0,0,0.5)'
            }}>
              {currentDrawer.label} — ACTIVE FILES
            </div>

            {/* File Folders Row */}
            <div style={{
              display: 'flex',
              gap: '0',
              overflowX: 'auto',
              overflowY: 'hidden',
              height: '100%',
              paddingBottom: '1rem',
              scrollbarWidth: 'thin',
              scrollbarColor: '#8b7355 transparent'
            }}>
              {currentDrawer.folders.map((folder, idx) => (
                <div
                  key={folder.id}
                  className={hoveredFolder === folder.id ? 'folder-hover' : ''}
                  onMouseEnter={() => setHoveredFolder(folder.id)}
                  onMouseLeave={() => setHoveredFolder(null)}
                  style={{
                    position: 'relative',
                    minWidth: '140px',
                    height: '200px',
                    marginLeft: idx === 0 ? '0' : '-20px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    zIndex: hoveredFolder === folder.id ? 100 : 50 - idx,
                    filter: hoveredFolder === folder.id ? 'brightness(1.1)' : 'brightness(1)'
                  }}
                >
                  {/* Folder Tab */}
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '20px',
                    width: '90px',
                    height: '32px',
                    background: `linear-gradient(180deg, ${currentDrawer.color}dd 0%, ${currentDrawer.color}bb 100%)`,
                    borderRadius: '6px 6px 0 0',
                    border: '2px solid rgba(0,0,0,0.3)',
                    borderBottom: 'none',
                    boxShadow: '0 -2px 6px rgba(0,0,0,0.3)',
                    zIndex: 2
                  }}>
                    <div style={{
                      fontSize: '0.65rem',
                      fontWeight: '700',
                      color: '#f6efe2',
                      textAlign: 'center',
                      marginTop: '8px',
                      letterSpacing: '0.05em',
                      textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                    }}>
                      {folder.tabTitle}
                    </div>
                  </div>

                  {/* Folder Body */}
                  <div className="paper-texture stamped" style={{
                    position: 'absolute',
                    top: '28px',
                    left: '0',
                    width: '140px',
                    height: '170px',
                    background: 'linear-gradient(135deg, #f6efe2 0%, #e8dcc8 100%)',
                    border: '3px solid #8b7355',
                    borderRadius: '0 8px 8px 8px',
                    boxShadow: `
                      0 8px 24px rgba(0,0,0,0.6),
                      inset 0 1px 0 rgba(255,255,255,0.3)
                    `,
                    zIndex: 1,
                    overflow: 'hidden'
                  }}>
                    {/* Paper lines */}
                    <div style={{
                      position: 'absolute',
                      top: '40px',
                      left: '12px',
                      right: '12px',
                      bottom: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}>
                      {[...Array(6)].map((_, i) => (
                        <div key={i} style={{
                          width: '100%',
                          height: '1px',
                          background: 'rgba(0,0,0,0.15)'
                        }} />
                      ))}
                    </div>

                    {/* Case Number */}
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      fontSize: '0.7rem',
                      fontWeight: '700',
                      color: '#8b7355',
                      fontFamily: "'Courier Prime', monospace",
                      letterSpacing: '0.05em'
                    }}>
                      #{String(idx + 1).padStart(3, '0')}
                    </div>
                  </div>

                  {/* Hover tooltip */}
                  {hoveredFolder === folder.id && (
                    <div style={{
                      position: 'absolute',
                      top: '-60px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'rgba(0,0,0,0.9)',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      border: '2px solid #c4a574',
                      fontSize: '0.75rem',
                      color: '#f6efe2',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.8)',
                      zIndex: 200,
                      pointerEvents: 'none'
                    }}>
                      {folder.fullTitle}
                      <div style={{
                        position: 'absolute',
                        bottom: '-8px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '0',
                        height: '0',
                        borderLeft: '6px solid transparent',
                        borderRight: '6px solid transparent',
                        borderTop: '8px solid #c4a574'
                      }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenDrawer(null);
              }}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(139, 115, 85, 0.3)',
                border: '2px solid #8b7355',
                color: '#f6efe2',
                padding: '6px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                transition: 'all 0.3s ease',
                fontWeight: '600',
                letterSpacing: '0.05em'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(139, 115, 85, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(139, 115, 85, 0.3)';
              }}
            >
              CLOSE ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
}