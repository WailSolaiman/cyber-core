import { resolveMuxPlaybackId } from './muxPlaybackId'

/** Default Mux Player query string (matches stitch / dashboard titles). */
export const DEFAULT_MUX_PLAYER_SEARCH =
  'metadata-video-title=5473970-hd_1366_720_25fps&video-title=5473970-hd_1366_720_25fps'

/**
 * `https://player.mux.com/{playbackId}?{search}`
 * Optional env: `VITE_MUX_PLAYER_PARAMS` (full query string, no leading `?`).
 * Always adds muted autoplay + loop so the hero behaves like a background clip
 * (no stuck center play button, no audio).
 */
export function buildMuxPlayerSrc(): string {
  const id = resolveMuxPlaybackId()
  const raw = import.meta.env.VITE_MUX_PLAYER_PARAMS?.trim()
  const base = raw && raw.length > 0 ? raw.replace(/^\?/, '') : DEFAULT_MUX_PLAYER_SEARCH
  const params = new URLSearchParams(base)

  params.set('autoplay', 'muted')
  params.set('muted', 'true')
  params.set('loop', 'true')
  params.set('preload', 'auto')

  return `https://player.mux.com/${id}?${params.toString()}`
}
