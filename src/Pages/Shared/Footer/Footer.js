import { Button, Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import footer from '../../../images/Banner/pexels-pavel-danilyuk-5807629.jpg';

const footerBg = {
    background: `url(${footer})`,
    backgroundPosition: 'center',
    backgroundColor: 'rgba(109, 108, 112, 0.8)',
    backgroundBlendMode: 'lighten,luminosity',
    marginTop: '150px'

}


const Footer = () => {
    return (
        <Box style={{ ...footerBg, }} px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
            <Container >
                <Grid container spacing={2}>
                    <Grid textAlign="left" item xs={12} sm={6} md={3}>
                        <Box >
                            <Link style={{ color: 'rgba(32, 32, 38, 0.8)', fontWeight: "900" }} underline="none" color="text.secondary" href="/">Useful Links</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">About Us</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Our Community</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Local Events</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Privacy Policy</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Service Plus</Link>
                        </Box>
                    </Grid>
                    <Grid textAlign="left" item xs={12} sm={6} md={3}>
                        <Box >
                            <Link style={{ color: 'rgba(32, 32, 38, 0.8)', fontWeight: "900" }} underline="none" color="text.secondary" href="/">Our Shop</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Bikes & Parts</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Clothing</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Bikes for Rent</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Booking Form</Link>
                        </Box>

                    </Grid>
                    <Grid textAlign="left" item xs={12} sm={6} md={3}>
                        <Box >
                            <Link style={{ color: 'rgba(32, 32, 38, 0.8)', fontWeight: "900" }} underline="none" color="text.secondary" href="/">Sitemap</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Home</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Explore</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Dashboard</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">My Orders</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Review</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Payment</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Login</Link>
                        </Box>
                    </Grid>
                    <Grid textAlign="left" item xs={12} sm={6} md={3}>
                        <Box >
                            <Link style={{ color: 'rgba(32, 32, 38, 0.8)', fontWeight: "900" }} underline="none" color="text.secondary" href="/">Our Address</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Abdullahpur, Dhaka</Link>
                        </Box>
                        <br />
                        <br />
                        <Box >
                            <Link>
                                <FacebookRoundedIcon style={{ color: '#5CE7ED', fontWeight: "900", fontSize: "30px", marginRight: "10px" }} />
                            </Link>
                            <Link>
                                <GoogleIcon style={{ color: '#5CE7ED', fontWeight: "900", fontSize: "30px", marginRight: "10px" }} />
                            </Link>
                            <Link>
                                <TwitterIcon style={{ color: '#5CE7ED', fontWeight: "900", fontSize: "30px", marginRight: "10px" }} />
                            </Link>
                        </Box>
                        <br />
                        <br />
                        <Box>
                            <Typography color="text.secondary" >Call Now</Typography>
                        </Box>
                        <Box>
                            <Button variant="contained" style={{ backgroundColor: 'rgba(32, 32, 38, 0.8)' }}>+02552549164664</Button>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                    <Typography color="text.secondary">
                        Copyright || Bicycle Shop &reg; {new Date().getFullYear()} All Rights Reserved
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;



