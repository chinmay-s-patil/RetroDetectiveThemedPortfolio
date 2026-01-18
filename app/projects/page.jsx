// app/projects/page.jsx
'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import projectsData from './projectsData'
import dynamic from 'next/dynamic'

// Dynamically import ProjectFolder to avoid loading media initially
const ProjectFolder = dynamic(() => import('./ProjectFolder'), {
  loading: () => null,
  ssr: false
})

export default function ProjectsPage() {
  const [openDrawer, setOpenDrawer] = useState(null)
  const [selectedFolder, setSelectedFolder] = useState(null)
  const [hoveredDrawer, setHoveredDrawer] = useState(null)
  const router = useRouter()

  const handleDrawerClick = (drawerId) => {
    if (openDrawer === drawerId) {
      setOpenDrawer(null)
    } else {
      setOpenDrawer(drawerId)
      setSelectedFolder(null)
    }
  }

  const handleFolderClick = (folder) => {
    setSelectedFolder(folder)
  }

  const closeFolder = () => {
    setSelectedFolder(null)
  }

  const currentDrawer = projectsData.drawers.find(d => d.id === openDrawer)

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

        @keyframes drawerPull {
          0% { transform: translateY(0); }
          100% { transform: translateY(-60px); }
        }

        @keyframes folderSlideOut {
          0% { transform: translateX(20px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .drawer-pull {
          animation: drawerPull 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .folder-tab {
          transition: all 0.3s ease;
        }

        .folder-tab:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 12px 32px rgba(196, 165, 116, 0.4);
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

      {!selectedFolder ? (
        // Drawer Cabinet View
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
            Project Archives
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#c4a574',
            marginBottom: '4rem',
            textAlign: 'center',
            fontStyle: 'italic'
          }}>
            Click a drawer to browse case files
          </p>

          {/* Filing Cabinet */}
          <div style={{
            position: 'relative',
            width: 'clamp(400px, 60vw, 800px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1px',
            background: '#2a2a2a',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
            border: '4px solid #1a1a1a'
          }}>
            {projectsData.drawers.map((drawer, index) => (
              <div
                key={drawer.id}
                onClick={() => handleDrawerClick(drawer.id)}
                onMouseEnter={() => setHoveredDrawer(drawer.id)}
                onMouseLeave={() => setHoveredDrawer(null)}
                className={openDrawer === drawer.id ? 'drawer-pull' : ''}
                style={{
                  position: 'relative',
                  height: '100px',
                  background: `linear-gradient(135deg, ${drawer.color} 0%, ${drawer.color}dd 100%)`,
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: '2px solid rgba(0,0,0,0.3)',
                  boxShadow: hoveredDrawer === drawer.id 
                    ? `0 8px 24px ${drawer.color}66`
                    : '0 4px 12px rgba(0,0,0,0.4)',
                  transform: hoveredDrawer === drawer.id && openDrawer !== drawer.id
                    ? 'translateY(-4px)'
                    : 'translateY(0)',
                  zIndex: openDrawer === drawer.id ? 10 : index
                }}
              >
                {/* Drawer Handle */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '120px',
                  height: '40px',
                  background: 'linear-gradient(180deg, #1a1a1a, #2a2a2a)',
                  borderRadius: '8px',
                  border: '2px solid rgba(0,0,0,0.5)',
                  boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.1), 0 4px 8px rgba(0,0,0,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '80px',
                    height: '6px',
                    background: 'linear-gradient(90deg, #4a4a4a, #2a2a2a, #4a4a4a)',
                    borderRadius: '3px'
                  }} />
                </div>

                {/* Drawer Label */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '20px',
                  background: 'rgba(246, 239, 226, 0.95)',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  border: '1px solid rgba(0,0,0,0.2)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  fontFamily: "'Crimson Text', serif",
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: drawer.color
                }}>
                  {drawer.label}
                </div>

                {/* Folder Count Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '20px',
                  background: 'rgba(0,0,0,0.6)',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  color: '#f6efe2',
                  fontWeight: '600'
                }}>
                  {drawer.folders.length} {drawer.folders.length === 1 ? 'Case' : 'Cases'}
                </div>
              </div>
            ))}
          </div>

          {/* Folder View (when drawer is open) */}
          {openDrawer && currentDrawer && (
            <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90%',
                maxWidth: '1200px',
                padding: '2rem',
                background: 'rgba(196, 165, 116, 0.15)',
                border: '3px solid #8b7355',
                borderRadius: '12px',
                boxShadow: '0 -8px 32px rgba(0,0,0,0.6)',
                animation: 'fadeIn 0.4s ease',
                maxHeight: '40vh',
                overflowY: 'auto'
                }}>
                <h2 style={{
                fontSize: '1.8rem',
                color: '#f6efe2',
                marginBottom: '1.5rem',
                fontFamily: "'Crimson Text', serif"
                }}>
                {currentDrawer.label}
                </h2><div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            {currentDrawer.folders.map((folder, idx) => (
              <div
                key={folder.id}
                onClick={() => handleFolderClick(folder)}
                className="folder-tab"
                style={{
                  height: '80px',
                  background: `linear-gradient(135deg, ${currentDrawer.color}cc 0%, ${currentDrawer.color}aa 100%)`,
                  borderRadius: '6px 6px 0 0',
                  cursor: 'pointer',
                  padding: '1rem',
                  border: '2px solid rgba(0,0,0,0.3)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: `folderSlideOut 0.3s ease ${idx * 0.05}s both`
                }}
              >
                {/* Folder Tab */}
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '10px',
                  width: '60%',
                  height: '20px',
                  background: `linear-gradient(135deg, ${currentDrawer.color}dd 0%, ${currentDrawer.color}bb 100%)`,
                  borderRadius: '6px 6px 0 0',
                  border: '2px solid rgba(0,0,0,0.3)',
                  borderBottom: 'none'
                }} />

                <div style={{
                  fontSize: '0.95rem',
                  color: '#f6efe2',
                  fontWeight: '600',
                  lineHeight: '1.3',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}>
                  {folder.title}
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '8px',
                  right: '8px',
                  fontSize: '0.75rem',
                  color: 'rgba(246, 239, 226, 0.7)',
                  fontStyle: 'italic'
                }}>
                  {folder.period.split(' ')[0]}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              setOpenDrawer(null)
            }}
            style={{
              marginTop: '1.5rem',
              background: 'rgba(139, 115, 85, 0.3)',
              border: '2px solid #8b7355',
              color: '#f6efe2',
              padding: '0.5rem 1.5rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(139, 115, 85, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(139, 115, 85, 0.3)'
            }}
          >
            Close Drawer
          </button>
        </div>
      )}
    </div>
  ) : (
    // Project Folder Detail View
    <ProjectFolder project={selectedFolder} onClose={closeFolder} />
  )}
</div>
)
}