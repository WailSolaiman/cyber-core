import { buildMuxPlayerSrc } from '../lib/muxPlayer'

/** Playback frame aspect (width / height), matches Mux asset 683×360. */
const VIDEO_W = 683
const VIDEO_H = 360

/**
 * Full-bleed Mux Player: fills the hero layer with a true “cover” crop
 * (uses container size, not the viewport, so tall heroes don’t get letterboxing).
 */
export function MuxHeroIframe() {
  const src = buildMuxPlayerSrc()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 [container-type:size]"
        aria-hidden
      >
        <iframe
          src={src}
          title="Hero background video"
          className="absolute top-1/2 left-1/2 max-w-none border-0 -translate-x-1/2 -translate-y-1/2"
          style={{
            /* Cover: width = max(containerW, containerH * videoAspect) */
            width: `max(100cqw, calc(100cqh * ${VIDEO_W} / ${VIDEO_H}))`,
            aspectRatio: `${VIDEO_W} / ${VIDEO_H}`,
            height: 'auto',
          }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
        />
      </div>
    </div>
  )
}
