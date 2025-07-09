/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/app.vue",
  ],
  theme: {
    extend: {},
    colors: {
      'blue': {
        50: '#D2D9E0',   // (azul grisaseo elementos decorativos sobre fondo)
        100: '#D4E0EE',  // (azul grisaseo fondo boton)
        500: '#4782C1',
        600: '#174F8B',
        800: '#062A51',
      },
      'grey': {
        50: '#EEF0F1',
        100: '#F1F4F7', // (fondos)
        200: '#EAEAEA', // (inputs)
        250: '#EAEAEA',
        300: '#D2D9E0',
        400: '#6b7280',
      },
      'red': {
        500: '#FF4B71',
        600: '#E52020',
      },
      'white': {
        50: '#FFFFFF',
        100: '#FDFEFE',
        125: '#F6F9FC',
        200: '#BFB8B891',
      },
      'violet': {
        100: '#BE3B5D',
      },
      'yellow': {
        50: '#FFE9B8',
        100: '#FFD066',
      },
      'blue-color': 'rgb(27 119 219)',
      'green-color': 'rgb(113 221 86)',
      'yellow-color': 'rgb(243 198 39)',
      'red-color': 'rgba(229, 32, 32, 1)',
      'orange-color': 'rgb(237 79 16)',
      'strong-blue-color': 'rgb(6 42 81)',
      'strong-green-color': 'rgb(56 178 172)',
      'grey-color': 'rgba(85, 85, 85, 1)',
      'badge-blue-color': 'rgb(27 119 219)',
      'badge-green-color': 'rgb(113 221 86)',
      'badge-yellow-color': 'rgb(243 198 39)',
      'badge-red-color': 'rgba(229, 32, 32, 1)',
      'badge-orange-color': 'rgb(237 79 16)',
      'badge-strong-blue-color': 'rgb(6 42 81)',
      'badge-strong-green-color': 'rgb(56 178 172)',
      'badge-grey-color': 'rgba(85, 85, 85, 1)',
    }
  },
  plugins: [],
}

