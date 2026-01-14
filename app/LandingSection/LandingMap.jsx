'use client'

import React from 'react'

export default function LandingMap() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#e6d7c7] to-[#d7c0a6] p-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&display=swap');

        .paper {
          background: linear-gradient(180deg,#fbf7ef 0%, #f6efe1 100%);
          box-shadow: 0 24px 50px rgba(6,10,15,0.45);
          border-radius: 10px;
          border: 1px solid rgba(10,10,10,0.05);
        }

        .tape {
          width: 110px;
          height: 28px;
          background: linear-gradient(90deg,#fff3b0 0%, #ffe27a 100%);
          box-shadow: 0 6px 18px rgba(0,0,0,0.12);
          transform: rotate(-6deg);
          border-radius: 3px;
          opacity: 0.95;
        }

        .tape2 {
          transform: rotate(8deg);
        }

        .sticky-note {
          background: linear-gradient(180deg,#fff6b8 0%, #fff09d 100%);
          width: 140px;
          height: 120px;
          padding: 12px;
          box-shadow: 0 18px 40px rgba(0,0,0,0.18);
          border-radius: 6px;
          font-family: 'Kalam', cursive;
        }

        .hotspot {
          width: 64px;
          height: 64px;
          border-radius: 8px;
          background: rgba(255,255,255,0.03);
          border: 2px solid rgba(255,255,255,0.9);
          display: grid;
          place-items: center;
          transition: transform .15s ease, box-shadow .15s ease;
        }

        .hotspot:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 12px 28px rgba(0,0,0,0.25);
        }

        .map-photo {
          width: 260px;
          height: 170px;
          object-fit: cover;
          border-radius: 6px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.25);
          border: 1px solid rgba(0,0,0,0.06);
        }

        .white-border-clickable {
          outline: 3px solid rgba(255,255,255,0.0);
          transition: outline-color .12s ease, transform .12s ease;
        }

        .white-border-clickable:hover,
        .white-border-clickable:focus {
          outline-color: rgba(255,255,255,0.95);
          transform: translateY(-4px);
        }
      `}</style>

      <div className="relative paper w-[1200px] max-w-full h-[760px] p-10 flex gap-8">
        {/* left column: map visual */}
        <div className="relative flex-1 flex flex-col justify-between">
          {/* Map area (big) */}
          <div className="relative bg-[url('/images/blank-map-texture.jpg')] bg-cover bg-center rounded-md flex-1 p-6 overflow-hidden">
            {/* taped photo */}
            <div className="absolute left-10 top-8">
              <div className="relative">
                <img src="/portrait.jpg" alt="taped photo" className="map-photo" />
                <div className="absolute -top-3 left-4 tape" style={{ transform: 'rotate(-6deg)' }} />
                <div className="absolute -top-3 left-36 tape tape2" style={{ transform: 'rotate(8deg)' }} />
              </div>
              <div className="mt-2 text-sm text-[#222] font-manrope" style={{ fontFamily: 'Manrope, sans-serif' }}>
                "field notes" — Munich lab
              </div>
            </div>

            {/* hotspots (example clickable objects) */}
            <button aria-label="Open Projects drawer" className="absolute white-border-clickable hotspot left-[48%] top-[28%]" title="Projects">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 7h18" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 12h18" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 17h18" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </button>

            <button aria-label="Open CAD console" className="absolute white-border-clickable hotspot left-[28%] top-[56%]" title="CAD">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 7h16v10H4z" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 12h6" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </button>

            <button aria-label="Open OpenFOAM bookshelf" className="absolute white-border-clickable hotspot left-[68%] top-[62%]" title="OpenFOAM">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M6 3v18" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 3v18" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18 3v18" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </button>

            {/* subtle paper notes on map */}
            <div className="absolute right-12 bottom-10 w-[300px] text-sm text-[#1b1b1b]">
              <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 16 }}>Key</div>
              <div style={{ marginTop: 6, fontSize: 14 }}>
                • Projects (file drawer)
                <br />• CAD (cartridge console)
                <br />• OpenFOAM (bookshelf)
              </div>
            </div>
          </div>

          {/* sticky notes row */}
          <div className="mt-6 flex gap-4">
            <div className="sticky-note">
              <div style={{ fontSize: 14, color: '#222' }}>Aerospace · CFD</div>
              <div style={{ fontSize: 12, marginTop: 10 }}>- OpenFOAM case studies
- Aeroacoustics</div>
            </div>

            <div className="sticky-note rotate-[-4deg]">
              <div style={{ fontSize: 14, color: '#222' }}>Tools</div>
              <div style={{ fontSize: 12, marginTop: 10 }}>- Python, ParaView
- Blender, FEA</div>
            </div>

            <div className="sticky-note rotate-[6deg]">
              <div style={{ fontSize: 14, color: '#222' }}>Contact</div>
              <div style={{ fontSize: 12, marginTop: 10 }}>chinmaypatil2412@gmail.com</div>
            </div>
          </div>
        </div>

        {/* right column: info panel */}
        <div className="w-[340px] flex flex-col gap-6">
          <div className="bg-white/6 p-4 rounded-md">
            <h3 className="text-white font-semibold text-lg">Detective file — Chinmay</h3>
            <p className="mt-2 text-sm text-white/80">CFD student who builds simulation pipelines, visual tools, and interactive models. Explore the archive — click anything with a white border.</p>
          </div>

          <div className="bg-white/6 p-4 rounded-md flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-md grid place-items-center">🎓</div>
            <div>
              <div className="text-sm font-semibold">Education</div>
              <div className="text-xs text-white/70">BTech, Aerospace Engineering</div>
            </div>
          </div>

          <div className="bg-white/6 p-4 rounded-md flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-md grid place-items-center">🛠️</div>
            <div>
              <div className="text-sm font-semibold">Core</div>
              <div className="text-xs text-white/70">CFD · Python · OpenFOAM</div>
            </div>
          </div>

          <div className="mt-auto flex justify-center">
            <button className="px-8 py-3 rounded-full bg-white text-black font-semibold shadow-md hover:translate-y-[-2px]" aria-label="Look around">
              Look around
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
