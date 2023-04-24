import { Grid, Typography,TextField ,Box  } from '@mui/material';
import React from 'react';
import CollageImage from './collage.png'

const About = () => {
    const AboutContent = { marginTop: '-25%' }
    return (
        <>

            <div >
                <img
                    src="https://cdn.olaelectric.com/ev-discovery-platform/wysiwyg/Banner_Image_About_Page_49d62e8de3.webp"
                    alt="Banner_Image_About_Page_49d62e8de3"
                    title=""
                    width={'100%'}
                />
            </div>


            <div style={AboutContent}>
                <h3 style={{ textAlign: 'center' }}>
                    <em>
                        <span style={{ color: '#92c83e' }}>
                            <strong>
                                <span style={{ fontSize: '20px' }}>&nbsp;</span>
                            </strong>
                        </span>
                    </em>
                    <span style={{ color: '#92c83e' }}>
                        <strong>
                            <span style={{ fontSize: '20px' }}>ABOUT </span>
                            <span style={{ fontSize: '20px' }}>US</span>
                        </strong>
                    </span>
                </h3>
            </div>


            <div >
                <div>
                    <div style={{ textAlign: 'center', color: 'white' }}>
                        <span style={{ fontSize: '32px' }}>
                            <strong>Leading the electric</strong>
                        </span>
                    </div>
                    <div style={{ textAlign: 'center', color: 'white' }}>
                        <span style={{ fontSize: '32px' }}>
                            <strong>mobility revolution</strong>
                        </span>
                    </div>
                </div>
            </div>



            <div style={{ width:'50%',marginLeft: '20%', marginTop: '25%' }}>
                <span style={{ fontSize: '60px', paddingBottom:'200px' }}>
                    <strong>A Prequel to the Revolution</strong>
                </span><br/>
                <span style={{ fontSize: '16px'  }}>
                    <br/><br/>  From a startup in Bangalore to a global brand operating on 3 different continents, Ola has carved itself a name by being India’s largest mobility platform and one of the world’s largest ride-hailing companies.
                    </span>

            </div>
            <div  style={{ width:'80%',margin:'auto', marginTop:'5%'  }}> <img src={CollageImage}/></div>

            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
         xs=6 md=8
        </Grid>
        <Grid item xs={6} md={4}>
         xs=6 md=4
        </Grid>
        </Grid>
        </Box>




        </>
    );
};

export default About;
