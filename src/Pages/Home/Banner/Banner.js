import { Box } from '@mui/system';
import React from 'react';
import banner1 from '../../../images/Banner/pexels-danny-bor-9994208.jpg';

const bgImage = {
    background: `url(${banner1})`,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken,luminosity',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    zoom: '120%'

}

const Banner = () => {
    return (
        <Box style={{ ...bgImage, minHeight: '500px' }
        } >
            <Box>
                {/* <img style={{ width: '100%', height: '100%' }} src={banner1} alt="" /> */}
            </Box>
        </Box >
    );
};

export default Banner;