import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const NEWS_DATA = [1, 2, 3, 4, 5, 6, 7, 8];
function NewsList(props) {
    const elements = props.news;
    const listItems = elements.map((element) =>
        <Grid key={element} item xs={1}>
            <Item>News Item: {element}</Item>
        </Grid>
    );
    return (
        listItems
    );
  }

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={2} columnSpacing={{xs: 1, sm: 2, md: 3, lg: 4, xl: 5}} columns={{xs: 1, sm: 2, md: 3, lg: 4, xl: 5}}>
            <NewsList news={NEWS_DATA}/>
        </Grid>
    </Box>
  );
}