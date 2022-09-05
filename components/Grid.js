import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import propTypes, { oneOf } from 'prop-types';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import * as React from 'react';


// Lorem ipsum
let lorem_ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non odio dui. Mauris in risus eget tortor commodo viverra. Etiam lacinia varius facilisis. Nullam pretium, turpis eu fringilla dictum, sapien diam egestas metus, quis vehicula magna turpis ac odio.";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// Grid news items
const NEWS_DATA = [1, 2, 3, 4, 5, 6, 7, 8];
function NewsList(props) {

    // back drop handling
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };

    const elements = props.news;
    const listItems = elements.map((element) =>
        <Grid key={element} item xs={1}>
            <Item>
              <Typography variant="h5" align={props.alignTitle}>News Item {element}</Typography>
              <Typography 
                variant="body2" 
                align='center'>
                {lorem_ipsum}
              </Typography>
              <br />
              {element === 1 ? 
              <>
              <Button 
                onClick={props.onClick}>
                View SRC
              </Button>
              <Button variant="outlined" onClick={handleToggle}>Show backdrop</Button>
              <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
              >
                News content....
                <br />
                Click anywhere to navigate back
              </Backdrop>
              </>
              :
              <></>}
            </Item>
            
        </Grid>
    );
    return (
        listItems
    );
  }

export default function BasicGrid({rowSpacing=2, alignTitle="center", onClick}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={rowSpacing} columnSpacing={{xs: 1, sm: 2, md: 3, lg: 4, xl: 5}} columns={{xs: 1, sm: 2, md: 3, lg: 4, xl: 5}}>
            <NewsList news={NEWS_DATA} alignTitle={alignTitle} onClick={onClick}/>
        </Grid>
    </Box>
  );
}

BasicGrid.propTypes = {
  rowSpacing: oneOf([1, 2, 3]),
  alignTitle: oneOf(['center', 'left', 'right']),
}