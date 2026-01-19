'use client'

import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'
import styles from './DetectiveLanding.module.css'

export default function DetectiveLanding() {
  const containerRef = useRef(null)
  const router = useRouter()

  const handleLookAround = () => {
    router.push('/hub')
  }

  return (
    <div className={styles.landing}>
      {/* SVG Pattern Definition */}
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

      <div className={styles.container} ref={containerRef}>
        <div className={styles.backgroundLayer} />

        <div className={styles.corkBoard}>
          <div className={styles.vignette} />

          {/* Google Map */}
          <MapSection />

          {/* Portrait Photo */}
          <PortraitSection />

          {/* Handprint */}
          <HandprintSection />

          {/* Field Notes */}
          <FieldNotesSection />

          {/* Panoramic Photo */}
          <PanoramicSection />

          {/* Sticky Notes */}
          <StickyNotes />
        </div>

        {/* Look Around Button */}
        <div className={styles.buttonContainer}>
          <button onClick={handleLookAround} className={styles.lookBtn} aria-label="Look around">
            LOOK AROUND
          </button>
        </div>
      </div>
    </div>
  )
}

// Split into smaller components
function MapSection() {
  return (
    <div className={styles.mapContainer}>
      <Tape top={-8} left={-8} rotate={-45} width={50} height={18} />
      <Tape top={-8} right={-8} rotate={45} width={50} height={18} />
      <Tape bottom={-8} left={-8} rotate={45} width={50} height={18} />
      <Tape bottom={-8} right={-8} rotate={-45} width={50} height={18} />
      
      <div className={styles.mapFrame}>
        <img src="/Assets/GMap.png" alt="Munich Map" />
        
        <svg className={styles.mapOverlay}>
          <circle cx="55%" cy="18%" r="6" fill="#d32f2f" stroke="#fff" strokeWidth="2"/>
          <circle cx="48%" cy="52%" r="6" fill="#d32f2f" stroke="#fff" strokeWidth="2"/>
          <circle cx="65%" cy="72%" r="6" fill="#d32f2f" stroke="#fff" strokeWidth="2"/>
          <circle cx="72%" cy="55%" r="6" fill="#d32f2f" stroke="#fff" strokeWidth="2"/>
          <circle cx="32%" cy="65%" r="6" fill="#d32f2f" stroke="#fff" strokeWidth="2"/>
          <circle cx="72%" cy="85%" r="6" fill="#d32f2f" stroke="#fff" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  )
}

function PortraitSection() {
  return (
    <div className={styles.portraitContainer}>
      <Tape top={-10} left={36} rotate={-6} width={70} height={20} />
      <Tape top={-14} right={36} rotate={8} width={70} height={20} />
      <div className={styles.polaroid}>
        <img src="/portrait.jpg" alt="Portrait" style={{ filter: 'sepia(0.22) contrast(1.08)' }} />
      </div>
    </div>
  )
}

function HandprintSection() {
  return (
    <div className={styles.handprintContainer}>
      <div className={styles.handprintFrame}>
        <img src="./Assets/handPrint.png" alt="Handprint" />
      </div>
    </div>
  )
}

function FieldNotesSection() {
  return (
    <div className={styles.fieldNotes}>
      <div className={styles.fieldNotesTitle}>FIELD NOTES</div>
      <div className={styles.fieldNotesLabel}>Subject:</div> Chinmay Patil<br />
      <div className={styles.fieldNotesLabel} style={{ marginTop: 8 }}>Previous Known Location:</div> Munich<br />
      <div className={styles.fieldNotesLabel} style={{ marginTop: 8 }}>Specialty:</div> CFD / Aeroacoustics / Visual tools
      <div className={styles.fieldNotesSkills}>Key Skills:</div>
      <ul>
        <li>OpenFOAM & CFD pipelines</li>
        <li>Python tooling / automation</li>
        <li>Aeroacoustics analysis</li>
      </ul>
      <div className={styles.pushPin} style={{ left: '50%', top: -10, transform: 'translateX(-50%)' }} />
    </div>
  )
}

function PanoramicSection() {
  return (
    <div className={styles.panoramicContainer}>
      <Tape top={-12} left={80} rotate={-2} width={80} height={22} />
      <Tape top={-8} right={70} rotate={6} width={80} height={22} />
      <div className={styles.polaroid}>
        <img src="/Me2-3x8.jpg" alt="Panoramic" style={{ filter: 'sepia(0.15) contrast(1.04)' }} />
      </div>
    </div>
  )
}

function StickyNotes() {
  return (
    <>
      <div className={`${styles.sticky} ${styles.stickyContact}`}>
        <div className={styles.stickyTitle}>CONTACT</div>
        <div className={styles.stickyContent}>patil.chinmay3031@gmail.com</div>
        <div className={styles.pushPin} style={{ left: '50%', top: -9, transform: 'translateX(-50%)' }} />
      </div>

      <div className={`${styles.sticky} ${styles.stickyTools}`}>
        <div style={{ fontSize: 14, marginBottom: 6, textDecoration: 'underline' }}>TOOLS</div>
        <div style={{ fontSize: 11, lineHeight: 1.5 }}>
          • OpenFOAM<br />
          • ParaView<br />
          • Python<br />
          • Git
        </div>
        <div className={styles.pushPin} style={{ left: '50%', top: -9, transform: 'translateX(-50%)' }} />
      </div>

      <div className={`${styles.sticky} ${styles.stickyEducation}`}>
        <div style={{ fontSize: 14, marginBottom: 6, textDecoration: 'underline' }}>EDUCATION</div>
        <div style={{ fontSize: 11, lineHeight: 1.5 }}>
          M.Sc. Aerospace<br />
          Engineering<br />
          TU Munich
        </div>
        <div className={styles.pushPin} style={{ left: '50%', top: -9, transform: 'translateX(-50%)' }} />
      </div>

      <div className={`${styles.sticky} ${styles.stickyStatus}`}>
        <div style={{ fontSize: 13, marginBottom: 6, textDecoration: 'underline' }}>STATUS</div>  
        <div style={{ fontSize: 10, lineHeight: 1.4 }}>
          Currently seeking<br />
          opportunities in<br />
          CFD & simulation
        </div>
        <div className={styles.pushPin} style={{ left: '50%', top: -9, transform: 'translateX(-50%)' }} />
      </div>
    </>
  )
}

function Tape({ top, bottom, left, right, rotate, width, height }) {
  const style = {
    ...(top !== undefined && { top }),
    ...(bottom !== undefined && { bottom }),
    ...(left !== undefined && { left }),
    ...(right !== undefined && { right }),
    transform: `rotate(${rotate}deg)`,
    width,
    height
  }
  
  return <div className={styles.tape} style={style} />
}