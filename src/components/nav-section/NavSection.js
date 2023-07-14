// import PropTypes from 'prop-types';
// import { NavLink as RouterLink } from 'react-router-dom';
// // @mui
// import { Box, List, ListItemText } from '@mui/material';
// //
// import { StyledNavItem, StyledNavItemIcon } from './styles';

// // ----------------------------------------------------------------------
// NavSection.propTypes = {
//   data: PropTypes.array,
// };

// export default function NavSection({ data = [], ...other }) {
//   console.log(data,'data')
//   return (
//     <Box {...other}>
//       <List disablePadding sx={{ p: 1 }}>
//         {data.map((item) => (
//           <>
//           </>
//           // <NavItem key={item.title} item={item} />
//         ))}
//       </List>
//     </Box>
//   );
// }

// // ----------------------------------------------------------------------

// NavItem.propTypes = {
//   item: PropTypes.object,
// };

// function NavItem({ item }) {
//   const { title, path, icon, info } = item;

//   return (
//     <StyledNavItem
//       component={RouterLink}
//       to={path}
//       sx={{
//         '&.active': {
//           color: 'text.primary',
//           bgcolor: 'action.selected',
//           fontWeight: 'fontWeightBold',
//         },
//       }}
//     >
//       <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

//       <ListItemText disableTypography primary={title} />

//       {info && info}
//     </StyledNavItem>
//   );
// }

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navSections.css'
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import navConfig from '../../layouts/dashboard/nav/config'

export default function NavSection() {
  const navigate =useNavigate()
  return (
    <>
      <Navigation
        // you can use your own router's api to get pathname
        activeItemId="/management/members"
        onSelect={({ itemId }) => {
          console.log(itemId)
          
          navigate(itemId)
          // maybe push to the route

        }}
        items={navConfig}
      />
    </>
  );
}
