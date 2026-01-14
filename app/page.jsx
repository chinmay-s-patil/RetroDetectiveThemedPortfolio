import dynamic from 'next/dynamic'
import NavDots from './Navigation/NavDots'
import HeaderNormalized from './components/HeaderNormalized'
import Footer from './components/Footer'

// Lazy load heavy sections to reduce initial bundle size
const LandingNormalized = dynamic(() => import('./LandingSection/LandingMap'), {
  loading: () => null,
})


const sectionsMeta = [
  { id: 'landing', label: 'Landing' },
]

export default function Page() {
  return (
    <>
      <HeaderNormalized />
      <NavDots sections={sectionsMeta} />
      
      <main id="sections" aria-label="Portfolio sections">
        <section id="landing" className="section">
          <LandingNormalized />
        </section>
      </main>
    </>
  )
}