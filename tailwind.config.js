/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          blue : '#103755',
          orange1 : '#D89216',
      },
      secondary:{
          deals : '#CCFFFE',
          productbg : '#E6EAF0',
          bottom: '#F9F9F9',
          featuredbg : '#E6EAF0',
          border : '#596579',
          grey : '#E6EAF0',
          line: '#A7B2C3',
          iconText: '#374253',
          navText : '#FFFFFF',
          dropdownbg: "#FFE0AA",
          copyrightbg: "#0F1825",
          greytext : "#374253",
          greydefault : "#7B8698",
          productdetailsbg : "#EFEFEF",
          productelement : "rgba(254, 252, 252, 1)",
          cartBtnBg : "rgba(61, 174, 108, 1)",
      }
    },
    fontFamily:{
      'poppins' : ['Poppins', 'sans-serif']
    }
  },
  plugins: [

  ],
}
}

