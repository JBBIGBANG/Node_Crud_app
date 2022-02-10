import React from 'react';

import { Button} from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { CardContent } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import DescriptionIcon from '@mui/icons-material/Description';

import './Details.css';

const Details = () => {
    return(
        <div className='container mt-3'>
            <h1 style={{ fontWeight: 400  }}>Welcome Joy Sarkar</h1>

            <Card sx={{ minWidth:275 }}>
                <CardContent>
                <div className='add_btn'>
                                <Button variant='warning' className='btn mx-2'><EditIcon /></Button>
                                <Button variant='danger'><DeleteIcon /></Button>
                </div> 
                   <div className='row'>
                    <div className='left_view col-lg-6 col-md-6 col-12'>
                            <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='Joy Sarkar' 
                                style={{ width: 70 , height: 50}} />
                            <h3 className='mt-3'>Name: <span style={{ fontWeight: 400  }} >Joy Sarkar</span></h3>
                            <h3 className='mt-3'>Age: <span style={{ fontWeight: 400  }} >24</span></h3>
                            <p className='mt-3'><EmailIcon />Email: <span style={{ fontWeight: 400  }}>sjoy.cse3.bu@gmail.com</span></p>
                            <p className='mt-3'><WorkIcon />Occupation: <span style={{ fontWeight: 400  }}>Software Developer</span></p>
                        </div>
                        

                        <div className='right_view col-lg-6 col-md-6 col-12 '>  

                                  
                            <p className='mt-5'><PhoneAndroidIcon />Mobile: <span style={{ fontWeight: 400  }}>01941233500</span></p>
                            <p className='mt-3'><EditLocationIcon />Location: <span style={{ fontWeight: 400  }} >Barishal</span></p>
                            <p className='mt-3'><DescriptionIcon />Description: <span style={{ fontWeight: 400  }}>
                                Hello I am Joy sarkar. I am 24 years old</span></p>
                        </div>
                   </div>
                   
                    
                </CardContent>
            </Card>
        </div>
    );
};
export default Details;