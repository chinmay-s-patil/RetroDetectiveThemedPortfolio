import dynamic from 'next/dynamic'

const DetectiveLanding = dynamic(() => import('./Detective Landing/DetectiveLanding'), {
  loading: () => null,
})

export default function Page() {
  return (
    <main style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <DetectiveLanding />
    </main>
  )
}