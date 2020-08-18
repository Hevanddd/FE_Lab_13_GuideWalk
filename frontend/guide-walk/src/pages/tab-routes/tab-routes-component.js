import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { TopRoutesPage } from '../top-routes';
import { MyRoutesPage } from '../my-routes-page';
import { Search } from '../../ui';
import './tab-routes-component.scss';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export const FullWidthTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#457b9d',
      },
    },
  });

  return (
    <div className='root'>
      <ThemeProvider theme={theme}>
        <Tabs
          style={{ width: '70%', margin: '0 auto'}}
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          aria-label='full width tabs example'
        >
          <Tab label='Top Routes' {...a11yProps(0)} />
          <Tab label='My Routes' {...a11yProps(1)} />
        </Tabs>
      </ThemeProvider>
      <div className='search'>
        <Search />
      </div>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <TopRoutesPage />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MyRoutesPage />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};
