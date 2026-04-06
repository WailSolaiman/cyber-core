/** Public demo playback ID; override with `VITE_MUX_PLAYBACK_ID` (Mux Player + stream URLs). */
export const DEFAULT_MUX_PLAYBACK_ID =
  've00J9DPbZRpQBveHp00017FS9Rfu4ff6DHvO4oWR02KW02s'

export function resolveMuxPlaybackId(): string {
  const fromEnv = import.meta.env.VITE_MUX_PLAYBACK_ID?.trim()
  return fromEnv && fromEnv.length > 0 ? fromEnv : DEFAULT_MUX_PLAYBACK_ID
}
