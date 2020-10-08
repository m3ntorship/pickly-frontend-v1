module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: {
    // enabled: true,
    content: [
      './public/**/*.html',
      './src/**/*.html',
      './src/**/*.jsx',
      './src/**/*.js'
    ]
  },
  // ...
  theme: {
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
      secondary: ['Roboto', 'sans-serif']
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      xbold: 900
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      md: '1.125rem', // 20px
      lg: '1.5rem', // 24px
      xlg: '1.875rem', // 30px
      xxlg: '2.5rem' //40px
    },
    colors: {
      c100: '#7048E8', // Blue
      c200: '#FE2C55', // Red
      c300: '#44444F', // Black 1
      c400: '#171725', // Black 2
      c500: '#92929D', // Grey 1
      c600: '#7A7A7A', // Grey 2
      c700: '#E5E5E5', // Grey 3
      c800: '#EEEEEE', // Grey 4
      c900: '#FAFAFB', // Off Wgight
      c1000: '#78F1CD', // Green
      white: '#FFF',
      black: '#000',
      c100_op: {
        10: 'rgba(112, 72, 232, 0.1)',
        15: 'rgba(112, 72, 232, 0.15)'
      }
    },
    boxShadow: {
      background: '0px 4px 25px 0px rgba(196, 203, 216, 0.25)'
    },

    corePlugins: {
      container: false
    },
    extend: {
      width: {
        lg: '42.75rem'
      },
      height: {
        lg: '42.75rem'
      },
      borderRadius: {
        xlg: '3.75rem'
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'], // adding opacity to group-hover
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'], // adding bg to group-hover
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'] // adding textColor to group-hover
  },
  plugins: []
};
