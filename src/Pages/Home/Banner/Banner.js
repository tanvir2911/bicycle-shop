import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import banner1 from '../../../images/Banner/pexels-danny-bor-9994208.jpg';

const bgImage = {
    background: `url(${banner1})`,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken,luminosity',

    backgroundSize: 'cover',

}

const Banner = () => {
    return (
        <Container style={{ ...bgImage, minHeight: '500px' }
        } >
            <Box>
                {/* <img style={{ width: '100%', height: '100%' }} src={banner1} alt="" /> */}
            </Box>
        </Container >
    );
};

export default Banner;