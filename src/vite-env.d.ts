/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MUX_PLAYBACK_ID?: string
  /** Optional Mux Player URL query (no leading `?`), e.g. `metadata-video-title=...&video-title=...` */
  readonly VITE_MUX_PLAYER_PARAMS?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
