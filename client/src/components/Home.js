import React from 'react';


import './Home.css';
import { Button, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const Home = () => {
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
                        <th>E-mail</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>@mdo</td>
                        <td>mark@gmail.com</td>
                        <td className='d-flex justify-content-between'>
                            <Button variant='success'>< VisibilityIcon /></Button>
                            <Button variant='warning'><EditIcon /></Button>
                            <Button variant='danger'><DeleteIcon /></Button>
                            
                        </td>
                        </tr>
                        
                        
                    </tbody>
                    </Table>

            </div>
        </div>
    </div>  
    );
};
export default Home;