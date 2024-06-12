/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue1': "#5E94FF",
        'blue2': "#0057FE",
        'toogle1': "#73C0FC",
      },
      width: {
        '17em': "17em",
        '4.8em': "4.8em",
      },
      height: {
        '22.5em': "22.5em",
        '5.8em': "5.8em",
        '34px': "34px",
      },
      borderRadius: {
        '20px': "20px",
        '30px': "30px",
      },
      fontSize: {
        '1em': "1em",
        '0.72em': "0.72em",
      },
      spacing: {
        '1em': "1em",
        '1.75': "5px",
      },
      transitionDuration: {
        '.4s': ".4s",
      },
      zIndex: {
        '1': "1",
      },
    },
  },
  plugins: [],
}

