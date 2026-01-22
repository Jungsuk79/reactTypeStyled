// UI / UX 가이드에 따른 스타일 정의 

interface GrayPalette {
  100: string; 200: string; 300: string; 600: string; 900: string;
  101: string; 201: string; 301: string; 302: string;
}

interface FontStructure {
  h1: string; h2: string; h3: string; h4: string; h5: string;
  h6: string; h7: string; h8: string; h9: string;
}

interface FontWeight {
  thin: string; light: string; regular: string;
  medium: string; semiBold: string; bold: string; black: string;
}

export interface Theme {
  PALETTE: {
    primary: {
      main: string;
      light: string;
      dark: string;
    };
    secondary: {
      main: string;
      sub: string;
      light: string;
      dark: string;
    };
    white: string;
    black: string;
    gray: GrayPalette;
    error: string;
    background: {
      white: string;
      gray: string;
      black: string;
    };
  };
  FONT_SIZE: FontStructure;
  FONT_LINE: FontStructure;
  FONT_WEIGHT: FontWeight;
}

const theme: Theme = {
  PALETTE: {
    primary: {
      main: '#03a63c',
      light: '#e6f6e8',
      dark: '#00630e'
    },
    secondary: {
      main: '#f27830',
      sub: '#fff4d8',
      light: '#fce3d4',
      dark: '#eb6413'
    },
    white: '#ffffff',
    black: '#000000',
    gray: {
      100: '#111', 200: '#222', 300: '#333', 600: '#666', 900: '#999',
      101: '#f5f5f5', 201: '#d9d9d9', 301: '#cccccc', 302: '#c0c0c0',
    },
    error: '#eb6144',
    background: {
      white: '#eee',
      gray: '#f1ebf5',
      black: '#333',
    }
  },
  FONT_SIZE: {
    h1: '48px', h2: '36px', h3: '28px', h4: '24px', h5: '20px',
    h6: '16px', h7: '14px', h8: '12px', h9: '10px'
  },
  FONT_LINE: {
    h1: '68px', h2: '52px', h3: '42px', h4: '36px', h5: '30px',
    h6: '24px', h7: '22px', h8: '18px', h9: '16px'
  },
  FONT_WEIGHT: {
    thin: '100', light: '300', regular: '400',
    medium: '500', semiBold: '600', bold: '700', black: '800'
  }
};

export default theme;
