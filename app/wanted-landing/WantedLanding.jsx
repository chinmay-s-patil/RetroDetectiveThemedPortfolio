// app/wanted-landing/WantedLanding.jsx
'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import styles from './WantedLanding.module.css'

export default function WantedLanding() {
  const router = useRouter()

  const handleInvestigate = () => {
    router.push('/hub')
  }

  return (
    <div className={styles.landing}>
      <div className={styles.backgroundTexture} />
      
      <div className={styles.posterContainer}>
        {/* Corner pins */}
        <div className={styles.pin} style={{ top: '-12px', left: '48%' }} />
        <div className={styles.pin} style={{ top: '20px', right: '-8px' }} />
        <div className={styles.pin} style={{ bottom: '30px', left: '-8px' }} />
        
        <div className={styles.poster}>
          {/* Aging effects */}
          <div className={styles.paperGrain} />
          <div className={styles.coffeeStain} style={{ top: '5%', right: '8%' }} />
          <div className={styles.coffeeStain} style={{ bottom: '12%', left: '6%', opacity: 0.15 }} />
          
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.wantedText}>WANTED</div>
            <div className={styles.subtitle}>FOR ENGINEERING CRIMES</div>
          </div>

          {/* Portrait with tape */}
          <div className={styles.portraitSection}>
            <div className={styles.tapeLeft} />
            <div className={styles.tapeRight} />
            <div className={styles.photoFrame}>
              <img 
                src="/portrait.jpg" 
                alt="Portrait of Chinmay S Patil styled as wanted poster"
                className={styles.photo}
                loading="eager"
              />
              <div className={styles.photoDistress} />
            </div>
          </div>

          {/* Identity block */}
          <div className={styles.identityBlock}>
            <div className={styles.identityRow}>
              <span className={styles.label}>NAME:</span>
              <span className={styles.value}>CHINMAY S. PATIL</span>
            </div>
            <div className={styles.identityRow}>
              <span className={styles.label}>ALIAS:</span>
              <span className={styles.value}>"CHIN DOES SIMS"</span>
            </div>
            <div className={styles.identityRow}>
              <span className={styles.label}>LAST SEEN:</span>
              <span className={styles.value}>CFD LAB / TERMINAL</span>
            </div>
            <div className={styles.identityRow}>
              <span className={styles.label}>SPECIALTY:</span>
              <span className={styles.value}>SIMULATION & VISUALIZATION</span>
            </div>
          </div>

          {/* Description */}
          <div className={styles.description}>
            <div className={styles.descriptionTitle}>DESCRIPTION</div>
            <p className={styles.descriptionText}>
              Known for building CFD pipelines, optimization workflows, and 
              visualization tools. Frequently spotted working with OpenFOAM, 
              Python, and large datasets. Approach with curiosity and good 
              documentation.
            </p>
          </div>

          {/* Charges */}
          <div className={styles.chargesSection}>
            <div className={styles.chargesTitle}>CHARGES</div>
            <ul className={styles.chargesList}>
              <li>CFD & OpenFOAM Mastery</li>
              <li>Simulation Automation</li>
              <li>3D & Scientific Visualization</li>
              <li>ML-Assisted Optimization</li>
            </ul>
          </div>

          {/* Active stamp */}
          <div className={styles.activeStamp}>
            <div className={styles.stampInner}>
              ACTIVE<br/>CASE
            </div>
          </div>

          {/* Reward section */}
          <div className={styles.rewardSection}>
            <div className={styles.rewardTitle}>REWARD</div>
            <div className={styles.rewardItems}>
              <div className={styles.rewardItem}>INSIGHTFUL CONVERSATIONS</div>
              <div className={styles.rewardItem}>COLLABORATIONS</div>
              <div className={styles.rewardItem}>ENGINEERING WORK</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className={styles.ctaContainer}>
            <button 
              onClick={handleInvestigate}
              className={styles.investigateBtn}
              aria-label="Investigate Chinmay Patil's work"
            >
              INVESTIGATE CASE →
            </button>
          </div>

          {/* Case ID footer */}
          <div className={styles.caseId}>
            CASE FILE ID: CSP-2412
          </div>
        </div>
      </div>
    </div>
  )
}