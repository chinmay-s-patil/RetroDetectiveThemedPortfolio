// app/page.jsx
import dynamic from 'next/dynamic'

const WantedLanding = dynamic(() => import('./wanted-landing/WantedLanding'), {
  loading: () => null,
})

export default function Page() {
  return (
    <main style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <WantedLanding />
    </main>
  )
}