import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import perf from './perfume-bottle.png';
import watch from './watch.jpg';
import neck from './necklace.png';

function ProductCard({ productName, productDescription, price, imageUrl }) {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: productName,
        text: productDescription,
        url: window.location.href,
      });
      console.log('Shared successfully');
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  return (
    <Box className="product-card" p={3} boxShadow={2} borderRadius={8} style={{ marginBottom: '20px', width: '300px' }}>
      <div style={{ height: '200px', overflow: 'hidden', marginBottom: '10px' }}>
        <img
          src={imageUrl}
          alt={productName}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <h2 style={{ color: 'black' }}>{productName}</h2>
      <p style={{ color: 'black' }}>{productDescription}</p>
      <p style={{ color: 'black' }}>Price: {price}rs</p>
      <button>BUY</button>
      <button style={{ marginLeft: '10px' }} onClick={handleShare}>
        SHARE
      </button>
    </Box>
  );
}

function Dashboard({ onLogout }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="dashboard-container">
    <AppBar className="dashboard-app-bar" position="static" style={{ backgroundColor: 'black' }}>
  <Toolbar>
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={() => setIsDrawerOpen(true)}
    >
      <MenuIcon />
    </IconButton>

    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
      <Box style={{ display: 'flex', alignItems: 'center', flex: 1 ,margin:'0px' }}>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Box>
      <button color="inherit" onClick={() => window.location.reload()} style={{ marginLeft: '10px' }}>
        Logout
      </button>
    </Box>
  </Toolbar>
</AppBar>


      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sx={{ width: '1000px', marginleft:'50%',padding:'10vh','& .MuiDrawer-paper': { backgroundColor: 'black' } }}
        >
        <div>
          <List>
            <ListItem button onClick={() => setIsDrawerOpen(false)}style={{color:'gold'}}>
              <ListItemText primary="" />
              Home
            </ListItem>
            <ListItem button onClick={() => setIsDrawerOpen(false)}style={{color:'gold'}}>
              <ListItemText primary="" />
              About us
            </ListItem>
            <ListItem button onClick={() => setIsDrawerOpen(false)} style={{color:'gold'}}>
              <ListItemText primary="" />
              Contact us
            </ListItem>
          </List>
        </div>
      </Drawer>

      <Box className="dashboard-content" p={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <h2>Surprise your loved ones</h2>
  <p style={{ color: 'black' }}>Welcome to "The Gift shop!"</p>

  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
    {/* Product Card 1 */}
    <ProductCard
      productName="Perfume"
      productDescription="Perfume for gift"
      price={80}
      imageUrl={perf}
    />

    {/* Product Card 2 */}
    <ProductCard
      productName="Watch"
      productDescription="Elegant watch for special occasions"
      price={120}
      imageUrl={watch}
    />

    {/* Product Card 3 */}
    <ProductCard
      productName="Jewelry Set"
      productDescription="Beautiful jewelry set for a perfect gift"
      price={15000}
      imageUrl={neck}
    />
  </div>
</Box>

      <Box className="dashboard-about-us" p={3}>
        <h3>About Us</h3>
        <p style={{ color: 'black' }}>
          The Gift Company is dedicated to providing unique and thoughtful gifts for all occasions.
          Our carefully curated collection includes a variety of products to make your gift-giving
          experience truly special.It is a treasure trove of sentiments and surprises, carefully 
          curated to encapsulate the essence of special moments. Brimming with a diverse array of
           thoughtfully selected items, a gift shop is a haven for those seeking the perfect token 
           of affection or celebration. From charming trinkets and elegant accessories to heartwarming 
           cards and exquisite keepsakes, these stores offer a kaleidoscope of choices to suit every
            occasion. Whether commemorating birthdays, anniversaries, or simply expressing gratitude,
             a gift shop transforms the act of giving into an art form, capturing the joy of both the 
             giver and the recipient. With its whimsical displays and an ambiance filled with the promise 
             of delight, a gift shop beckons patrons to explore, discover, and ultimately share in the 
             joy of giving and receiving heartfelt expressions of love and appreciation.
        </p>
        {/* Add more about us content as needed */}
      </Box>

      {/* Contact Us Section */}
      <Box className="dashboard-contact-us" p={3} style={{ backgroundColor: 'black', color: 'white' }}>
        <h3>Contact Us</h3>
        <p>
          Have questions or need assistance? Reach out to us via email at <a href="mailto:thegiftshop@gmail.com">thegiftshop@gmail.com</a>.
        </p>
        {/* Add more contact information or form as needed */}
      </Box>

      <Box className="dashboard-footer" p={3}>
        <p style={{ color: 'black' }}>© 2023 The Gift Company. All rights reserved.</p>
      </Box>
    </div>
  );
}

export default Dashboard;
