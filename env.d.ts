/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEV_EXTREME_LICENSE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
