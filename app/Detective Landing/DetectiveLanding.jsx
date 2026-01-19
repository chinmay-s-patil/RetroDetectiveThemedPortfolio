'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import styles from './DetectiveLanding.module.css'

export default function DetectiveLanding() {
  const router = useRouter()

  const handleLookAround = () => {
    router.push('/hub')
  }

  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <div className={styles.backgroundLayer} />

        <div className={styles.corkBoard}>
          <div className={styles.vignette} />

          {/* Google Map - static image only */}
          <div className={styles.mapContainer}>
            <div className={styles.tape} style={{ top: -8, left: -8, transform: 'rotate(-45deg)', width: 50, height: 18 }} />
            <div className={styles.tape} style={{ top: -8, right: -8, transform: 'rotate(45deg)', width: 50, height: 18 }} />
            <div className={styles.tape} style={{ bottom: -8, left: -8, transform: 'rotate(45deg)', width: 50, height: 18 }} />
            <div className={styles.tape} style={{ bottom: -8, right: -8, transform: 'rotate(-45deg)', width: 50, height: 18 }} />
            
            <div className={styles.mapFrame}>
              <img src="/Assets/GMap.png" alt="Munich Map" loading="lazy" />
              
              {/* Simplified SVG overlay - removed */}
              <div className={styles.mapMarker} style={{ left: '55%', top: '18%' }} />
              <div className={styles.mapMarker} style={{ left: '48%', top: '52%' }} />
              <div className={styles.mapMarker} style={{ left: '65%', top: '72%' }} />
              <div className={styles.mapMarker} style={{ left: '72%', top: '55%' }} />
              <div className={styles.mapMarker} style={{ left: '32%', top: '65%' }} />
              <div className={styles.mapMarker} style={{ left: '72%', top: '85%' }} />
            </div>
          </div>

          {/* Portrait Photo */}
          <div className={styles.portraitContainer}>
            <div className={styles.tape} style={{ top: -10, left: 36, transform: 'rotate(-6deg)', width: 70, height: 20 }} />
            <div className={styles.tape} style={{ top: -14, right: 36, transform: 'rotate(8deg)', width: 70, height: 20 }} />
            <div className={styles.polaroid}>
              <img src="/portrait.jpg" alt="Portrait" loading="lazy" />
            </div>
          </div>

          {/* Handprint */}
          <div className={styles.handprintContainer}>
            <div className={styles.handprintFrame}>
              <img src="./Assets/handPrint.png" alt="Handprint" loading="lazy" />
            </div>
          </div>

          {/* Field Notes */}
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

          {/* Panoramic Photo */}
          <div className={styles.panoramicContainer}>
            <div className={styles.tape} style={{ top: -12, left: 80, transform: 'rotate(-2deg)', width: 80, height: 22 }} />
            <div className={styles.tape} style={{ top: -8, right: 70, transform: 'rotate(6deg)', width: 80, height: 22 }} />
            <div className={styles.polaroid}>
              <img src="/Me2-3x8.jpg" alt="Panoramic" loading="lazy" />
            </div>
          </div>

          {/* Sticky Notes */}
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