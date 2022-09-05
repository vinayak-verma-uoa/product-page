import Head from 'next/head';
import Appbar from '../components/AppBar';
import Grid from '../components/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

export default function Home() {
  return (
    <>
    <Head>
      <title>Phase 3 Frontend</title>
    </Head>
    <Appbar />
    <div style={{marginTop: 20,}}>
    <ThemeProvider theme={theme}>
      <Typography variant="h3">Responsive h3</Typography>
    </ThemeProvider>
      <Grid rowSpacing={2} alignTitle="left"/>
    </div>
    </>
  );
}
