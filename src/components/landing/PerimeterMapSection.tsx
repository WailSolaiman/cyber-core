import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { MotionSection } from './MotionSection'

/** SVG viewBox — must match coordinate system for nodes & background image. */
const VB_W = 720
const VB_H = 360

const MAP_SRC = '/world_map.jpeg'

type NodeDef = {
  id: string
  cx: number
  cy: number
  label: string
  detail: string
}

/**
 * Placed for a standard world map (Americas left, Eurasia right, Australia SE).
 * Tune if your asset is cropped differently.
 */
const NODES: NodeDef[] = [
  {
    id: 'na',
    cx: 198,
    cy: 136,
    label: 'N_AMERICA_EAST',
    detail:
      'US Northeast & Atlantic edge · regional scrubbing · sub-2ms policy sync',
  },
  {
    id: 'eu',
    cx: 352,
    cy: 124,
    label: 'EU_SOVEREIGN',
    detail: 'Western Europe mesh · GDPR-aligned logging · dedicated key custody',
  },
  {
    id: 'ap',
    cx: 626,
    cy: 138,
    label: 'EAST_ASIA_HUB',
    detail: 'Tokyo–Seoul corridor · anycast ingress · localized threat intel fusion',
  },
  {
    id: 'hq',
    cx: 566,
    cy: 206,
    label: 'SEA_PEERING',
    detail: 'Southeast Asia peering core · inter-region orchestration · low-latency handoff',
  },
  {
    id: 'sat',
    cx: 648,
    cy: 258,
    label: 'OCEANIA_UPLINK',
    detail: 'Australia SE anchor · burst telemetry · air-gapped audit handoff',
  },
]

const EDGES: [string, string][] = [
  ['na', 'eu'],
  ['eu', 'ap'],
  ['ap', 'hq'],
  ['hq', 'sat'],
  ['eu', 'hq'],
  ['na', 'hq'],
]

function nodeById(id: string) {
  return NODES.find((n) => n.id === id)!
}

export function PerimeterMapSection() {
  const [hoverId, setHoverId] = useState<string | null>(null)
  const [pinnedId, setPinnedId] = useState<string | null>(null)
  const focusId = pinnedId ?? hoverId
  const active = focusId ? nodeById(focusId) : null

  return (
    <MotionSection
      id="perimeter"
      className="section-x border-t border-outline-variant/30 bg-surface-container-lowest py-20 md:py-28"
    >
      <div className="mx-auto flex w-full min-w-0 max-w-7xl flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-16">
        <div className="max-w-full min-w-0 shrink-0 lg:max-w-xl">
          <span className="font-label mb-4 block text-xs tracking-[0.2em] text-primary-container uppercase">
            INTERACTIVE_PERIMETER_03
          </span>
          <h2 className="font-headline text-3xl leading-[0.95] font-bold tracking-tight break-words text-white sm:text-4xl md:text-5xl">
            Global mesh,
            <br />
            <span className="text-primary-container">local control</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed break-words text-on-surface-variant">
            Hover nodes to read live topology metadata. Each point sits on a key
            enforcement region over the live mesh backdrop—not a literal DC map,
            but how we trace your kinetic perimeter.
          </p>
        </div>

        <div className="relative min-h-[240px] min-w-0 flex-1 sm:min-h-[280px] lg:min-h-[320px]">
          <div className="glass-panel relative h-full min-h-[240px] overflow-hidden border border-outline-variant/30 p-3 sm:min-h-[280px] sm:p-4 md:p-6 lg:min-h-[320px]">
            <svg
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              className="h-full w-full touch-manipulation"
              role="img"
              aria-label="Global perimeter map with interactive regions"
              onClick={() => setPinnedId(null)}
            >
              <title>Perimeter topology</title>
              <defs>
                <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b494b" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#3b494b" stopOpacity="0.15" />
                </linearGradient>
                <radialGradient id="mapVignette" cx="50%" cy="45%" r="65%">
                  <stop offset="0%" stopColor="#000" stopOpacity="0" />
                  <stop offset="100%" stopColor="#000" stopOpacity="1" />
                </radialGradient>
              </defs>

              <image
                href={MAP_SRC}
                x={0}
                y={0}
                width={VB_W}
                height={VB_H}
                preserveAspectRatio="xMidYMid slice"
              />
              <rect width={VB_W} height={VB_H} fill="#0a0e1a" opacity={0.5} />
              <rect
                width={VB_W}
                height={VB_H}
                fill="url(#mapVignette)"
                opacity={0.35}
              />

              {EDGES.map(([a, b], i) => {
                const A = nodeById(a)
                const B = nodeById(b)
                return (
                  <line
                    key={`${a}-${b}-${i}`}
                    x1={A.cx}
                    y1={A.cy}
                    x2={B.cx}
                    y2={B.cy}
                    stroke="url(#edgeGrad)"
                    strokeWidth={1.25}
                  />
                )
              })}
              {NODES.map((n) => {
                const on = focusId === n.id
                return (
                  <g key={n.id}>
                    <circle
                      role="button"
                      aria-label={`${n.label}: ${n.detail}`}
                      cx={n.cx}
                      cy={n.cy}
                      r={on ? 14 : 10}
                      fill={on ? '#00f0ff' : '#0a0e1a'}
                      stroke="#00f0ff"
                      strokeWidth={on ? 2 : 1}
                      className="cursor-pointer transition-all duration-200"
                      onMouseEnter={() => setHoverId(n.id)}
                      onMouseLeave={() => setHoverId(null)}
                      onFocus={() => setHoverId(n.id)}
                      onBlur={() => setHoverId(null)}
                      onClick={(e) => {
                        e.stopPropagation()
                        setPinnedId((p) => (p === n.id ? null : n.id))
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          setPinnedId((p) => (p === n.id ? null : n.id))
                        }
                      }}
                      tabIndex={0}
                    />
                    <text
                      x={n.cx}
                      y={n.cy + 26}
                      textAnchor="middle"
                      className="select-none font-mono text-[9px] uppercase"
                      fill="#cbd5e1"
                      stroke="#0a0e1a"
                      strokeWidth={4}
                      paintOrder="stroke fill"
                      style={{ pointerEvents: 'none' }}
                    >
                      {n.label.length > 14 ? `${n.label.slice(0, 13)}…` : n.label}
                    </text>
                  </g>
                )
              })}
            </svg>

            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-4 bottom-4 left-4 border-l-2 border-primary-container bg-surface-container/95 p-4 backdrop-blur-sm md:left-auto md:max-w-sm"
                >
                  <div className="font-label mb-1 text-[10px] tracking-widest text-primary-container uppercase">
                    {active.label}
                  </div>
                  <p className="text-sm break-words text-on-surface-variant">
                    {active.detail}
                  </p>
                </motion.div>
              ) : (
                <motion.p
                  key="hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="pointer-events-none absolute right-4 bottom-4 left-4 font-label text-[10px] tracking-widest text-slate-600 uppercase md:left-auto"
                >
                  HOVER_OR_TAP_NODE
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
