'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import lockers from './lockers.jsx'

export default function EducationPage() {
  const [openLocker, setOpenLocker] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState({})
  const router = useRouter()

  

  // Auto-advance slideshow
  useEffect(() => {
    if (!openLocker) return
    
    const locker = lockers.find(l => l.id === openLocker)
    if (!locker || !locker.images) return

    const timer = setInterval(() => {
      setCurrentImageIndex(prev => ({
        ...prev,
        [openLocker]: ((prev[openLocker] || 0) + 1) % locker.images.length
      }))
    }, 4000)

    return () => clearInterval(timer)
  }, [openLocker])

  const handleLockerClick = (lockerId) => {
    const locker = lockers.find(l => l.id === lockerId)
    if (locker.locked) return
    
    setOpenLocker(openLocker === lockerId ? null : lockerId)
    if (!currentImageIndex[lockerId]) {
      setCurrentImageIndex(prev => ({ ...prev, [lockerId]: 0 }))
    }
  }

  const currentLocker = lockers.find(l => l.id === openLocker)

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
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap');

        @keyframes swingOpen {
          0% { transform: perspective(1200px) rotateY(0deg); }
          100% { transform: perspective(1200px) rotateY(-105deg); }
        }

        @keyframes swingClose {
          0% { transform: perspective(1200px) rotateY(-105deg); }
          100% { transform: perspective(1200px) rotateY(0deg); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .locker-door {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: left center;
          transform-style: preserve-3d;
        }

        .locker-door.open {
          animation: swingOpen 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .locker-door.closing {
          animation: swingClose 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .content-panel {
          animation: fadeIn 0.6s ease-out 0.3s both;
        }

        .skill-tag {
          transition: all 0.2s ease;
        }

        .skill-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(196, 165, 116, 0.4);
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
          fontFamily: "'Special Elite', monospace",
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(196, 165, 116, 0.3)'
          e.target.style.transform = 'translateX(-4px)'
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(196, 165, 116, 0.2)'
          e.target.style.transform = 'translateX(0)'
        }}
      >
        ← Back to Hub
      </button>

      {/* Main Content */}
      {!openLocker ? (
        // Locker Hall View
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: '#f6efe2',
            marginBottom: '1rem',
            textAlign: 'center',
            textShadow: '0 4px 12px rgba(0,0,0,0.8)'
          }}>
            Education Archive
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#c4a574',
            marginBottom: '4rem',
            textAlign: 'center',
            fontStyle: 'italic'
          }}>
            Select a locker to view credentials
          </p>

          <div style={{
            display: 'flex',
            gap: '3rem',
            alignItems: 'flex-end',
            perspective: '1000px'
          }}>
            {lockers.map((locker, idx) => (
              <div
                key={locker.id}
                onClick={() => handleLockerClick(locker.id)}
                style={{
                  width: '240px',
                  height: locker.locked ? '320px' : '400px',
                  background: `linear-gradient(135deg, ${locker.color} 0%, ${locker.color}dd 100%)`,
                  borderRadius: '8px 8px 4px 4px',
                  position: 'relative',
                  cursor: locker.locked ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  border: '3px solid rgba(0,0,0,0.3)',
                  boxShadow: `
                    0 20px 60px rgba(0,0,0,0.6),
                    inset 0 1px 0 rgba(255,255,255,0.1),
                    inset 0 -1px 0 rgba(0,0,0,0.3)
                  `,
                  transform: locker.locked ? 'scale(0.9)' : 'scale(1)',
                  opacity: locker.locked ? 0.6 : 1,
                  filter: locker.locked ? 'grayscale(0.3)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!locker.locked) {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'
                    e.currentTarget.style.boxShadow = `
                      0 30px 80px rgba(0,0,0,0.7),
                      0 0 40px ${locker.color}66,
                      inset 0 1px 0 rgba(255,255,255,0.2)
                    `
                  }
                }}
                onMouseLeave={(e) => {
                  if (!locker.locked) {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = `
                      0 20px 60px rgba(0,0,0,0.6),
                      inset 0 1px 0 rgba(255,255,255,0.1),
                      inset 0 -1px 0 rgba(0,0,0,0.3)
                    `
                  }
                }}
              >
                {/* Locker Vents */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  right: '20px',
                  height: '60px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}>
                  {[...Array(6)].map((_, i) => (
                    <div key={i} style={{
                      width: '100%',
                      height: '2px',
                      background: 'rgba(0,0,0,0.4)',
                      boxShadow: '0 1px 0 rgba(255,255,255,0.1)'
                    }} />
                  ))}
                </div>

                {/* Locker Number Plate */}
                <div style={{
                  position: 'absolute',
                  top: '100px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(0,0,0,0.6)',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  border: '2px solid rgba(255,255,255,0.1)',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'
                }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: locker.locked ? '#666' : '#f6efe2',
                    fontFamily: "'Crimson Text', serif",
                    textAlign: 'center',
                    textShadow: '0 0 10px rgba(246, 239, 226, 0.5)'
                  }}>
                    {locker.number}
                  </div>
                </div>

                {/* Label Plate */}
                <div style={{
                  position: 'absolute',
                  top: '180px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#f6efe2',
                  padding: '8px 20px',
                  borderRadius: '4px',
                  border: '1px solid rgba(0,0,0,0.2)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: locker.color,
                    fontFamily: "'Special Elite', monospace"
                  }}>
                    {locker.label}
                  </div>
                </div>

                {/* Lock/Handle */}
                {locker.locked ? (
                  <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '3rem'
                  }}>
                    🔒
                  </div>
                ) : (
                  <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '40px',
                    height: '80px',
                    background: 'linear-gradient(90deg, #1a1a1a, #2a2a2a, #1a1a1a)',
                    borderRadius: '6px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1)',
                    border: '1px solid rgba(0,0,0,0.3)'
                  }} />
                )}

                {/* Locked Message */}
                {locker.locked && (
                  <div style={{
                    position: 'absolute',
                    bottom: '-60px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    width: '200px'
                  }}>
                    <div style={{
                      fontSize: '0.9rem',
                      color: '#c4a574',
                      fontStyle: 'italic',
                      marginBottom: '4px'
                    }}>
                      {locker.message}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#8b7355',
                      fontStyle: 'italic'
                    }}>
                      {locker.subtitle}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Opened Locker Content
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          position: 'relative'
        }}>
          {/* Close Button */}
          <button
            onClick={() => setOpenLocker(null)}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'rgba(196, 165, 116, 0.2)',
              border: '2px solid #8b7355',
              color: '#f6efe2',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
              zIndex: 1000,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(196, 165, 116, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(196, 165, 116, 0.2)'
            }}
          >
            ✕ Close
          </button>

          <div className="content-panel" style={{
            maxWidth: '1400px',
            width: '100%',
            height: '85%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            {/* Left: Poster */}
            <div style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              animation: 'slideIn 0.5s ease-out'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #f6efe2 0%, #e8dcc8 100%)',
                padding: '3rem',
                borderRadius: '12px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
                border: '8px solid #3d2817',
                position: 'relative'
              }}>
                {/* Tape Effect */}
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '20%',
                  width: '60px',
                  height: '24px',
                  background: 'rgba(245, 238, 210, 0.8)',
                  transform: 'rotate(-5deg)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '20%',
                  width: '60px',
                  height: '24px',
                  background: 'rgba(245, 238, 210, 0.8)',
                  transform: 'rotate(5deg)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }} />

                {/* Institution */}
                <div style={{
                  fontSize: '0.9rem',
                  color: currentLocker.color,
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                  fontFamily: "'Special Elite', monospace"
                }}>
                  {currentLocker.shortName}
                </div>

                {/* Title */}
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1a1a1a',
                  marginBottom: '0.5rem',
                  fontFamily: "'Crimson Text', serif"
                }}>
                  {currentLocker.title}
                </h2>

                {/* Degree */}
                <div style={{
                  fontSize: '1.5rem',
                  color: currentLocker.color,
                  fontWeight: '600',
                  marginBottom: '1.5rem',
                  fontFamily: "'Crimson Text', serif"
                }}>
                  {currentLocker.degree}
                </div>

                {/* Institution Full */}
                <div style={{
                  fontSize: '1.1rem',
                  color: '#4a4a4a',
                  marginBottom: '0.5rem',
                  fontFamily: "'Special Elite', monospace"
                }}>
                  {currentLocker.institution}
                </div>

                {/* Period & Location */}
                <div style={{
                  fontSize: '0.95rem',
                  color: '#666',
                  marginBottom: '2rem',
                  fontStyle: 'italic'
                }}>
                  {currentLocker.period} • {currentLocker.location}
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: '#2a2a2a',
                  marginBottom: '2rem',
                  fontFamily: "'Crimson Text', serif"
                }}>
                  {currentLocker.description}
                </p>

                {/* Quick Stats */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  marginBottom: '2rem',
                  paddingTop: '1.5rem',
                  borderTop: '2px solid rgba(0,0,0,0.1)'
                }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.25rem' }}>Focus Area</div>
                    <div style={{ fontSize: '1rem', color: '#1a1a1a', fontWeight: '600' }}>{currentLocker.focus}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.25rem' }}>Achievement</div>
                    <div style={{ fontSize: '1rem', color: '#1a1a1a', fontWeight: '600' }}>{currentLocker.gpa}</div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <div style={{
                    fontSize: '0.85rem',
                    color: '#666',
                    marginBottom: '0.75rem',
                    fontWeight: '600',
                    letterSpacing: '0.05em'
                  }}>
                    KEY COMPETENCIES
                  </div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {currentLocker.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="skill-tag"
                        style={{
                          padding: '0.5rem 1rem',
                          background: currentLocker.color,
                          color: '#f6efe2',
                          borderRadius: '6px',
                          fontSize: '0.85rem',
                          fontWeight: '500',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Photo Wall */}
            <div style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}>
              {/* Main Slideshow */}
              <div style={{
                flex: 1,
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
                border: '8px solid #3d2817'
              }}>
                {currentLocker.images.map((img, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: idx === (currentImageIndex[openLocker] || 0) ? 1 : 0,
                      transition: 'opacity 1s ease-in-out'
                    }}
                  >
                    <img
                      src={img}
                      alt={`${currentLocker.institution} ${idx + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                ))}

                {/* Image Counter */}
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  background: 'rgba(0,0,0,0.7)',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  color: '#f6efe2',
                  fontSize: '0.9rem',
                  fontFamily: "'Special Elite', monospace"
                }}>
                  {(currentImageIndex[openLocker] || 0) + 1} / {currentLocker.images.length}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                overflowX: 'auto',
                paddingBottom: '0.5rem'
              }}>
                {currentLocker.images.slice(0, 6).map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setCurrentImageIndex(prev => ({ ...prev, [openLocker]: idx }))}
                    style={{
                      minWidth: '80px',
                      height: '60px',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: idx === (currentImageIndex[openLocker] || 0) ? '3px solid #c4a574' : '3px solid transparent',
                      opacity: idx === (currentImageIndex[openLocker] || 0) ? 1 : 0.6,
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = 1
                      e.currentTarget.style.transform = 'scale(1.1)'
                    }}
                    onMouseLeave={(e) => {
                      if (idx !== (currentImageIndex[openLocker] || 0)) {
                        e.currentTarget.style.opacity = 0.6
                      }
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}