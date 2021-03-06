import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

Wordpress2016.overrideThemeStyles = () => {
  return {
    'a' : {
      boxShadow: `none`
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    'header p': {
      color: `grey`,
      fontStyle: `italic`,
    },
    '.navigation ul': {
      listStyle: `none`,
      padding: `10px 0`
    },
    '.navigation ul li': {
      marginBottom: `0`
    }
  };
};

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
