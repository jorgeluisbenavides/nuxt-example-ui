// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#1e90ff',
        yellow: '#ffb703',
      },
    },
  },
  plugins: [],
}

export default config
