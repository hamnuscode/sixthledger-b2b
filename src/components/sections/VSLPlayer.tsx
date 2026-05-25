import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function VSLPlayer() {
  const [played, setPlayed] = useState(false)

  return (
    <div className="relative w-full">
      {/* Lime glow beneath */}
      <div
        className="absolute -bottom-4 left-4 right-4 h-8 rounded-full blur-xl pointer-events-none"
        style={{ background: 'rgba(200,232,74,0.12)' }}
        aria-hidden="true"
      />

      <div
        className="relative rounded-sm overflow-hidden border border-smoke"
        style={{ background: 'var(--coal)' }}
      >
        {/* Lime accent rule at top */}
        <div className="h-px bg-lime w-full" aria-hidden="true" />

        {/* Player area */}
        <div className="relative" style={{ aspectRatio: '16/9' }}>
          {!played ? (
            <>
              {/* Cinematic dark background */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #0a0a0a 0%, #151510 40%, #0f0f08 100%)',
                }}
              />
              {/* Warm amber rim light */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 60% 80% at 75% 40%, rgba(180,130,60,0.14) 0%, transparent 65%)',
                }}
                aria-hidden="true"
              />

              {/* Pull quote overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                <p
                  className="font-display text-xl md:text-2xl text-bone italic leading-snug mb-6 max-w-sm"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  "The answer to your capacity crunch — without the hiring risk."
                </p>

                <button
                  onClick={() => setPlayed(true)}
                  className="group relative w-16 h-16 rounded-full border border-lime flex items-center justify-center transition-all duration-200 hover:bg-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                  style={{ background: 'rgba(15,15,15,0.8)' }}
                  aria-label="Play introduction video"
                >
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    className="ml-1 transition-colors text-lime group-hover:text-obsidian"
                    aria-hidden="true"
                  >
                    <path d="M1 1l16 9-16 9V1z" fill="currentColor" />
                  </svg>
                </button>

                <div className="mt-4 flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs text-ash uppercase tracking-label">
                    Introduction · 4 minutes
                  </span>
                </div>
              </div>

              {/* Presenter credit */}
              <div className="absolute bottom-4 left-5">
                <p className="font-mono text-xs text-ash uppercase tracking-label">
                  Shayan Ahmed Shujaat · CEO
                </p>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
              <span className="font-mono text-xs text-lime uppercase tracking-label">
                Coming soon
              </span>
              <p className="font-body text-sm text-bone max-w-xs leading-relaxed">
                The introduction video is being recorded.{' '}
                <Link to="/contact" className="text-lime hover:underline">
                  Book a call directly →
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
