import dynamic from 'next/dynamic'

// Lazy load heavy sections to reduce initial bundle size
const DetectiveLanding = dynamic(() => import('./Detective Landing/DetectiveLanding'), {
  loading: () => null,
})


const sectionsMeta = [
  { id: 'landing', label: 'Landing' },
]

export default function Page() {
  return (
    <>
      
      <main id="sections" aria-label="Portfolio sections">
        <section id="landing" className="section">
          <DetectiveLanding />
        </section>
      </main>
    </>
  )
}