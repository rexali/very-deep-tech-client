'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AWFLogo from '@/components/AWFLogo';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import Cart from '@mui/icons-material/ShoppingCart';
import { handleSignOut } from '@/app/auth/utils/handleSignOut';
import Link from 'next/link';
import { SERVER_URL } from '@/constants/url';
import { Avatar, Button } from '@mui/material';
import { AppContext } from '@/context/AppContext';
import Notifications from '@mui/icons-material/Notifications';
import Message from '@mui/icons-material/Message';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';

const pages = [
  'About',
  "Services",
  'Contact',
  'Products',
];

const menus = [
  'Messages',
  'Notifications'
];

function NavBar(props: any) {

  const { state } = React.useContext(AppContext);

  const { user } = useAuth();

  const router = useRouter()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const [anchorElCat, setAnchorElCat] = React.useState<null | HTMLElement>(null);

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenCategoryMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElCat(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu: any = () => {
    setAnchorElUser(null);
  };

  const handleCloseCategoryMenu = () => {
    setAnchorElCat(null);
  };

  const isMobile = useMediaQuery({ maxDeviceWidth: 1023 });
  let categories = props?.categories ?? [];
  const categoriex = Array.from(new Set(categories));

  return <AppBar position={isMobile ? "fixed" : "static"} sx={{ backgroundColor: 'green' }}>
    <Container maxWidth={"xl"}>
      <Toolbar disableGutters>
        {!isMobile && <AWFLogo />}
        <Link
          type='button'
          href={'/'}
          style={{
            display: isMobile ? "none" : '',
            fontSize: 18,
            textDecoration: 'none',
            color: 'white',
            marginRight: 5,
            letterSpacing: '.1rem',
            fontWeight: 700,
          }}
        >
          cShop
        </Link>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user?"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page, index) => (
              <MenuItem key={index + "me"} onClick={handleCloseNavMenu}>
                {<Link key={index + "li"} style={{ marginLeft: "5px", textDecoration: "none" }} href={`/${page.toLowerCase()}`}>{page}</Link>}
              </MenuItem>
            ))}
            <hr />
            <MenuItem key={"categories"}>
              CATEGORIES
            </MenuItem>
            <hr />
            {categoriex.map((category: any, index: any) => (
              <MenuItem key={index + "me"} onClick={handleCloseNavMenu}>
                {<Link key={index + "li"} style={{ marginLeft: "5px", textDecoration: "none" }} href={`/category/?term=${category.toLowerCase()}`}>{category}</Link>}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Link
          type='button'
          href={'/'}
          style={{
            textDecoration: "none",
            marginRight: 2,
            display: isMobile ? 'flex' : 'none',    ///{ xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 400,
            letterSpacing: '.1rem',
            color: 'inherit',
          }}>
          cShop
        </Link>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page, index) => (<Link
            key={index + "p"}
            onClick={() => { handleCloseNavMenu }}
            href={`/${page === "Waqf" ? "waqfs" : page.toLowerCase()}`}
            style={{ margin: 4, color: 'white', display: 'block', textDecoration: "none", fontSize: 18 }}
          >
            {page}
          </Link>
          ))}
        </Box>
        {/* Carts components */}
        {!isMobile && <Link href={'/carts'} style={{ marginRight: 16, color: "white", textDecoration: "none" }} >
          <Button sx={{ color: "white" }} startIcon={<Cart />}>Cart</Button><sup style={{ color: "yellow" }}>{state.carts?.length !== 0 ? state.carts?.length : ''}</sup>
        </Link>}
        {isMobile && <Link href={'/carts'} style={{ color: "white", textDecoration: "none" }} >
          <Cart sx={{ fontSize: 18, }} /><sup style={{ color: "yellow", marginRight: 10 }}>{state.carts?.length !== 0 ? state.carts?.length : ''}</sup>
        </Link>}
        {/* end */}
        {/* Messages component */}
        {!isMobile && <Link href={'/messages/user'} style={{ marginRight: 16, display: (user?._id !== null) ? '' : 'none' }} ><Message sx={{ color: "white" }} /></Link>}
        {/* Notification component */}
        {!isMobile && <Link href='/notifications' style={{ marginRight: 16, display: (user?._id !== null) ? '' : 'none' }} ><Notifications sx={{ color: "white" }} /></Link>}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open menu">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {
                user?.photo ?
                  <Image
                    src={`${SERVER_URL}/uploads/${user.photo}`}
                    width={30}
                    height={30}
                    alt="Account"
                    style={{
                      borderRadius: 20,
                    }}
                  /> : <Avatar />
              }
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >

            <MenuItem key={"signin"} onClick={handleCloseUserMenu}>
              <Link style={{ textDecoration: "none", display: user?.token ? 'none' : '' }} href={`/auth/signin`}>Sign In</Link>
            </MenuItem>


            <MenuItem key={"signup"} onClick={handleCloseUserMenu}>
              <Link style={{ textDecoration: "none" }} href={`/auth/signup`}>Sign Up</Link>
            </MenuItem>


            {
              user?._id !== null && <MenuItem key={"signup"} onClick={handleCloseUserMenu}>
                <Link style={{ textDecoration: "none" }} href={`/users`}>Account</Link>
              </MenuItem>
            }

            {
              user?._id !== null && <MenuItem key={"signup"} onClick={handleCloseUserMenu}>
                <Link onClick={() => handleSignOut(router)} style={{ textDecoration: "none" }} href={'#'}>Logout</Link>
              </MenuItem>
            }
            {/* Other Menu components */}
            {menus.map((menu, index) => (
              <MenuItem key={menu} onClick={handleCloseUserMenu}>
                {
                  (user?._id !== null) && <Link style={{ textDecoration: "none" }} key={index + "s"} href={`/${menu === 'Messages' ? menu.toLowerCase() + '/user' : menu.toLowerCase()}`}>{menu}</Link>
                }
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
}
export default NavBar;