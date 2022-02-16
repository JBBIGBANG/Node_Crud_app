import React, {useState, useEffect} from 'react';

import { Button} from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import DescriptionIcon from '@mui/icons-material/Description';
import { useParams, Link, useNavigate } from 'react-router-dom';

import './Details.css';

const Details = () => {
    const navigator = useNavigate();
    const [getuserdata, setuserdata] = React.useState([]);
    
    const {id} = useParams();
    const getinputdata = async (event) => {
        const res = await fetch(`/finduser/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
            
        });
        const data = await res.json();
        console.log(data);

        if(res.status === 200) {
            setuserdata(data);
            res.status(200).json(data);
        } else {
            alert('Did not get any data');
        }
    };

    useEffect(() => {
        getinputdata();
    }, []);

    const deleteUser = async (id) => {
        const result = await fetch(`/deleteuser/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await result.json();
        console.log(data);
        if(result.status === 200) {
            console.log('deleted');
            navigator('/');
        }
        else {
            alert('Error');
        }
    };

    return(
        <div className='container mt-3'>
            <h1 style={{ fontWeight: 400  }}>Welcome {getuserdata.name}</h1>

            <Card sx={{ minWidth:275 }}>
                <CardContent>
                <div className='add_btn'>
                                <Link to={`/editProduct/${getuserdata._id}`}><Button variant='warning' className='btn mx-2'><EditIcon /></Button></Link>
                                <Button variant='danger' onClick={()=>deleteUser(getuserdata._id)} ><DeleteIcon /></Button>
                </div> 
                   <div className='row'>
                    <div className='left_view col-lg-6 col-md-6 col-12'>
                            <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='Joy Sarkar' 
                                style={{ width: 70 , height: 50}} />
                            <h3 className='mt-3'>Name: <span style={{ fontWeight: 400  }} >{getuserdata.name}</span></h3>
                            <h3 className='mt-3'>Username: <span style={{ fontWeight: 400  }} >{getuserdata.username}</span></h3>
                            <p className='mt-3'><EmailIcon />Email: <span style={{ fontWeight: 400  }}>{getuserdata.email}</span></p>
                            <p className='mt-3'><WorkIcon />Occupation: <span style={{ fontWeight: 400  }}>Software Developer</span></p>
                        </div>
                        

                        <div className='right_view col-lg-6 col-md-6 col-12 '>  

                                  
                            <p className='mt-5'><PhoneAndroidIcon />Mobile: <span style={{ fontWeight: 400  }}>{getuserdata.mobile}</span></p>
                            <p className='mt-3'><EditLocationIcon />Location: <span style={{ fontWeight: 400  }} >Barishal</span></p>
                            <p className='mt-3'><DescriptionIcon />Description: <span style={{ fontWeight: 400  }}>
                                {getuserdata.description}</span></p>
                        </div>
                   </div>
                   
                    
                </CardContent>
            </Card>
        </div>
    );
};
export default Details;