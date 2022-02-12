import React, { useEffect } from 'react';


import './Home.css';
import { Button, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const Home = () => {

    const [getuserdata, setuserdata] = React.useState([]);
    console.log(getuserdata);

    const getinputdata = async (event) => {
        const res = await fetch('/getdata', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            
        });
        const data = await res.json();
        console.log(data);

        if(res.status === 200) {
            setuserdata(data);
            alert('Get Sucessfully');
        } else {
            alert('Did not get any data');
        }
    };

    useEffect(() => {
        getinputdata();
    } , []);

    return (
        <div className = 'main_div' >      
        <div className='mt-5'>
            <div className='container'>
                <div className='add_btn mt-2'>
                    <Link to='/addProduct'>
                      <Button variant="success" ><i class="fas fa-plus" />Add Member</Button>
                    </Link>
                </div>
                
                <Table striped bordered hover className='mt-5'>
                    <thead>
                        <tr className='table-dark'>
                        <th>Serial</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Mobile</th>
                        <th>E-mail</th>
                        <th>Description</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                    
                        { getuserdata.map((item, id) => {
                            
                            return (
                                
                               
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{ item.name}</td>
                                        <td>{ item.username}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.email}</td>
                                        <td>{item.description}</td>
                                        <td className='d-flex justify-content-between'>
                                            <Button variant='success'>< VisibilityIcon /></Button>
                                            <Button variant='warning'><EditIcon /></Button>
                                            <Button variant='danger'><DeleteIcon /></Button>
                                            
                                        </td>
                                    </tr>
                                
                            );
                        })}

                     
                        
                        
                    </tbody>

                   
                    </Table>

            </div>
        </div>
    </div>  
    );
};
export default Home;